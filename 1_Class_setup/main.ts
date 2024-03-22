// install Node.js and Typescript in your PC

// <-----------------------------------------------End------------------------------------------------>

// 1_ npm init
// is se hmara program initilize hoga jis ki wajah se cmd ham se 
// kuch quiestion pochega ke hmara program kesa hoan chahiye
// phir kuch is tarhn se hmara package.json creat hoga...

// {
//   "name": "class_1",
//   "version": "1.0.0",
//   "description": "This is my first class for installation",
//   "main": "index.js",
//   "type": "module",
//   "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1"
//   },
//   "author": "Shoaib Bashir",
//   "license": "MIT",
//   "dependencies": {
//     "inquirer": "^9.2.16"
//   },
//   "devDependencies": {
//     "@types/inquirer": "^9.0.7"
//   }
// }

// <-----------------------------------------------End------------------------------------------------>

// 2_ tsc --init
// is se tsconfig.json ki file creat hogi extention mein jis mein ham kuch changes karenge...

// line number 14 pe ye likha hoga ("target": "es2016",) jisko ham ("target": "ES2022",) mein change kar denge...

// line number 28 pe ye likha hoga ("module": "commonjs",) jisko ham ("module": "NodeNext",) kar denge..

// line number 30 pe ye likhe hoga ("moduleResolution": "node10",) jisko

// ham uncomment kar ke ("moduleResolution": "NodeNext",)  kar denge....

// <-----------------------------------------------End------------------------------------------------>

// 3_ npm i inquirer
// is command se ham VS terminal ya cmd mein inquirer install kar lenge 
// ye user se input lenge mein madat karta hai 

// <-----------------------------------------------End------------------------------------------------>

// 4_ npm i --save-dev @types/inquirer
// is se ham develper yani khud ke liye Dependencies install karte hain
// jo project pe kaam karne mein hmari help karti hai..

// <-----------------------------------------------End------------------------------------------------>
// in sab process ko karne ke bad ham apni main.ts ki file bana kar usme apne 
// project ka kaam kar sakte hain inquire ko apni main.ts mein import krwa ke....

// import inquirer from "inquirer"


// //            await mean wait karo jab tak user se input nahi aa jata
// const answer = await inquirer.prompt([{message: "What is your name"}]);
