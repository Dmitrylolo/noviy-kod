/**
 * Prepares Season 2 hero portraits: crops every source photo to the same 3:4 frame
 * and the same visual scale (head ≈ 52–57% of frame height, head top near the upper edge),
 * then writes optimized WebP files to public/heroes/.
 *
 * Usage: npm run prepare:hero-photos
 *
 * Originals live in src/assets/images/heroes/ (1536×1024). Crop boxes are in source pixels,
 * measured per photo. The crop is never stretched: width/height keep the exact 3:4 ratio.
 * `sharp` is available through Next.js.
 */
import { existsSync, mkdirSync } from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'

const SOURCE_DIR = path.join(process.cwd(), 'src/assets/images/heroes')
const OUTPUT_DIR = path.join(process.cwd(), 'public/heroes')
const OUTPUT_WIDTH = 720
const OUTPUT_HEIGHT = 960 // 3:4, same as the hero cards

interface CropJob {
  source: string
  output: string
  // Crop box in source pixels; height is derived from width to keep exactly 3:4.
  left: number
  top: number
  width: number
}

const jobs: CropJob[] = [
  { source: "Олена Герасим'юк.png", output: 'herasymyuk.webp', left: 453, top: 15, width: 675 },
  // Taras Kozub: box shifted left so the hurdy-gurdy stays as visible as possible next to the face.
  { source: 'Тарас Козуб.png', output: 'kozub.webp', left: 330, top: 16, width: 638 },
  { source: 'Міша Правильний.png', output: 'pravylnyi.webp', left: 389, top: 0, width: 722 },
  // Zhadan is already the closest shot: full-height crop, no further zoom possible.
  { source: 'Сергій Жадан.png', output: 'zhadan.webp', left: 400, top: 0, width: 768 },
]

async function run() {
  mkdirSync(OUTPUT_DIR, { recursive: true })

  for (const job of jobs) {
    const sourcePath = path.join(SOURCE_DIR, job.source)
    if (!existsSync(sourcePath)) {
      throw new Error(`Missing source photo: ${sourcePath}`)
    }

    const height = Math.round((job.width * 4) / 3)
    const meta = await sharp(sourcePath).metadata()
    if (job.left + job.width > (meta.width ?? 0) || job.top + height > (meta.height ?? 0)) {
      throw new Error(`Crop box for ${job.source} is outside the image (${meta.width}×${meta.height})`)
    }

    const info = await sharp(sourcePath)
      .extract({ left: job.left, top: job.top, width: job.width, height })
      .resize(OUTPUT_WIDTH, OUTPUT_HEIGHT, { kernel: 'lanczos3' })
      .webp({ quality: 82 })
      .toFile(path.join(OUTPUT_DIR, job.output))

    console.log(`${job.output}: ${info.width}×${info.height}, ${Math.round(info.size / 1024)} KB`)
  }
}

run().catch((error) => {
  console.error(error)
  process.exit(1)
})
