//What will be logged out on the console when this code run? Why?

function myFunction(num1, num2) {
  console.log(num3);
}

const num1 = 10;
const num2 = 1;
const num3 = 30;
// const num4 = 17;

myFunction(num3, num1);

//My understanding:
// I believe what will be logged out on the console when the code runs will be 30.
// This is because I believe that the function is only instructed to search for a variable num3 and log out the value which in this case is 30.

// When I ran the code I was correct and went further to add a new variable const num4 = 17 and change the function instructions to console.log(num4) with the belief it would log 17 which it did.
