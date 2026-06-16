// os.js
const os = require('os');

console.log('===== OS Information =====');

console.log('OS Platform:', os.platform());
console.log('OS Type:', os.type());
console.log('OS Release:', os.release());
console.log('Architecture:', os.arch());

console.log('\n===== CPU Information =====');
console.log('CPU Cores:', os.cpus().length);
console.log('CPU Model:', os.cpus()[0].model);

console.log('\n===== Memory Information =====');
console.log('Total Memory:', (os.totalmem() / 1024 / 1024 / 1024).toFixed(2), 'GB');
console.log('Free Memory:', (os.freemem() / 1024 / 1024 / 1024).toFixed(2), 'GB');

console.log('\n===== User Information =====');
console.log('Username:', os.userInfo().username);
console.log('Home Directory:', os.homedir());

console.log('\n===== Network Interfaces =====');
console.log(os.networkInterfaces());

console.log('\n===== Uptime =====');
console.log('System Uptime:', (os.uptime() / 3600).toFixed(2), 'hours');

console.log('\n===== Host Information =====');
console.log('Hostname:', os.hostname());
console.log('Temp Directory:', os.tmpdir());