const fs = require('fs');

// Read the Blog.jsx file
let blogContent = fs.readFileSync('../src/pages/Blog.jsx', 'utf-8');

// Define specific replacements for each blog post
const replacements = [
    // Blog ID 16 - Rule by Law or Rule by Delegation
    { find: 'The Shield: Omnia Praesumuntur Rite Esse Acta', replace: '**The Shield: Omnia Praesumuntur Rite Esse Acta**' },
    { find: 'The Vice: Arbitrary Sub-Delegation Through Office Memorandums', replace: '**The Vice: Arbitrary Sub-Delegation Through Office Memorandums**' },
    { find: 'Comparative Perspective: Delegated Legislation and Administrative Accountability in India and the United States.', replace: '**Comparative Perspective: Delegated Legislation and Administrative Accountability in India and the United States**' },
    { find: 'The Systemic Cost: When Certainty Dies', replace: '**The Systemic Cost: When Certainty Dies**' },
    { find: 'Conclusion\\n\\nThe creeping normalization', replace: '**Conclusion**\\n\\nThe creeping normalization' },

    // Blog ID 18 - Control Paradox
    { find: 'ABSTRACT\\n\\nThe architecture of corporate consolidation', replace: '**ABSTRACT**\\n\\nThe architecture of corporate consolidation' },
    { find: 'I. INTRODUCTION\\n\\nThe architecture of corporate consolidation is being', replace: '**I. INTRODUCTION**\\n\\nThe architecture of corporate consolidation is being' },
    { find: 'II. THE EVOLVING LANDSCAPE: FROM TRADITIONAL M&A TO INNOVATIVE STRUCTURING', replace: '**II. THE EVOLVING LANDSCAPE: FROM TRADITIONAL M&A TO INNOVATIVE STRUCTURING**' },
    { find: 'III. THE REGULATORY GAP: AN INCOMPLETE FRAMEWORK FOR MODERN M&A', replace: '**III. THE REGULATORY GAP: AN INCOMPLETE FRAMEWORK FOR MODERN M&A**' },
    { find: 'IV. REIMAGINING CONTROL: A FUNCTIONAL FRAMEWORK FOR MODERN MERGER REVIEW', replace: '**IV. REIMAGINING CONTROL: A FUNCTIONAL FRAMEWORK FOR MODERN MERGER REVIEW**' },
    { find: 'V. CASE STUDY: SCRUTINIZING THE MICROSOFT-OPENAI PARTNERSHIP THROUGH THE FUNCTIONAL CONTROL LENS', replace: '**V. CASE STUDY: SCRUTINIZING THE MICROSOFT-OPENAI PARTNERSHIP THROUGH THE FUNCTIONAL CONTROL LENS**' },
    { find: 'VI. IMPLEMENTING THE FUNCTIONAL CONTROL FRAMEWORK', replace: '**VI. IMPLEMENTING THE FUNCTIONAL CONTROL FRAMEWORK**' },
    { find: 'VII. CONCLUSION: THE NEW FRONTIER OF MERGER CONTROL', replace: '**VII. CONCLUSION: THE NEW FRONTIER OF MERGER CONTROL**' },

    // Blog ID 19 - AI and IP
    { find: 'ABSTRACT\\n\\nThis note explores', replace: '**ABSTRACT**\\n\\nThis note explores' },
    { find: 'KEYWORDS: AI liability', replace: '**KEYWORDS:** AI liability' },
    { find: '1. INTRODUCTION\\n\\nFrom the moment we wake', replace: '**1. INTRODUCTION**\\n\\nFrom the moment we wake' },
    { find: '2. UNDERSTANDING ARTIFICIAL INTELLIGENCE AND ITS CAPABILITIES', replace: '**2. UNDERSTANDING ARTIFICIAL INTELLIGENCE AND ITS CAPABILITIES**' },
    { find: '3. AI, IP INFRINGEMENT, AND LEGAL RESPONSIBILITY', replace: '**3. AI, IP INFRINGEMENT, AND LEGAL RESPONSIBILITY**' },
    { find: '4. CURRENT LEGAL FRAMEWORK', replace: '**4. CURRENT LEGAL FRAMEWORK**' },
    { find: '4.1. Indian Legal Framework', replace: '**4.1. Indian Legal Framework**' },
    { find: '4.2. International Legal Framework', replace: '**4.2. International Legal Framework**' },
    { find: '4.2.1. European Union', replace: '**4.2.1. European Union**' },
    { find: '4.2.2. United States', replace: '**4.2.2. United States**' },
    { find: '5. THE WAY FORWARD', replace: '**5. THE WAY FORWARD**' },
    { find: '5.1. Shared Liability Between Creator and User', replace: '**5.1. Shared Liability Between Creator and User**' },
    { find: '5.2. Mandatory Transparency in AI Training', replace: '**5.2. Mandatory Transparency in AI Training**' },
    { find: '5.3. Clear Legal Standards to Check Substantial Similarity', replace: '**5.3. Clear Legal Standards to Check Substantial Similarity**' },
    { find: '6. CONCLUSION\\n\\nAI is changing', replace: '**6. CONCLUSION**\\n\\nAI is changing' },

    // Blog ID 12 - Kesavananda Bharati
    { find: 'Part I: Kesavananda Bharati v. State of Kerala (1973) 4 SCC 225\\n\\nIntroduction', replace: '**Part I: Kesavananda Bharati v. State of Kerala (1973) 4 SCC 225**\\n\\n**Introduction**' },
    { find: 'I. Context and Background', replace: '**I. Context and Background**' },
    { find: 'II. The Core Constitutional Questions', replace: '**II. The Core Constitutional Questions**' },
    { find: "III. The Majority's Framework", replace: "**III. The Majority's Framework**" },
    { find: 'IV. Dissenting and Divergent Views', replace: '**IV. Dissenting and Divergent Views**' },
    { find: 'V. Doctrinal Innovation: The Basic Structure Doctrine', replace: '**V. Doctrinal Innovation: The Basic Structure Doctrine**' },
    { find: 'VI. Application to the Amendments in Question', replace: '**VI. Application to the Amendments in Question**' },
    { find: 'VII. Critical Appraisal', replace: '**VII. Critical Appraisal**' },
    { find: 'VIII. Institutional and Comparative Significance', replace: '**VIII. Institutional and Comparative Significance**' },
    { find: 'IX. Long-Term Impact on Governance', replace: '**IX. Long-Term Impact on Governance**' },
    { find: 'Conclusion\\n\\nKesavananda Bharati is not merely', replace: '**Conclusion**\\n\\nKesavananda Bharati is not merely' },
];

// Apply all replacements
let count = 0;
for (const replacement of replacements) {
    const before = blogContent;
    blogContent = blogContent.replace(replacement.find, replacement.replace);
    if (before !== blogContent) {
        count++;
    }
}

// Write back
fs.writeFileSync('../src/pages/Blog.jsx', blogContent, 'utf-8');
console.log(`Applied ${count} heading formatting replacements`);
