import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const dir = 'public/images';

const files = fs.readdirSync(dir).filter(file =>
  /\.(png|jpg|jpeg)$/i.test(file)
);

for (const file of files) {
  const input = path.join(dir, file);
  const output = path.join(
    dir,
    file.replace(/\.(png|jpg|jpeg)$/i, '.webp')
  );

  await sharp(input)
    .resize({
      width: 1600,
      withoutEnlargement: true
    })
    .webp({ quality: 82 })
    .toFile(output);

  console.log(`${file} -> ${path.basename(output)}`);
}
