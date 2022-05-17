require('dotenv').config();

const os = require('os');

console.log(os.userInfo());

// {
//   uid: 501,
//   gid: 20,
//   username: 'mincheung',
//   homedir: '/Users/mincheung',
//   shell: '/bin/zsh'
// }

console.log(os.platform());
// darwin


console.log(os.release());
// 21.4.0


console.log(os.cpus());
// [
//     {
//         model: 'Intel(R) Core(TM) i7-6820HQ CPU @ 2.70GHz',
//         speed: 2700,
//         times: { user: 64052910, nice: 0, sys: 55968430, idle: 433042540, irq: 0 }
//     },
//     {
//         model: 'Intel(R) Core(TM) i7-6820HQ CPU @ 2.70GHz',
//         speed: 2700,
//         times: { user: 3808640, nice: 0, sys: 4729320, idle: 544372940, irq: 0 }
//     },
//     {
//         model: 'Intel(R) Core(TM) i7-6820HQ CPU @ 2.70GHz',
//         speed: 2700,
//         times: { user: 59525540, nice: 0, sys: 40328560, idle: 453073000, irq: 0 }
//     },
//     {
//         model: 'Intel(R) Core(TM) i7-6820HQ CPU @ 2.70GHz',
//         speed: 2700,
//         times: { user: 3910880, nice: 0, sys: 4643520, idle: 544348370, irq: 0 }
//     },
//     {
//         model: 'Intel(R) Core(TM) i7-6820HQ CPU @ 2.70GHz',
//         speed: 2700,
//         times: { user: 50234170, nice: 0, sys: 32718270, idle: 469970080, irq: 0 }
//     },
//     {
//         model: 'Intel(R) Core(TM) i7-6820HQ CPU @ 2.70GHz',
//         speed: 2700,
//         times: { user: 3920720, nice: 0, sys: 4427560, idle: 544550250, irq: 0 }
//     },
//     {
//         model: 'Intel(R) Core(TM) i7-6820HQ CPU @ 2.70GHz',
//         speed: 2700,
//         times: { user: 44384150, nice: 0, sys: 26345400, idle: 482188540, irq: 0 }
//     },
//     {
//         model: 'Intel(R) Core(TM) i7-6820HQ CPU @ 2.70GHz',
//         speed: 2700,
//         times: { user: 3901440, nice: 0, sys: 4221660, idle: 544771200, irq: 0 }
//     }
// ]

console.log(__dirname);
console.log(__filename);
// /Users/mincheung/Documents/nodejs-essentials
// /Users/mincheung/Documents/nodejs-essentials/system.js



console.log(process.env);

// need to require('dotenv').config();
// before process.env to work
const password = process.env.DATABASE_PASSWORD;
console.log(`Hello my password is: ${password}`);