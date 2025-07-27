function areBothOdd(num1, num2){
    return (num1 % 2 && num2 % 2) ? true : false;
}
let output = areBothOdd(1, 3);
console.log(output);