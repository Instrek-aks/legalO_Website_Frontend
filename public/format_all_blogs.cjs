const fs = require('fs');

// Read the Blog.jsx file
let blogContent = fs.readFileSync('../src/pages/Blog.jsx', 'utf-8');

// Function to add bold markers to headings in a blog post content
function formatBlogContent(content) {
    let formatted = content;

    // Pattern 1: Section headings with Roman numerals (I., II., III., etc.)
    formatted = formatted.replace(/^([IVX]+\.\s+[A-Z][^\n]+)$/gm, '**$1**');

    // Pattern 2: Subsection headings with letters (A., B., C., etc.)
    formatted = formatted.replace(/^([A-Z]\.\s+[A-Z][^\n]+)$/gm, '**$1**');

    // Pattern 3: Numbered sections (1., 2., 3., etc.)
    formatted = formatted.replace(/^(\d+\.\s+[A-Z][^\n]+)$/gm, '**$1**');

    // Pattern 4: Numbered subsections (1.1, 1.2, 2.1, etc.)
    formatted = formatted.replace(/^(\d+\.\d+\.?\s+[A-Z][^\n]+)$/gm, '**$1**');

    // Pattern 5: ALL CAPS headings (ABSTRACT, INTRODUCTION, CONCLUSION, etc.)
    formatted = formatted.replace(/^([A-Z][A-Z\s]{3,})$/gm, '**$1**');

    // Pattern 6: Headings ending with colon
    formatted = formatted.replace(/^([A-Z][^:\n]+:)\s*$/gm, '**$1**');

    // Pattern 7: Part headings (Part I:, Part II:, etc.)
    formatted = formatted.replace(/^(Part [IVX]+:.*?)$/gm, '**$1**');

    return formatted;
}

// Find all blog post content blocks and format them
// Match pattern: content: `...content...`,
const contentRegex = /content:\s*`([^`]+)`,/g;
let match;
let replacements = [];

while ((match = contentRegex.exec(blogContent)) !== null) {
    const originalContent = match[1];
    const formattedContent = formatBlogContent(originalContent);

    if (originalContent !== formattedContent) {
        replacements.push({
            original: match[0],
            formatted: `content: \`${formattedContent}\`,`
        });
    }
}

// Apply all replacements
for (const replacement of replacements) {
    blogContent = blogContent.replace(replacement.original, replacement.formatted);
}

// Write back
fs.writeFileSync('../src/pages/Blog.jsx', blogContent, 'utf-8');
console.log(`Updated ${replacements.length} blog posts with bold headings`);
