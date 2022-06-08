//What will be logged out on the console when this code runs? Why?

function myFunction(num1, num2, num3) {
  console.log(num3);
}

const num1 = 10;
const num2 = 1;
const num3 = 20;

myFunction(num3, num1, 100);
// 20, 10, 100

// myFunction(num3, num1, "Hello");

//My understanding:
// I was unsure of this and got it wrong I thoguht it would be 20 but after looking closer I understand how it works.
// The function has 3 arguments num1, num2 and num3.
// It is instructed to log the 3rd number in the argument (num3)
// so when the funnction is called, myFunction(num3, num1, 100);
// the arguents are taking 20, 10 and 100
// It logs 100 because 100 is num3 in this case
// I understand from this that arguments act as placeholders

// This made me go further and call the function with a string "Hello" instead of 100 to see if it would log Hello.
// After running the code, it did!!
