let yuan = prompt('What do you have left in yuan?')
let yen = prompt('What do you have left in yen?')
let won = prompt('What do you have left in won?')


let convert = `You have in USD: $` + parseInt((yuan*0.14) + (yen*0.0072) + (won*0.00078)) 

console.log(yuan)
console.log(yen)
console.log(won)
console.log(convert)
alert(convert)