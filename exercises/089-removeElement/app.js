function removeElement(arr, num) {
  return arr.filter((element) => element !== num);
}

let output = removeElement([1, 2, 3, 2, 1], 2);
console.log(output); // --> [1, 3, 1]
