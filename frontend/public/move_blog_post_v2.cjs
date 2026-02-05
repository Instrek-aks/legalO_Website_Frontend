const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/pages/Blog.jsx');
let content = fs.readFileSync(filePath, 'utf-8');
const lines = content.split('\n');

// Find the line with "id: 21,"
let idLineIndex = -1;
for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('id: 21,')) {
        idLineIndex = i;
        break;
    }
}

if (idLineIndex === -1) {
    console.error("Could not find 'id: 21,'");
    process.exit(1);
}

// Find start (opening brace before id)
let startLineIndex = -1;
for (let i = idLineIndex; i >= 0; i--) {
    if (lines[i].trim() === '{') {
        startLineIndex = i;
        break;
    }
}

// Find end (closing brace after id)
// content of ID 21 uses backticks, so we need to be careful.
// We look for '},' that closes the object.
let endLineIndex = -1;

// We assume the closing brace is on a line by itself (with comma) like "  },"
for (let i = idLineIndex; i < lines.length; i++) {
    if (lines[i].trim() === '},') {
        endLineIndex = i;
        // We might match a closing brace of an inner object?
        // But blog object structure is flat list of objects.
        // Let's verify indentation.
        // Usually top level objects in array have indentation of 2 spaces.
        if (lines[i].startsWith('  },')) {
            break; // Strong candidate
        }
    }
}

console.log(`Identified block: Lines ${startLineIndex + 1} to ${endLineIndex + 1}`);

if (startLineIndex !== -1 && endLineIndex !== -1) {
    const blockLines = lines.splice(startLineIndex, endLineIndex - startLineIndex + 1);

    // Find insertion point
    let insertIndex = -1;
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes('const blogPosts = [')) {
            insertIndex = i + 1;
            break;
        }
    }

    if (insertIndex !== -1) {
        lines.splice(insertIndex, 0, ...blockLines);
        fs.writeFileSync(filePath, lines.join('\n'), 'utf-8');
        console.log("Moved ID 21 to top.");
    } else {
        console.error("Could not find blogPosts array start.");
    }

} else {
    console.error("Could not delimit block.");
}
