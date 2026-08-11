const fs = require('fs');
const pdfModule = require('pdf-parse');
const pdf = pdfModule.default || pdfModule;

const dataBuffer = fs.readFileSync('./public/SaiSreeharshaResume.pdf');

pdf(dataBuffer).then(function(data) {
    console.log(data.text);
}).catch(err => {
    console.error('Error parsing PDF:', err);
    process.exit(1);
});
