#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 15000;
let myPin = 1234;
let ATM = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your Pin",
        type: "number"
    }
]);
// user_value  internal_value  = matching each other
if (ATM.pin === myPin) {
    console.log("Correct pin Code!!!");
    let OprAtm = await inquirer.prompt([
        {
            name: "opration",
            message: "please select options",
            type: "list",
            choices: ["withdraw", "check balance"]
        }
    ]);
    // console.log(OprAtm);
    if (OprAtm.opration === "withdraw") {
        let amountDraw = await inquirer.prompt([
            {
                name: "past",
                message: " select cash method ?",
                type: "list",
                choices: ["select enter Amount ?", "select fast_Cash ?",]
            }
        ]);
        if (amountDraw.past === "select enter Amount ?") {
            let amount1 = await inquirer.prompt([
                {
                    name: "external",
                    message: "enter your amount",
                    type: "number"
                }
            ]);
            if (amount1.external <= myBalance) {
                myBalance -= amount1.external;
                console.log(`Your remaining balance is: ${myBalance}`);
            }
            else {
                console.log("Jitni Auqaat hai utne pese nikal ghreeb insan!");
            }
        }
        if (amountDraw.past === "select fast_Cash ?") {
            let display = await inquirer.prompt([
                {
                    name: "vew",
                    message: "please select amount option to withdraw",
                    type: "list",
                    choices: ["5000", "10000", "15000", "20000"]
                }
            ]);
            if (display.vew === "5000") {
                myBalance -= display.vew;
                console.log(`Your remaining balance is: ${myBalance}`);
            }
            else if (display.vew === "10000") {
                myBalance -= display.vew;
                console.log(`Your remaining balance is: ${myBalance}`);
            }
            else if (display.vew === "15000") {
                myBalance -= display.vew;
                console.log(`Your remaining balance is: ${myBalance}`);
            }
            else if (display.vew === "20000") {
                myBalance -= display.vew;
                console.log(`insaficiant balance please recharge`);
            }
        }
    }
    else if (OprAtm.opration === "check balance") {
        console.log(`Your balance is: ${myBalance}`);
    }
}
else {
    console.log("incorrect pin number");
}
