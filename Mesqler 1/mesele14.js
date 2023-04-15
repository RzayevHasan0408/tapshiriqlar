function number(x){
    let num3 = x%10
    let num2 = parseInt(x/10)%10
    let num1 = parseInt(x/100)
    return num2;
}
console.log(number(543));