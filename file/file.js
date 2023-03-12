const fs = require('fs');

// fs.readFile('./nhom2.txt',(err, data) => {
//     if(err){
//         throw err;
//     }
//     console.log(data.toString());
// })

// other method

// const data = fs.readFileSync('./nhom2.txt');
// console.log(data.toString());


// const path = './config.js';
// fs.access(path, fs.F_OK, (err) => {
//     if(err){
//         console.error(err);
//         return;
//     }
// });


fs.open('file.txt', 'w', (err, file) => {
    if(err) {
        throw err;
    }
    console.log('Saved!');
});
