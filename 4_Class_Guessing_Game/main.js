#! /usr/bin/env node
import inquirer from "inquirer";
// hamy agr koi project mila hai to sab se pehly hamne ghabrana nahi hai.
// 2sra ye ke hamne us project ko choty choty hisso mein devide kar lena hai chunks ki surat mein
// 3sra step by step ley kar chalna hai apne project ko jis tarhn ka bhi bana rhy hain....
// forexample
// 1_ Computer will genrate a random number.                            (Done)
// 2_ User input for guessing number.                                   (Done)
// 3_ Compare user inpur with computer genrated number and show result. (Done)
const randomNumber = Math.floor(Math.random() * 6 + 1);
console.log(randomNumber);
const answer = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "Please Guess a Number 1 > 6:",
    }
]);
if (answer.userGuessNumber === randomNumber) {
    console.log("Congratulations! you guessed right Number(:");
}
else {
    console.log("You guessed wrong Number(:");
}
;
// NOTES....
// 1_ Math aik aisa method hai jisme multiple cheezy store hoti hain.
// 2_ Math.(suggestions) math ke sath dot lgaenge to hamen bohut sari suggestion dega.
// 3_ Math.random() ka function call karne se ye hamy random numbers genrate kar ke dega (0 se 1) ke darmyan mein.
// 4_ Math.random() verible mein store kar ke run karenge to Zero ki value se start or points mein
// value dega (0.8993804053100733) kuch is tarhn phit ham math mein floor ka function call krwa lenge
// floor karta ye hai ke hamen points mein value nahi deta jese hmari value agr 1.5 hai to ye usy 1 kar dega...
// Math.floor(Math.random())
// is code ka matlab ye hai ke Math.random() function koi value genrate karega or wo value dey dega Math.floor ko.
// Math.floor mein jab wo value aegi to ye function us value mein se points ki values ko hata dega 
// jese (0.8993804053100733) ki value thi isko (0) kar dega iske upar ki jitni values hongi wo nahi aengi...
// Math.floor(Math.random()) is se hmesha hmari value sirf 0 aegi lekin ab ham chahty hain hmari value 0 se ziyada bhi aye
// Math.floor(Math.random() * 10);
// ab is code se hmare pass jo computer value genrate karega wo (0 se 10) ke darmyan mein hogi lekin 10 ki value nahi aegi
// agr ham chahty hain hmare pass 10 se nahi balke (0 se 6) ke darmyan mein value aye to hm 10 ki jagah 6 likh denge.
// Math.floor(Math.random() * 10 + 1);
// agr ham chahty hain hamen (0) se value chlani hi nahi hai to ham ye code likh denge. 
// <------------------------------------------END------------------------------------------->
// (#! /usr/bin/env node) 
// projects live karte waqt.
// <------------------------------------------END------------------------------------------->
// ye sari modification (package.json) mein hongi
// <------------------------------------------END------------------------------------------->
// {
//     "name": "@shoaib_4rahmed/_guessing_game",  
// agr hamne project name ko apne npm website waly name par rakhna hai unique karne ke liye 
// to @ laga kar name past kar ke phir / laga denge.
//     "version": "1.0.0",
//     "description": "I going to create simple number guessing game.",
//     "main": "index.js",
//     "publishConfig": {
//       "access": "public"
//     },
//       apna npm website ka username rakhny ka nuqsan ye hai ke npm hmare project ko persnal project ke tor pe
//       live karne ki koshish karega to us se bachny ke liye ham ye package include kar denge (package.json) mein
//     "type": "module",
//     "bin": "main.ts",
//      ye bin ki command bhi likhni hogi apne (package.json) mein or apni file ka name iske aagy likhna hpga
//      javascript wali file ka name likhna hoga agr ghalti se ts. wali ka likh diyya to publish hony ke bad error aega
//     "scripts": {
//       "test": "echo \"Error: no test specified\" && exit 1"
//     },
