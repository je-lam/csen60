// console.log("Hello world!");
// alert("Hello, world!");
window.document.write("<p>Welcome to CSEN 60!</p>");

//* Append only wrks if you're referencing the specific element on the page
// window.document.append("<p>This should come after the h1</p>");

/*
this
is
a
multi-line
comment
*/

// TODO: fix this function

function add(a, b) {
    return a + b;
}

// This is the variable declaration
let x = 100;
// let x => Declares x as a spot in the memory
// x = 2 => This is the initialization. 
if (true) {
    x = 200; //same variable
}
console.log(x);

let y;
y = null
let z = 0
console.log(y, z)

let greeting = "Hello, world!";
let response = `The time is ${new Date().getHours()}`;
console.log(response);

const age = 20

if (age > 18) {
    console.log("You are of age.")
} else {
    console.log(`You aren't of age. Please wait ${18 - age} years`);
}

// Another example of this would be showing the differences between a logged in/out version of a webpage.
// (suggested by professor Xanthus)



/* outdated stuff */
// let isAvailable = true;
// let isOverAge = (age > 18);

// console.log("\n", isOverAge);

// THIS is an example of an Object. https://www.w3docs.com/learn-javascript/javascript-data-types.html
// According to Xanthus, these are basically structs.
let person = {
    name: "John",
    age: 30,
    isStudent: false
};

console.log(person.age)
console.log(person["age"]) //does same as the above, useful for long names and such.
console.log(typeof ("hello world"));

console.log(3 === '3') //false, fails one test
console.log(3 === 2) //also false, fails another test