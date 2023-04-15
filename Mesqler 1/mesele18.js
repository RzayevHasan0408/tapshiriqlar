function number (x){
    let num3 = x%10
    let num2 = (parseInt(x/10)%10)
    let num1 = (parseInt(x/100))
    let netice = (num3+num2+num3)/5
    return netice;

}
console.log(number(555))