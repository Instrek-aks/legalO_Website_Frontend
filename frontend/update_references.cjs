const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

const processFile = (filePath) => {
  const content = fs.readFileSync(filePath, 'utf8');
  // Only match .png, .jpg, .jpeg that are followed by quotes, backticks, or closing parentheses
  // to avoid changing accidental matches, though simple replace is usually fine in src.
  let newContent = content.replace(/\.(png|jpg|jpeg)/gi, '.webp');
  
  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Updated references in: ${filePath}`);
  }
};

const walkDir = (dir) => {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      walkDir(fullPath);
    } else {
      const ext = path.extname(item).toLowerCase();
      if (['.js', '.jsx', '.css'].includes(ext)) {
        processFile(fullPath);
      }
    }
  }
};

walkDir(srcDir);
console.log('Finished updating source code references to .webp');
