import { useEffect, useRef } from 'react'

/**
 * Night Sky ambient background (ported from atmosphérique): a twinkling starfield
 * with soft volumetric clouds drifting right-to-left, fixed behind all content,
 * reduced-motion aware. Two stacked canvases: 2D starfield + WebGL cloud layer.
 */
export function AmbientBackground() {
  const starRef = useRef(null)
  const cloudRef = useRef(null)

  useEffect(() => {
    const sc = starRef.current
    const cc = cloudRef.current
    if (!sc || !cc) return
    const ctx = sc.getContext('2d')
    const gl = cc.getContext('webgl', { alpha: true, premultipliedAlpha: false })
    if (!ctx || !gl) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const vs = `attribute vec2 a; void main(){ gl_Position=vec4(a,0.0,1.0); }`
    const fs = `
      precision highp float; uniform vec2 u_res; uniform float u_time;
      float hash(vec2 p){ p=fract(p*vec2(123.34,345.45)); p+=dot(p,p+34.345); return fract(p.x*p.y); }
      float noise(vec2 p){ vec2 i=floor(p),f=fract(p); vec2 u=f*f*(3.0-2.0*f);
        float a=hash(i),b=hash(i+vec2(1,0)),cc=hash(i+vec2(0,1)),d=hash(i+vec2(1,1));
        return mix(mix(a,b,u.x),mix(cc,d,u.x),u.y); }
      const mat2 M=mat2(1.6,1.2,-1.2,1.6);
      float fbm(vec2 p){ float v=0.0,a=0.5; for(int i=0;i<5;i++){ v+=a*noise(p); p=M*p; a*=0.5; } return v; }
      float clouds(vec2 p){ float w1=fbm(p*0.5+vec2(0.0,1.7)); float w2=fbm(p*0.5+vec2(4.2,-2.3)); return fbm(p+1.8*vec2(w1,w2)); }
      void main(){
        vec2 uv=gl_FragCoord.xy/u_res.xy;
        vec2 p=(uv-0.5)*vec2(u_res.x/u_res.y,1.0)*1.9;
        float t=u_time*0.012;
        vec2 q=p+vec2(t,t*0.05);
        q+=0.12*vec2(fbm(q*0.4+vec2(0.0,t*0.4)),fbm(q*0.4+vec2(5.0,-t*0.4)));
        float c=clouds(q);
        float cl=clouds(q+vec2(-0.13,-0.10));
        float shade=clamp((c-cl)*4.0+0.5,0.0,1.0);
        float rim=smoothstep(0.35,0.62,c)*(1.0-smoothstep(0.62,0.95,c));
        float lum=mix(0.022,0.18,shade)+rim*0.12*shade;
        float alpha=smoothstep(0.34,0.74,c)*0.95;
        float dn=hash(gl_FragCoord.xy+fract(u_time*73.0));
        lum+=(dn-0.5)/130.0; alpha+=(dn-0.5)/80.0;
        gl_FragColor=vec4(vec3(lum),alpha);
      }`
    const sh = (type, src) => {
      const o = gl.createShader(type)
      gl.shaderSource(o, src)
      gl.compileShader(o)
      return o
    }
    const prog = gl.createProgram()
    gl.attachShader(prog, sh(gl.VERTEX_SHADER, vs))
    gl.attachShader(prog, sh(gl.FRAGMENT_SHADER, fs))
    gl.linkProgram(prog)
    gl.useProgram(prog)
    const buf = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buf)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW)
    const loc = gl.getAttribLocation(prog, 'a')
    gl.enableVertexAttribArray(loc)
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0)
    const uRes = gl.getUniformLocation(prog, 'u_res')
    const uTime = gl.getUniformLocation(prog, 'u_time')
    gl.enable(gl.BLEND)
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA)

    let stars = []
    let dpr = 1, w = 0, h = 0

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = window.innerWidth
      h = window.innerHeight
      for (const c of [sc, cc]) {
        c.width = Math.max(1, Math.floor(w * dpr))
        c.height = Math.max(1, Math.floor(h * dpr))
      }
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const sn = Math.floor((w * h) / 1700)
      stars = []
      for (let i = 0; i < sn; i++) {
        stars.push({
          x: Math.random() * w, y: Math.random() * h,
          b: 0.3 + Math.random() * 0.7, tw: Math.random() * 6.28,
          sp: 0.006 + Math.random() * 0.02,
          r: Math.random() < 0.06 ? 1.5 : 0.8, big: Math.random() < 0.06,
        })
      }
    }

    const t0 = performance.now()
    let raf = 0
    const render = (now) => {
      const tt = (now - t0) / 1000
      ctx.fillStyle = '#0a0f1a'
      ctx.fillRect(0, 0, w, h)
      const band = ctx.createLinearGradient(0, h * 0.15, w, h * 0.75)
      band.addColorStop(0, 'rgba(48,50,60,0)')
      band.addColorStop(0.5, 'rgba(62,65,78,0.10)')
      band.addColorStop(1, 'rgba(48,50,60,0)')
      ctx.fillStyle = band
      ctx.fillRect(0, 0, w, h)
      for (const st of stars) {
        st.x -= st.sp
        if (st.x < 0) st.x += w
        const tw = 0.4 + 0.6 * (0.5 + 0.5 * Math.sin(tt * 1.8 + st.tw))
        const a = st.b * tw
        if (st.big) {
          const g = ctx.createRadialGradient(st.x, st.y, 0, st.x, st.y, st.r * 4.5)
          g.addColorStop(0, `rgba(236,238,246,${a * 0.5})`)
          g.addColorStop(1, 'rgba(0,0,0,0)')
          ctx.fillStyle = g
          ctx.fillRect(st.x - st.r * 4.5, st.y - st.r * 4.5, st.r * 9, st.r * 9)
        }
        ctx.fillStyle = `rgba(238,240,248,${a})`
        ctx.fillRect(st.x, st.y, st.r, st.r)
      }
      gl.viewport(0, 0, cc.width, cc.height)
      gl.clearColor(0, 0, 0, 0)
      gl.clear(gl.COLOR_BUFFER_BIT)
      gl.uniform2f(uRes, cc.width, cc.height)
      gl.uniform1f(uTime, tt)
      gl.drawArrays(gl.TRIANGLES, 0, 3)
      raf = requestAnimationFrame(render)
    }

    resize()
    window.addEventListener('resize', resize)
    if (reduce) render(t0)
    else raf = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <div className="ambient-bg" aria-hidden="true">
      <canvas ref={starRef} />
      <canvas ref={cloudRef} />
      <div className="ambient-grain" />
    </div>
  )
}
