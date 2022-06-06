//What is the value of add and num at the end of the program? Why? 
function myFunction(num) {
    return num-1
}

let num = 10
let add = 3

add = myFunction(add)
// console.log(add)
add = myFunction(add)
// console.log(add)


//My Understanding:
// let num will still be 10 because it has not been called with the function and add will be 1. Add is a variable with the value of a number being 3 so when add (3) is passed as an argument in the function myFunction(num) it is the same as myFunction(3), and 3 - 1 is 2. It is then calling it again but this time 2 is num so 2-1 is 1. 


// More specifc explanation. Note to self to be this specific:
//add is a variable storing the number 3.
//add is then updated to store the result of myFunction(add), which, the first time it is called is the same as calling myFunction(3)
//myFunction takes in a number, subtracts 1 and returns a new number
//hence after the first update, add will be 3-1 = 2