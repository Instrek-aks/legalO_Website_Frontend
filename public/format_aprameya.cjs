const fs = require('fs');

// Read the aprameya content
const aprameyaData = JSON.parse(fs.readFileSync('./aprameya_content.json', 'utf-8'));
let content = aprameyaData.content;

// Remove the title and author from the beginning
content = content.replace(/^Enforceability Dichotomy:.*?\n.*?\n.*?- Aprameya Mukund Setlur\s*\n\s*\n/, '');

// Add ** around main section headings
content = content.replace(/^(Legislative Silence and the Duplicative Justice Trap:)\s*$/gm, '**$1**');
content = content.replace(/^(The Incomplete Bridge\s+and the Path to Parity)\s*$/gm, '**$1**');

// Clean up extra whitespace and normalize line breaks
content = content.trim();

// Save formatted content
fs.writeFileSync('aprameya_formatted.txt', content, 'utf-8');
console.log('Formatted content saved!');
