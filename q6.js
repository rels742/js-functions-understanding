//What value will be logged inside the function call? Why?

function myFunction(num, num1) {
  console.log(num1);
}

let num = 10;
let num1 = 2;

myFunction(num1, num);

// My understanding:
// 10 will be logged this is because the arguments in the function act as placeholders.
// when the function is run it looks like (myFunction(2, 10))
// The function instructions are to log num1 which is the same as saying log the second argument of the function
// In this case the second argument is num which has the value of 10.

// After running the code, I was correct.
