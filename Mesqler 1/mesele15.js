function number(x){
    let num3 = x%10
    let num2 = (parseInt(x/10)%10)
    let num1 = (parseInt(x/100))
    let topla= num3+num2+num1
    return topla;

}
console.log(number(546))