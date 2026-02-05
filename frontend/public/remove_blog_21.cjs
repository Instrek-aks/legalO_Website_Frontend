const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/pages/Blog.jsx');
let content = fs.readFileSync(filePath, 'utf-8');
const lines = content.split('\n');

// We expect the duplicate blog post (index 20 in 0-indexed array, so 21st item)
// to start around line 188.
// Line 188 in file (1-based) is index 187 in array.
const startLineIndex = 187;
const endLineIndex = 218; // Line 219 in file (1-based) is index 218.

// Verification
const startLine = lines[startLineIndex];
const idLine = lines[startLineIndex + 1];
const endLine = lines[endLineIndex];

console.log(`Line ${startLineIndex + 1}: ${startLine}`);
console.log(`Line ${startLineIndex + 2}: ${idLine}`);
console.log(`Line ${endLineIndex + 1}: ${endLine}`);

if (startLine.trim() === '{' &&
    idLine.trim() === 'id: 20,' &&
    endLine.trim() === '},') {

    console.log("Verified duplicate block. Removing...");

    // Remove lines from startLineIndex to endLineIndex inclusive
    lines.splice(startLineIndex, endLineIndex - startLineIndex + 1);

    const newContent = lines.join('\n');
    fs.writeFileSync(filePath, newContent, 'utf-8');
    console.log("Successfully removed blog item at position 21.");
} else {
    console.error("Could not verify block at expected position. Aborting.");
    process.exit(1);
}
