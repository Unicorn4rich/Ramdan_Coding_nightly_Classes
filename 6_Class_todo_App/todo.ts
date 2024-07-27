#! /usr/bin/env node
import inquirer from "inquirer"

// Read, Update, Delete, Add.

let store = [];
let condition = true; // loop sirf tru ya false value leta hai isliye hamne aik boolean value verible mein store krwa kar dey di is loop ko chlany ke liye..

while(condition) // is value ko true samjha jaega...
{
let todoApp = await inquirer.prompt([
    {
        name: "add",
        message: "What you want to add in your todos?",
        type: "input"
    },

    {
        name: "addmore",
        message: "Do you want to add more ?",
        type: "confirm",
        default: "true"
    },

    ])

    store.push(todoApp.add);
    condition = todoApp.addmore;
    console.log(store);
};




// NOTES..

//   name: "add",
// is type se ye hoga ke ham jo bhi isme input denge ye avail kar lega apne pass num ho ya string.

// type: "confirm"
// is type se ye hoga inquirer hamse jo bhi input lega ya to wo Yes mein hoga ya No mein
// or jab bhi ham (type: "confirm") ye type use karte hain tab hame (default: "false") ye lazim lgana parta hai warna
// loop nahi rukega (no) karne se bhi..

// (default: "false") or dosra is type ko lgane ka faida ye bhi hai ke agr user Yes or No mein kuch input nahi deta
// to is default value mein jo type hai wahi automaticly consider ho jaegi....

// while loop
// agr ham chahty hain aik hi question bar bar pocha jaye to uske liye hain while loop ka istmal karenge.