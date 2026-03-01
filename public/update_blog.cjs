const fs = require('fs');

// Read the formatted content
const formattedContent = fs.readFileSync('./guilty_formatted.txt', 'utf-8');

// Read the Blog.jsx file
const blogFile = fs.readFileSync('../src/pages/Blog.jsx', 'utf-8');

// Find the blog post for id 21 (Divyansh Milind Vyas)
// We need to replace the content between the backticks for id: 21

// Escape special regex characters in the content for replacement
const escapedContent = formattedContent
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\$/g, '\\$');

// Create a regex to find and replace the content for id 21
// This is complex, so let's use a simpler approach - find the position and replace

const id21Start = blogFile.indexOf('id: 21,');
if (id21Start === -1) {
    console.log('Could not find blog post with id 21');
    process.exit(1);
}

// Find the start of the content field
const contentStart = blogFile.indexOf('content: `', id21Start);
if (contentStart === -1) {
    console.log('Could not find content field');
    process.exit(1);
}

// Find the end of the content (next backtick followed by comma)
const contentEnd = blogFile.indexOf('`,', contentStart + 10);
if (contentEnd === -1) {
    console.log('Could not find end of content');
    process.exit(1);
}

// Replace the content
const before = blogFile.substring(0, contentStart + 10); // Include 'content: `'
const after = blogFile.substring(contentEnd);
const newBlogFile = before + formattedContent + after;

// Write back
fs.writeFileSync('../src/pages/Blog.jsx', newBlogFile, 'utf-8');
console.log('Blog updated successfully!');
console.log(`Content length: ${formattedContent.length} characters`);
