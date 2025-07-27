function countCharacter(str, char) {
    let cuenta = 0;

    for(let i = 0; i < str.length; i++){
        if(str[i] === char){
            cuenta ++;
        }
    }
    return cuenta;
    
}

let output = countCharacter('I am a hacker', 'a');
console.log(output); // --> 3
