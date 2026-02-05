const fs = require('fs');

// Read the guilty content
const guiltyData = JSON.parse(fs.readFileSync('./guilty_content.json', 'utf-8'));
let content = guiltyData.content;

// Remove the title and author from the beginning
content = content.replace(/^Guilty by Condition\?.*?\n\n~Divyansh Milind Vyas\n\n\n\n/, '');

// Add ** around main section headings (Roman numerals)
content = content.replace(/^(I\. Introduction:.*?)$/gm, '**$1**');
content = content.replace(/^(II\. Doctrinal Framework:.*?)$/gm, '**$1**');
content = content.replace(/^(III\. Judicial Construction.*?)$/gm, '**$1**');
content = content.replace(/^(IV\. Process, Proof.*?)$/gm, '**$1**');
content = content.replace(/^(V\. Reality of Mental Illness.*?)$/gm, '**$1**');
content = content.replace(/^(VI\. Comparative Glimpses.*?)$/gm, '**$1**');
content = content.replace(/^(VII\. Reimagining.*?)$/gm, '**$1**');
content = content.replace(/^(VIII\. Conclusion)$/gm, '**$1**');

// Add ** around subsection headings (A., B., C., etc.)
content = content.replace(/^([A-Z]\. .*?)$/gm, '**$1**');

// Save formatted content
fs.writeFileSync('guilty_formatted.txt', content, 'utf-8');
console.log('Formatted content saved!');
