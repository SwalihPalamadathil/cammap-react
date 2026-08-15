const fs = require('fs');
const path = require('path');

const publicFiles = fs.readdirSync(path.join(__dirname, '../public'));
console.log("=== PUBLIC FILES SIZES ===");
publicFiles.forEach(f => {
    const stat = fs.statSync(path.join(__dirname, '../public', f));
    if (stat.isFile()) {
        console.log(`${f.padEnd(20)}: ${(stat.size / 1024).toFixed(2)} KB (${stat.size} bytes)`);
    }
});

const mapFiles = fs.readdirSync(path.join(__dirname, '../public/map'));
console.log("\n=== PUBLIC/MAP FILES SIZES ===");
mapFiles.forEach(f => {
    const stat = fs.statSync(path.join(__dirname, '../public/map', f));
    if (stat.isFile()) {
        console.log(`${f.padEnd(20)}: ${(stat.size / 1024).toFixed(2)} KB (${stat.size} bytes)`);
    }
});
