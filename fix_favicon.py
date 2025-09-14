#!/usr/bin/env python3
from PIL import Image

# Open the original favicon
img = Image.open('public/favicon.png')
img = img.convert("RGBA")

# Get pixel data
pixels = img.load()

# Make white pixels transparent
width, height = img.size
for x in range(width):
    for y in range(height):
        r, g, b, a = pixels[x, y]
        # If pixel is white or near-white, make it transparent
        if r > 250 and g > 250 and b > 250:
            pixels[x, y] = (255, 255, 255, 0)

new_img = img

# Save the main favicon with transparency
new_img.save('public/favicon.png', 'PNG')

# Create different sizes as separate files
sizes = {
    'favicon-32x32.png': 32,
    'favicon-16x16.png': 16,
    'apple-touch-icon.png': 180
}

for filename, size in sizes.items():
    resized = new_img.resize((size, size), Image.Resampling.LANCZOS)
    resized.save(f'public/{filename}', 'PNG')
    print(f"Created {filename} ({size}x{size})")

print("Successfully created transparent favicons!")