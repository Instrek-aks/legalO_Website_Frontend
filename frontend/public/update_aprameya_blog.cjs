const fs = require('fs');

// Read the formatted content
const formattedContent = fs.readFileSync('./aprameya_formatted.txt', 'utf-8');

// Read the Blog.jsx file
const blogFile = fs.readFileSync('../src/pages/Blog.jsx', 'utf-8');

// Find the blog post for id 22 (Aprameya Setlur)
const id22Start = blogFile.indexOf('id: 22,');
if (id22Start === -1) {
    console.log('Could not find blog post with id 22');
    process.exit(1);
}

// Find the start of the content field
const contentStart = blogFile.indexOf('content: `', id22Start);
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
