function addToBackOfNew(arr, element) {
    let newArray = []
    arr.forEach(e=>{
        newArray.push(e)
    })

    newArray.push(element)
    return newArray;
    
}

let input = [1, 2];
let output = addToBackOfNew(input, 3);
console.log(input); // --> [1, 2]
console.log(output); // --> [1, 2, 3]
