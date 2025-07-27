function computeAverageOfNumbers(numbers){
    if (numbers.length === 0) return 0;
    let sum = numbers.reduce((acc, curr) => acc + curr, 0);
    return sum / numbers.length;
}
let input = [1, 2, 3, 4, 5];
let output = computeAverageOfNumbers(input);
console.log(output);