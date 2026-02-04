const fs = require('fs');
const pdfLib = require('pdf-parse');

console.log('Type of pdfLib:', typeof pdfLib);
console.log('Keys:', Object.keys(pdfLib));

try {
    const dataBuffer = fs.readFileSync('Hospital Insolvency under IBC_Submission (1).pdf');
    // Try to call it if it's a function, otherwise look for default
    const parser = typeof pdfLib === 'function' ? pdfLib : pdfLib.default;

    if (typeof parser === 'function') {
        parser(dataBuffer).then(function (data) {
            console.log(data.text);
        });
    } else {
        console.error('Could not find parser function');
    }
} catch (e) {
    console.error(e);
}
