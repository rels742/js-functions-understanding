// What value will be logged inside the function call? Why?

function myFunction(num, num1) {
    console.log(num1)
}

let num = 10
let num1 = 2

myFunction(num)

//My Understanding: was that the body of the function itself was written incorrectly and  it will be undefined because the actual function is coded wrong and what it's intended to be is instead, 

// function myFunction(num, num1) {
//     return num1
// }

// let num = 10
// let num1 = 2

// console.log(myFunction(num, num1))

//I was then a little confused but after having it explained bnum1 was forgotten in the function call. js will set it console.log(num1) to undefined automatically