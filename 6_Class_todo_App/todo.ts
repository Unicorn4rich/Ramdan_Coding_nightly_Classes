#! /usr/bin/env node
import inquirer from "inquirer"


let store = [];
let condition = true;

while(condition)
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
        default: "false"
    }
    ])

    store.push(todoApp.add);
    condition = todoApp.addmore;
    console.log(store);
}


// NOTES..

//   name: "add",
// is type se ye hoga ke ham jo bhi isme input denge ye avail kar lega apne pass num ho ya string.

// type: "confirm"
// is type se ye hoga inquirer hamse jo bhi input lega ya to wo Yes mein hoga ya No mein
// or jab bhi ham (type: "confirm") ye type use karte hain tab hame (default: "false") ye lazim lgana parta hai.

// while loop
// agr ham chahty hain aik hi question bar bar pocha jaye to uske liye hain while loop ka istmal karenge.