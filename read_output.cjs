const fs = require('fs');
try {
    const content = fs.readFileSync('text_output.txt', 'utf16le');
    console.log(content);
} catch (e) {
    console.error(e);
}
