
const fs = require('fs');


fs.writeFileSync('sample.txt', 'Hello from Node.js FS Module!');
console.log('File created and data written.');


const data = fs.readFileSync('sample.txt', 'utf8');
console.log('\nFile Content:');
console.log(data);


fs.appendFileSync('sample.txt', '\nThis line was appended.');
console.log('\nData appended successfully.');


const updatedData = fs.readFileSync('sample.txt', 'utf8');
console.log('\nUpdated File Content:');
console.log(updatedData);


fs.renameSync('sample.txt', 'newSample.txt');
console.log('\nFile renamed successfully.');

if (fs.existsSync('newSample.txt')) {
    console.log('newSample.txt exists.');
}

fs.unlinkSync('newSample.txt');
console.log('File deleted successfully.');