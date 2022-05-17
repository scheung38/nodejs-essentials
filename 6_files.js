const fs = require('fs');

const data = fs.readFileSync('hello.js');

console.log(data);
{/* <Buffer 63 6f 6e 73 6f 6c 65 2e 6c 6f 67 28 27 48 65 6c 6c 6f 20 66 72 6f 6d 20 68 65 6c 6c 6f 2e 6a 73 27 29 3b > */ }


console.log(data.toString());
// 'Hello from hello.js';

fs.writeFileSync('data.txt', 'Write to Me!\n');

fs.appendFileSync('data.txt', 'Another Message\n');

fs.appendFileSync('data.txt', 'Last Call!\n');

fs.copyFileSync('data.txt', 'data.bak.txt');

fs.renameSync('data.bak.txt', 'data.old.txt');

fs.unlinkSync('data.old.txt');

const dir = fs.readdirSync(__dirname);

console.log(dir)
// [
//     '.env', '.git',
//     '.gitignore', '.tool-versions',
//     'README.md', 'calculator.js',
//     'calculator.test.js', 'command.js',
//     'data.txt', 'files.js',
//     'hello.js', 'index.js',
//     'node_modules', 'package-lock.json',
//     'package.json', 'setenv.sh',
//     'system.js'
// ]


// fs.mkdirSync('file-system');

// Move file data.txt to file-system/data.txt
fs.renameSync('data.txt', 'file-system/data.txt');

// How to watch file for changes?
fs.watchFile('file-system/data.txt', () => {
    console.log(fs.readFileSync('file-system/data.txt').toString())
})
