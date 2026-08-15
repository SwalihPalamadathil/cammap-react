const fs = require('fs');
const path = require('path');

const unusedFiles = [
    '20944330.jpg',
    '361.jpg',
    '42340.jpg',
    'banner.jpg',
    'em.png',
    'favicon.svg',
    'icons.svg'
];

unusedFiles.forEach(f => {
    const p = path.join(__dirname, '../public', f);
    if (fs.existsSync(p)) {
        fs.unlinkSync(p);
        console.log(`Deleted unused asset: ${f}`);
    }
});
