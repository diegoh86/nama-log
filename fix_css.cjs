const fs = require('fs');
let css = fs.readFileSync('assets/css/styles.css', 'utf8');
css = css.replace(/^\uFEFF/g, ''); // strip BOM if at start
css = css.replace(/\uFEFF/g, ''); // strip BOM anywhere

const importLine = "@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap');";

// Remove the old import line (which might have hidden chars around it)
const lines = css.split('\n');
const newLines = lines.filter(line => !line.includes('fonts.googleapis.com'));

// Remove old tailwind directives
const filtered = newLines.filter(line => !line.startsWith('@tailwind'));

// Construct final css
let finalCss = importLine + '\n\n';
finalCss += '@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n';
finalCss += filtered.join('\n');

fs.writeFileSync('assets/css/styles.css', finalCss, 'utf8');
