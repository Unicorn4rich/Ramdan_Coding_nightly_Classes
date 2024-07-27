#! /usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk"


// Welcome message
console.log(chalk.bold.italic.bgCyan("\n\t <<<<<<<<< WELCOME TO WORDS & CHARACTERS APP >>>>>>>>> \n"))


// Veriable for loop
let condition = true;


// <------------------------------------------END------------------------------------------>
// Question to Users and Get answers


do {     // Using do while loop

const Word_Counter: {
    Sentence: string,
    Ask: string,

} = await inquirer.prompt([

    {
       name: "Sentence",
       message: chalk.bold.cyan("\n ENTER YOUR SENTENCE TO COUNT THE WORDS AND CHARACTERS:"),
       type: "input"
    },
    {
        name: "Ask",
        message: chalk.bold.cyan("\n PLEASE CHOOSE OPTION WHAT YOU WAN TO COUNT?"),
        type: "list",
        choices: ["WORDS", "CHARACTERS"]
    }

]);

// <------------------------------------------END------------------------------------------>
// Old Method

// if(Word_Counter.Ask === "WORDS"){

//     let Words = Word_Counter.Sentence.trim().split(" ");
//     console.log(Words);
//     console.log(`YOUR SENTENCE WORD COUNT IS: ${Words.length}`);

// }

// <------------------------------------------END------------------------------------------>
// New Method

// Words count Code
if(Word_Counter.Ask === "WORDS"){

    let Words = Word_Counter.Sentence.trim().split(" ").filter((item: any) => item.length > 0).length;

    if(Word_Counter.Sentence !== ""){
        console.log(chalk.bold(`\n YOUR WORDS COUNT IS: ${Words}`));
    }
}

// <------------------------------------------END------------------------------------------>
// Chracters Counting Code

else if(Word_Counter.Ask === "CHARACTERS"){

    let Characters = Word_Counter.Sentence.trim().split(" ").join("").length;

    if(Word_Counter.Sentence !== ""){
        console.log(`\n YOUR CHARACTERS COUNTING IS: ${Characters}`);
    }
}


// <------------------------------------------END------------------------------------------>
// User Choose for loop action

let Repeat = await inquirer.prompt([
    {
        name: "app",
        message: chalk.bold.cyan("\n DO YOU WANT TO MORE COUNT?"),
        type: "confirm",
        default: true
    }
]);


// give condition to veriable
if(Repeat.app === false){
    condition = false;
}


} while(condition)


// <------------------------------------------END------------------------------------------>
// Thanks message

console.log(chalk.bold.italic.bgCyan("\n \t <<<<<<<<<<<<<< THANKS FOR PARTICIPATE >>>>>>>>>>>>> "));


// <------------------------------------------END------------------------------------------>
// Notes
// Words => (SHOAIB) aik pore jumly ko kehty hain.
// Characters => (S H O A I B) words ke aik aik alphbet ko kehty hain

// .trim() ka method Words ke Up, Down or Right, Left se white spaces khatam kar deta hai
//  but unke beech wali spaces khatam nahi kar sakta...

// .split(" ") ka method String text ke jin words ke right left pe space hoti hai unko aik array Elements mein convert kar
// ke aik array mein return karta hai agr split("") mein space nahi denge to ye words ko characters bana kar return karega.

// .filter((item: any) => item.length > 0)
// is line ka matlab hai ke hamne array ke har aik element ko aik aik kar ke item ki shakal mein get kiyya or unhy 
// filter kiyya matlab check kiyya ke jin jin elements ki length (0) se ziyada hai unhy return kardo aik new array mein
// iska sab se bara faida ye hai ke ye trim() ki ghalti ko sudhrta hai matlab agr sentence ke beech mein koi spaces hain
// ye unko khatam kar deta hai. kiyun ke split() ka method sentence ke beech ki extra spaces ko bhi element bana kar
// return kar sakta hai isliye ye filtration is cheez ko ensure karti hai ke aisa kabhi na ho....  

// .length; 
// ye array ke har aik element ko count kar ke return karega.. 

// let Words = Word_Counter.Sentence.trim().split(" ").filter((item: any) => item.length > 0).length;

// is pori line ka matlab hai ke User ne jo sentence diyya hai uski trim() se right left ki spaces khatam karo
// split() se har aik word ko array elemnts banao or filter() se sirf un elements ko lo jinki length 0 se ziyada hai
// uske bad bad jitne bhi elements hain unko count karo (Words) ke veriable mein store krwa do... 

// let Characters = Word_Counter.Sentence.trim().split(" ").join("").length;
// is line ka matlab hai ke user ke diyye huy sentence ko trim kiyya jaega phir split() se array elemnts mein convert
// kiyya jaega uske bad us array ke sabhi elements ko join() ke method se us array ko aik string mein convert kar diyya
// jaega or unnke beech wali spaces khatam hata di jaengi.. aisy [Hello World] => (HelloWorld) phir in characters ko
// count kar ke returns kar diyya jaega aik new (Characters) veriable mein...   