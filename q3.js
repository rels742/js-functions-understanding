// What is the value of num at the end of the program? Why?

function myFunction(num) {
    return num-1 
}

let num = 10
num = myFunction(num)
console.log(num)
num = myFunction(num)
console.log(num)


// I believe at the end of the program num will be 8. This is because let allows the value of the variable to change. The fucntion is taking the argument num which in this example is 10 defined by let num = 10. And the body of the function instructs num to be taken away by 1 and return the value (the answer). So the first num = myFunction(num) is 10 - 1 which is 9 but then the variable num is called with the myFunction(num) again so it will take the new value 9 and take 1 away from that, leaving us with a value of 8. 

// After running the code, I was INCORRECT.
// It returned:
//9
//NaN

// After having it explained - my understanding and prediction of the function was CORRECT but how I used console.log was wrong
// let num = 10
// num = console.log(myFunction(num))
// num = console.log(myFunction(num))
//returned 9 and NaN because all console.log does it print out what I tell it to so it was equivalent to me saying, undefined - 1
// The code above is the correct way of using console.log
