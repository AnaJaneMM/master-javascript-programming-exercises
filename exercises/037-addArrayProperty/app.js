function addArrayProperty(obj, key, arr) {
  obj[key] = arr;
  return obj
  
}
let myObj = {};
let myArray = [1, 3];
console.log(myObj); // --> {}
addArrayProperty(myObj, 'myProperty', myArray);
console.log(myObj.myProperty); // --> [1, 3]