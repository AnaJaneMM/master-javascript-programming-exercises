let obj = {
    a: 8,
    b: 2,
    c: 'montana'
}

function removeNumbersLessThan(num, obj) {
    for (let i in obj) {
    if (typeof obj[i] === 'number' && obj[i] < num) {
      delete obj[i];
    }
  }   
}
removeNumbersLessThan(5, obj);
console.log(obj);
