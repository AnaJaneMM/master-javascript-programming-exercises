function checkAge(name, age) {
  return(age<21) ? `Go home, ${name}!` : `Welcome, ${name}!`;
  
}
let output = checkAge('Adrian', 22);
console.log(output);
