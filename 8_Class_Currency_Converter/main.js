#! /usr/bin/env node
// Currency converter 1st version Start
// import inquirer from "inquirer"
// const curruncy: any = {
//     USD: 1,   // base Curruncy
//     EUR: 0.91,
//     GBP: 0.76,
//     INR: 74.57,
//     PKR: 280
// };
// let user_Curruncy = await inquirer.prompt([
//     {
//     name: "from",
//     message: "Enter your Curruncy",
//     type: "list",
//     choices: ["USD", "EUR", "GBP", "INR","PKR"]
//     },
//     {
//         name: "to",
//         message: "Enter Curruncy to Convert",
//         type: "list",
//         choices: ["USD", "EUR", "GBP", "INR","PKR"]
//     },
//     {
//         name: "amount",
//         message: "Enter your amount",
//         type: "number"
//     }    
// ]);
// let fromAmount = curruncy[user_Curruncy.from]; // user choose his currency from list
// let toAmount = curruncy[user_Curruncy.to];   // user chossing curruncy from lidt to exchange
// let amount = user_Curruncy.amount;
// let baseAmount = amount / fromAmount;   // USD base currency
// let convertedAmount = baseAmount * toAmount
// console.log(convertedAmount);
// console.log(fromAmount);
// console.log(toAmount);
// console.log(amount);
// <------------------------------------------END---------------------------------------------->
// Currency Converter 2nd verison start
// For API Learning (jsonformatter.org) 
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.underline.bold.cyan("\n\t \\\\\\\\\\\\\\\\\ WELCOME TO THE CURRENCY CONVERTER APP //////// \n\t"));
// Api Call karwa rhy hain...
try {
    let Api_data = await fetch("https://v6.exchangerate-api.com/v6/4d2390f40978b1ef431fc4d9/latest/USD").then((D) => D.json());
    // console.log(Api_data); // Api All Data Printed with extra Code...
    // API se sirf ham Currency's ka data alag kar ke store kar rhy hain baqi ka data skip kar rhy hain... 
    let Only_Currency_data = Api_data.conversion_rates;
    // console.log(Only_Currency_data); sirf Currency ka data print hoga...
    // API Data objects ki sirf key propertys ko alag kar ke aik new veriable mein save kar rhy hain...
    let Currency_Obj_Propertys = Object.keys(Only_Currency_data);
    // console.log(Currency_Obj_propertys);
    // <----------------------------------------------END-------------------------------------------->
    // Start Main Program and looping
    let Looping = true;
    while (Looping) {
        let Currency = await inquirer.prompt([
            {
                name: "have",
                message: chalk.green.bold("\n\n PLEASE SELECT YOUR CURRENCY:"),
                type: "list",
                choices: Currency_Obj_Propertys
            },
            {
                name: "convert",
                message: chalk.green.bold("\n\n PLEASE SELECT CURRENCY TO CONVERT:"),
                type: "list",
                choices: Currency_Obj_Propertys
            },
            {
                name: "enter",
                message: chalk.green.bold("\n\n ENTER YOUR AMOUNT:"),
                type: "number"
            }
        ]);
        // User questions Answer save in veriables
        let User_Amount = Only_Currency_data[Currency.have];
        let User_Choose = Only_Currency_data[Currency.convert];
        let Enter_amount = Currency.enter;
        // Currency Converting Formula
        let Base_Currency = Enter_amount / User_Amount;
        let final_result = Base_Currency * User_Choose;
        console.log(final_result);
        // User choose Repat Code and perform Loop
        let Ask = await inquirer.prompt([
            {
                name: "loop",
                message: chalk.bold.bgGray("\n\n DO YOU WANT TO CONVERT MORE CURRENCY ?"),
                type: "confirm",
                default: true,
            }
        ]);
        // assign condition to loop
        if (Ask.loop === false) {
            Looping = false;
        }
    } // loop end bracket
    console.log(chalk.underline.bold.white.cyan("\n\n\t ⬜.......THANKS FOR USING CURRENCY CONVERTER APPLICATION.......⬜"));
} // try end brecket
catch (error) { // API se data laty huy agr koi error aya to catch method hanldes karega...
    console.log(error);
}
