const fs = require('fs');

// Read the Blog.jsx file
let blogContent = fs.readFileSync('../src/pages/Blog.jsx', 'utf-8');

// Replace multiple consecutive blank lines (with just \r\n) with a single blank line
// This handles Windows line endings (\r\n)
let cleaned = blogContent.replace(/(\r\n){3,}/g, '\r\n\r\n');

// Also handle Unix line endings (\n) just in case
cleaned = cleaned.replace(/(\n){3,}/g, '\n\n');

// Count how many replacements were made
const originalLength = blogContent.length;
const cleanedLength = cleaned.length;
const spacesRemoved = originalLength - cleanedLength;

// Write back
fs.writeFileSync('../src/pages/Blog.jsx', cleaned, 'utf-8');
console.log(`Removed ${spacesRemoved} extra characters`);
console.log(`File size reduced from ${originalLength} to ${cleanedLength} bytes`);
