//What will the value of result be at the end of this program? Why?

function myFunction(num1, num2) {
  return num1 + num2;
}

const num1 = 10;
const num2 = 1;
const num3 = 4;

const result = myFunction(num3, num1);

// console.log(result);

//My understanding:
// I believe the value of result will be 14 by the end of the program.
//This is because the function takes two numbers and adds them.
//We have 3 const variables with different numbers and const result uses myFunction to add 4 (num3) and 10 (num1).
//In this case in the function, 4 acts as 'num1' (the first number) and 10 as 'num2' (to add the second number)

// After console.log(result) to see the value, I was correct, it showed 14
