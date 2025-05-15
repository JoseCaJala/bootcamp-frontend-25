//Example of hoisting
console.log(x); // undefined
var x = 5;
console.log(x);


//with functions
greeting();           // Works: function declaration is hoisted

console.log(fullname); //Undefined because hoisting
var fullname = "José";
console.log(fullname); // Jose

console.log(edad);   // ReferenceError: Cannot access 'edad' before initialization
let edad = 30;

function greeting() {
  console.log("¡Hi!");
}

farewell();        // TypeError: farewell is not a function
var farewell = function() {
  console.log("¡Bye!");
};