// Description of what I believe the functions are doing:
// Similarily to question 1 it is a function with two arguments being num1 and num2. However, inside the body of the fucntion althought num1 and num2 are to be added together, when this function is called, nothing will be returned or it will be undefined because there is no instruction with what to do with this operator. In example 1,return num1 + num2 is what allowed the function to carry out the mathematical operation and actually return a value. 

function myFunction(num1, num2) {
    num1 + num2
}

const result = console.log(myFunction(5,5))

// After running the code, I was CORRECT. It returned undefined. 

// I also wanted to see what would happen if I did this:
function myFunction(num1, num2) {
    console.log (num1 + num2)
}

const result2 = console.log(myFunction(5,5))

// It returned:
//10
//Undefined 

// My belief is because, console.log will carry out the operation using the arguments in const result2 to log the operation within the function body