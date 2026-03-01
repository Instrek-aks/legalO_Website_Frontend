const fs = require('fs');
const pdf = require('pdf-parse');

async function extractPDF() {
    try {
        const dataBuffer = fs.readFileSync('./Hospital Insolvency under IBC_Submission (1).pdf');
        const data = await pdf(dataBuffer);
        console.log(data.text);
    } catch (err) {
        console.error('Error parsing PDF:', err);
    }
}

extractPDF();
