function getAllLetters(str) {
    return str === "" ? [] : str.split('');
    
}

let output = getAllLetters('Radagast');
console.log(output); // --> ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']
