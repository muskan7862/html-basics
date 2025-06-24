// Primitive data types
let number = 42; //Number
let String = "Hello World"; //String
let Boolean = true; // boolean
let undefinedvar; // undefined //(not assigned a value)
let nullVar = null; //null
let symbolVar = Symbol("unique"); // symbol //(unique identifier) //(often used as object property keys)
let Bigint = BigInt(1234567789012345678901234567890) // used for large integers

// Non Primitive data types:
let objectVar = { key: "value"}; 
let arrayVar = [1, 2, 3, 4, 5];
let FunctionVar = function() { return "I am a function"};


let object2={
    // adding multiple key-value pairs
     name:"John Doe",
     age:30,
     isEmployed: true,
     hobbies: [["reading", "gaming","coding"]]
}

console.log("Data Types in JavaScript:");
console.log("Number:", number);
console.log("String:", String);
console.log("Boolean:", Boolean);
console.log("Undefined:", undefinedvar);
console.log("Null:", nullVar);
console.log("Symbol:", symbolVar);
console.log("Bigint:", Bigint);
console.log("object:", objectVar);
console.log("array:", arrayVar);
console.log("Function:",FunctionVar);
console.log("object2:", object2);