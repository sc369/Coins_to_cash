const coins =   {
quarters: 10,
dimes: 40,
nickels: 20,
pennies: 12
}

const centsInQuarters = coins.quarters * 25 
const centsInDimes = coins.dimes * 10
const centsInNickels = coins.nickels * 5
const centsInPennies = coins.pennies

const totalCents = 
centsInQuarters +=
centsInDimes +=
centsInNickels +=
centsInPennies

console.log(totalCents)

const totalDollarAmmount = `Total amount: $${totalCents/100}`
console.log(totalDollarAmmount)