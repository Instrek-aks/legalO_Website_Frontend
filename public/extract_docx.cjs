const mammoth = require('mammoth');
const fs = require('fs');

async function extractDocx() {
    try {
        const result = await mammoth.extractRawText({
            path: './Guilty by Condition _ Divyansh Vyas (1).docx'
        });

        // Save to JSON file
        fs.writeFileSync('guilty_content.json', JSON.stringify({
            content: result.value
        }, null, 2), 'utf-8');

        console.log('Content extracted successfully!');
    } catch (err) {
        console.error('Error:', err);
    }
}

extractDocx();
