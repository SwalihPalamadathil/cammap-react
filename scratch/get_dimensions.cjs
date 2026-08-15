const fs = require('fs');
const path = require('path');

function getPngDimensions(filePath) {
    const buffer = fs.readFileSync(filePath);
    if (buffer.toString('ascii', 1, 4) === 'PNG') {
        const width = buffer.readUInt32BE(16);
        const height = buffer.readUInt32BE(20);
        return { width, height };
    }
    return null;
}

const logoPath = path.join(__dirname, '../src/assets/logo1.png');
const emeaPath = path.join(__dirname, '../public/emea.png');

console.log("logo1.png dimensions:", getPngDimensions(logoPath));
console.log("emea.png dimensions:", getPngDimensions(emeaPath));
