const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const directories = [
  path.join(__dirname, 'public'),
  path.join(__dirname, 'src', 'assets')
];

const processDirectory = async (dirPath) => {
  if (!fs.existsSync(dirPath)) return;

  const items = fs.readdirSync(dirPath);
  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      await processDirectory(fullPath);
    } else {
      const ext = path.extname(item).toLowerCase();
      if (['.jpg', '.jpeg', '.png'].includes(ext)) {
        // Skip files that end in .jpg.jpeg if they've been doubly renamed, or handle them normally
        let cleanBase = item.replace(/\.(jpg|jpeg|png)$/i, '');
        // if it still ends in .jpg or .png strip that too just in case (like hero.jpg.jpeg)
        cleanBase = cleanBase.replace(/\.(jpg|jpeg|png)$/i, '');

        const newPath = path.join(dirPath, `${cleanBase}.webp`);

        try {
          await sharp(fullPath)
            .webp({ quality: 80 })
            .toFile(newPath);
          console.log(`Converted: ${item} -> ${cleanBase}.webp`);
          
          // Delete original
          fs.unlinkSync(fullPath);
          console.log(`Deleted: ${item}`);
        } catch (error) {
          console.error(`Error converting ${item}:`, error);
        }
      }
    }
  }
};

(async () => {
  for (const dir of directories) {
    console.log(`Processing directory: ${dir}`);
    await processDirectory(dir);
  }
  console.log('Conversion complete.');
})();
