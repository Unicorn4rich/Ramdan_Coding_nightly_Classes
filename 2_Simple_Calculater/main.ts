#! /usr/bin/env node
// SHABANG
import inquirer from "inquirer";

//                                      array ke nadar ye aik object hai..
const answer = await inquirer.prompt([
  { message: "Enter your first number", type: "number", name: "firstNumber" },
  { message: "Enter your second number", type: "number", name: "secondNumber" },
  {
    message: "Select one of the operaters to perform operation",
    type: "list",
    name: "operater",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

// Conditional statment.....
if (answer.operater === "Addition"){
    const plus = answer.firstNumber + answer.secondNumber
    console.log("Your Value is: " + plus);
}
else if (answer.operater === "Subtraction"){
    const minus = answer.firstNumber - answer.secondNumber
    console.log("Your Value is: " + minus);
}
else if (answer.operater === "Multiplication"){
    const zarab = answer.firstNumber * answer.secondNumber
    console.log("Your Value is: " + zarab);
}
else if (answer.operater === "Division"){
    const taqseem = answer.firstNumber / answer.secondNumber
    console.log("Your Value is: " + taqseem);
}
else {"Please select valid operater to perform your need"};