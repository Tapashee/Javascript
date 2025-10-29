/* 
    Javascript is a "dynamically typed" language.
    The variable's type does not need to be defined beforehand. 
    
    Rules:
    - Letter, Digit, Underscore and $ is allowed.
    - First letter cannot be a digit.

    Variable Types:
    1. Primitive: Null, Undefined, Boolean, Number, Bigint, String
    2. Non-primitive: Object
*/

// Null
n = null;
console.log(n);

// Undefined
u = undefined;
console.log(u);

// Boolean
isOkay = true;
console.log(isOkay);

isOkay = false;
console.log(isOkay);

// Number
a = 10;
console.log(a);

a = 36.77;
console.log(a);

// Bigint

b = 1234567890123456789012345n; // suffix 'n' indicates a Bigint
console.log(b);

// String
str = "Tapashee Tabassum"
console.log(str);

// Symbol
s = Symbol();
console.log(s);

// Object
person = {
    firstName: "Tapashee Tabassum",
    lastName: "Urmi",
    age: 33
};
console.log(person);

