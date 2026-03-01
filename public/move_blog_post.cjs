const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/pages/Blog.jsx');
let content = fs.readFileSync(filePath, 'utf-8');
const lines = content.split('\n');

// Find the lines for the blog post with ID 21
let startLineIndex = -1;
let endLineIndex = -1;
let openBraces = 0;
let insideBlock = false;
let currentBlockStart = -1;

// Helper to find the matching closing brace for a block
for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line === '{' || line.endsWith('{')) {
        if (!insideBlock) { // Potential start of a blog post object
            currentBlockStart = i;
            insideBlock = true;
            openBraces = 1;
        } else {
            openBraces++;
        }
    } else if (line === '},' || line === '}') {
        if (insideBlock) {
            openBraces--;
            if (openBraces === 0) {
                // Check if this block was ID 21
                const blockContent = lines.slice(currentBlockStart, i + 1).join('\n');
                if (blockContent.includes('id: 21,') || blockContent.includes('id: 21')) { // Flexible check
                    startLineIndex = currentBlockStart;
                    endLineIndex = i;
                    console.log(`Found ID 21 at lines ${startLineIndex + 1} to ${endLineIndex + 1}`);
                    break;
                }
                insideBlock = false;
            }
        }
    } else if (insideBlock) {
        // Just continue
    }
}

if (startLineIndex !== -1 && endLineIndex !== -1) {
    // Extract block
    const blockLines = lines.splice(startLineIndex, endLineIndex - startLineIndex + 1);

    // Find where to insert (after `const blogPosts = [`)
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
        console.log("Successfully moved ID 21 to the first position.");
    } else {
        console.error("Could not find 'const blogPosts = ['");
    }
} else {
    console.error("Could not find blog post with ID 21.");
    // Fallback: search for author if ID 21 not found (e.g. if I am mistaken about ID)
    // But I am fairly confident from previous view.
}
