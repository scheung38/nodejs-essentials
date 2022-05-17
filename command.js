console.log(process.argv);

// Prints out
// [
//     '/Users/mincheung/.asdf/installs/nodejs/16.15.0/bin/node',
//     '/Users/mincheung/Documents/nodejs-essentials/command.js'
// ]

// First is node installation directory
// Second is where current file is located 


// ➜  nodejs - essentials git: (main) ✗ node command.js
// [
//     '/Users/mincheung/.asdf/installs/nodejs/16.15.0/bin/node',
//     '/Users/mincheung/Documents/nodejs-essentials/command.js'
// ]

// ➜  nodejs - essentials git: (main) ✗ node command.js 1 2 3
// [
//     '/Users/mincheung/.asdf/installs/nodejs/16.15.0/bin/node',
//     '/Users/mincheung/Documents/nodejs-essentials/command.js',
//     '1',
//     '2',
//     '3'
// ]

// Note numbers is stored as strings 

const arguments = process.argv.slice(2)
console.log(arguments)

// ['1', '2', '3']

const sum = arguments.reduce((acc, val) => acc + val)
console.log(sum)

// node command.js 1 2
// Result is NOT 3 but since string it is just 12
// 12

const sum2 = arguments.reduce((acc, val) => acc + parseInt(val), 0);
console.log(sum2)
// 3

// node command.js 1 2 3 4
// 10