import { fileURLToPath } from 'node:url'
import path from 'node:path'
import { promises as fs } from 'node:fs'
import sharp from 'sharp'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.resolve(__dirname, '..')

const OUTPUT_DIR = path.join(rootDir, 'public', 'images')

const IMAGE_CONFIG = [
  { source: 'src/assets/Sydney.png', name: 'home-leadership', widths: [600, 1200], quality: 70 },
  { source: 'src/assets/Brisbane.png', name: 'home-project', widths: [600, 1200], quality: 70 },
  { source: 'src/assets/Brisbane-1360154521.jpg', name: 'about-hero', widths: [960, 1600, 2000], quality: 70 },
  { source: 'src/assets/Sydney-1074255534.jpg', name: 'about-mission', widths: [960, 1600, 2000], quality: 70 },
  { source: 'src/assets/Simon_wtbg.png', name: 'team-simon', widths: [480, 960], quality: 80 },
  { source: 'src/assets/Brad_wtbg.png', name: 'team-brad', widths: [480, 960], quality: 80 },
  { source: 'src/assets/Melbourne-534059684.jpg', name: 'services-leadership', widths: [960, 1600, 2000], quality: 70 },
  { source: 'src/assets/TelcoTower-2215978485.jpg', name: 'services-program', widths: [960, 1600, 2000], quality: 70 },
  { source: 'src/assets/Sydney-516782031.jpg', name: 'services-operations', widths: [960, 1600, 2000], quality: 70 },
]

async function ensureDir(dirPath) {
  await fs.mkdir(dirPath, { recursive: true })
}

async function optimizeImage({ source, name, widths, quality }) {
  const inputPath = path.join(rootDir, source)
  try {
    await fs.access(inputPath)
  } catch (error) {
    throw new Error(`Source image not found: ${source}`)
  }

  const results = []

  for (const width of widths) {
    const outputName = `${name}-${width}.webp`
    const outputPath = path.join(OUTPUT_DIR, outputName)
    await ensureDir(path.dirname(outputPath))

    let shouldProcess = true
    try {
      const [inputStats, outputStats] = await Promise.all([
        fs.stat(inputPath),
        fs.stat(outputPath),
      ])
      if (outputStats.mtimeMs >= inputStats.mtimeMs) {
        shouldProcess = false
      }
    } catch {
      // Missing output file – process it
    }

    if (!shouldProcess) {
      results.push({ outputName, skipped: true })
      continue
    }

    const pipeline = sharp(inputPath)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality, effort: 6 })

    await pipeline.toFile(outputPath)
    results.push({ outputName, skipped: false })
  }

  return results
}

async function run() {
  await ensureDir(OUTPUT_DIR)
  let totalOptimized = 0
  let totalSkipped = 0

  for (const config of IMAGE_CONFIG) {
    const outputs = await optimizeImage(config)
    for (const { outputName, skipped } of outputs) {
      if (skipped) {
        totalSkipped += 1
        console.log(`Skipping ${outputName} (up to date)`) // eslint-disable-line no-console
      } else {
        totalOptimized += 1
        console.log(`Optimized ${outputName}`) // eslint-disable-line no-console
      }
    }
  }

  console.log(`\nImage optimization complete. Generated ${totalOptimized} file(s); skipped ${totalSkipped} up-to-date file(s).`) // eslint-disable-line no-console
}

run().catch((error) => {
  console.error(error) // eslint-disable-line no-console
  process.exitCode = 1
})
