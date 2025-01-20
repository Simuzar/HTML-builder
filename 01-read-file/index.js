const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'text.txt');
const readStream = fs.createReadStream(filePath, 'utf-8');
readStream.on("error", (err) => {
    console.error("Ошибка при чтении файла:", err);
});

readStream.pipe(process.stdout) 