const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');
const regex = /<img[^>]+src=["'](.*?)["']/g;
let match;
while ((match = regex.exec(html)) !== null) {
  console.log(match[1]);
}
