// primitive

const { useImperativeHandle } = require("react");

// 7 types : string, number , Boolean , null , undefined , symbol , BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

// const bigNumber = 344565564556475655656n



// Reference (Non Primitive )

// Array , Objects , Functions

const heros = ["shakiman", "thom", "doga"]
 let myObj = {
    name: "mayank",
    Age: 22,
}


const myFunction = function() {
    console.log("Hello world");
}


console.log(typeof myFunction);


//primitive typeof value while run

//Number = number
//Sting = string
// boolean = boolean
//null = object
//undefined = undefined
// symbol = symbol
//bigInt = bigint

// ++++++++++++++++++++++++++++++++++

// stack (primitive), Heap (Non primitive)

let myYoutubename ="mayanksrivastavadotcom"

letanothername = myYoutubename
anothername ="chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "usee@google.com",
    upi:"user@ybl"
}

let userTwo = userOne

userTwo.email = "mayank@google.com"

console.log(userOne.email);
console.log(userTwo.gmail);

//conclusion

//heap => means we get the reference
//stack  => means we get the copy of that value origin will remain same