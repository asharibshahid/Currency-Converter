import inquirer from "inquirer";

const Currency:any = {
  USD: 1, // base amount
  POUND: 0.78,
  PKR: 278,
  INR: 83.6,
  EURO: 9.93,
  RIYAL: 3.64,
};

let user_Answer = await inquirer.prompt([
  {
    name: "FROM",
    type: "list",
    message: "Enter Currency From",
    choices: ["USD", "POUND", "PKR", "INR", "EURO", "RIYAL"],
  },
{
     name: "TO",
     type: "list",
     message: "Enter Currency TO",
     choices: ["USD", "POUND", "PKR", "INR", "EURO", "RIYAL"]
},
{
name:"amount",
message:"Please Enter The Amount",
type:"number"


}
])

let amountFrom = Currency [user_Answer.FROM]
let amountTo = Currency [user_Answer.TO]
let amount = user_Answer.amount
let baseAmount = amount / amountFrom
let convertedAmount =  baseAmount * amountTo 
// console.log(amountFrom);
// console.log(amountTo);
// console.log(amount);
console.log(convertedAmount);
