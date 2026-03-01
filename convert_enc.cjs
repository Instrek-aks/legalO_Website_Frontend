const fs = require('fs');
const content = fs.readFileSync('text_output.txt', 'utf16le');
fs.writeFileSync('text_utf8.txt', content, 'utf8');
