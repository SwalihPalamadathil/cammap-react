const fs = require('fs');
const zlib = require('zlib');
const path = require('path');

function optimizePngZlib(srcPath, destPath) {
    const data = fs.readFileSync(srcPath);
    let offset = 8;
    const chunks = [];
    let ihdr = null;
    let idatBuffers = [];

    while (offset < data.length) {
        const length = data.readUInt32BE(offset);
        const type = data.toString('ascii', offset + 4, offset + 8);
        const chunkData = data.slice(offset + 8, offset + 8 + length);
        const crc = data.readUInt32BE(offset + 8 + length);

        if (type === 'IHDR') {
            ihdr = { length, type, chunkData, crc };
            chunks.push(ihdr);
        } else if (type === 'IDAT') {
            idatBuffers.push(chunkData);
        } else if (type === 'IEND') {
            // Recompress all IDAT chunks
            const rawIdat = Buffer.concat(idatBuffers);
            try {
                const uncompressed = zlib.inflateSync(rawIdat);
                const recompressed = zlib.deflateSync(uncompressed, { level: 9, memLevel: 9, strategy: zlib.constants.Z_FILTERED });
                
                // create new IDAT chunk
                const typeBuf = Buffer.from('IDAT', 'ascii');
                const crcPayload = Buffer.concat([typeBuf, recompressed]);
                // calculate CRC32
                const newCrc = require('zlib').crc32(crcPayload);
                chunks.push({
                    length: recompressed.length,
                    type: 'IDAT',
                    chunkData: recompressed,
                    crc: newCrc
                });
            } catch (err) {
                console.log('Decompression failed, keeping original IDAT:', err);
                idatBuffers.forEach(c => chunks.push({ length: c.length, type: 'IDAT', chunkData: c }));
            }
            chunks.push({ length, type, chunkData, crc });
        } else {
            // Keep auxiliary chunks if needed, or strip non-critical metadata
            if (!['tEXt', 'zTXt', 'iTXt', 'pHYs', 'tIME'].includes(type)) {
                chunks.push({ length, type, chunkData, crc });
            }
        }

        offset += 12 + length;
    }

    // Write optimized PNG
    const outHeader = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
    const outParts = [outHeader];

    for (const c of chunks) {
        const lenBuf = Buffer.alloc(4);
        lenBuf.writeUInt32BE(c.chunkData.length, 0);
        const typeBuf = Buffer.from(c.type, 'ascii');
        const crcPayload = Buffer.concat([typeBuf, c.chunkData]);
        const crcVal = zlib.crc32 ? zlib.crc32(crcPayload) : c.crc;
        const crcBuf = Buffer.alloc(4);
        crcBuf.writeUInt32BE(crcVal >>> 0, 0);

        outParts.push(lenBuf, typeBuf, c.chunkData, crcBuf);
    }

    const finalBuffer = Buffer.concat(outParts);
    console.log(`Original: ${srcPath} (${data.length} bytes) -> Optimized: ${finalBuffer.length} bytes (${((data.length - finalBuffer.length)/data.length * 100).toFixed(1)}% reduction)`);
    if (finalBuffer.length < data.length) {
        fs.writeFileSync(destPath, finalBuffer);
    }
}

optimizePngZlib(path.join(__dirname, '../src/assets/logo1.png'), path.join(__dirname, '../src/assets/logo1.png'));
optimizePngZlib(path.join(__dirname, '../public/map/logo1.png'), path.join(__dirname, '../public/map/logo1.png'));
optimizePngZlib(path.join(__dirname, '../public/emea.png'), path.join(__dirname, '../public/emea.png'));
