// What will the value of counter be at the end of this program? Why?
let counter = 1;

function myFunction() {
  counter++;
  return counter;
}

myFunction();
const num = myFunction();

//My understanding:
// I believe the value of counter at the end of the program will be 2, the function looks for a counter variable which is set to 1.
// The body of the function requires that it increments it and returns the value
// so when you console.log myFunction on line 9 I expect that counter will then become 2

// After console.log(myFunction()) it did return 2 which I thought would be the value of counter by the end of the program
