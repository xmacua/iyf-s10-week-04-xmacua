let name = "Vivian";
let age = 25;
let isStudent = true;
let favoriteColors = ["blue", "black", "green"];
let today = new Date();

console.log("My name is:", name);
console.log("My age is:", age);
console.log("Am I a student?", isStudent);
console.log("My favorite colors are:", favoriteColors);
console.log("Today's date is:", today);

// Basic math
let a = 10;
let b = 3;

console.log(a + b);   // Addition
console.log(a - b);   // Subtraction
console.log(a * b);   // Multiplication
console.log(a / b);   // Division
console.log(a % b);   // Modulus (remainder)
console.log(a ** b);  // Exponentiation

// Increment/Decrement
let count = 0;

count++;  
console.log(count);   // 1

count--;  
console.log(count);   // 0


let firstName ='Vivian';
let lastName = 'macua';

// Concatenation
let fullName = firstName + ' ' + lastName;

// Template literals
let greeting = `hello, ${firstName}!`;
let message = `Your name has ${firstName.length} characters.`;
//string methods
console.log(fullName.toUpperCase()); // VIVIAN DOE
console.log(fullName.toLowerCase());
console.log(fullName.length); // 11
console.log(fullName.includes('macua')); // true
console.log(firstName.charAt(0)); // V']



age = 25;
let currentYear = 2026;

// Age in days
let ageDays = age * 365;

// Age in hours
let ageHours = ageDays * 24;

// Year you turn 100
let year100 = currentYear + (100 - age);

console.log("Age in days:", ageDays);
console.log("Age in hours:", ageHours);
console.log("Year you turn 100:", year100);

//Print numbers 1–100
for (let i = 1; i <= 100; i++) {
    console.log(i);
}

//Print only even numbers 1–50
for (let i = 1; i <= 50; i++) {

    if (i % 2 === 0) {
        console.log(i);
    }

}

//FizzBuzz
for (let i = 1; i <= 100; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }

    else if (i % 3 === 0) {
        console.log("Fizz");
    }

    else if (i % 5 === 0) {
        console.log("Buzz");
    }

    else {
        console.log(i);
    }

}

//Print a triangle of stars
for (let i = 1; i <= 5; i++) {
    console.log("*".repeat(i));
}

//function declaration
function greet(name) {
    return "Hello " + name;
}

console.log(greet("Vivian"));

//Function expression
console.log(add(5, 3));

//Arrow function
console.log(multiply(4, 6));

//Arrow function with body
console.log(divide(10, 2));
console.log(divide(10, 0));

//Area of a triangle
function calculateArea(length, height) {
    return length * height;
}

console.log(calculateArea(5, 10));

//celsiusToFahrenheit(celsius)
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

console.log(celsiusToFahrenheit(25));

//isEven(number)
function isEven(number) {
    return number % 2 === 0;
}

console.log(isEven(4));
console.log(isEven(7));

//getInitials(fullName)
function getInitials(fullName) {
    let names = fullName.split(" ");
    return names[0][0] + names[1][0];
}

console.log(getInitials("Vivian Macua"));

//reverseString(str)
function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(reverseString("hello"));

//calculateTip(bill, tipPercent = 15)
function calculateTip(bill, tipPercent = 15) {
    return bill * tipPercent / 100;
}

console.log(calculateTip(100));      // 15
console.log(calculateTip(100, 20));  // 20

//If/Else statement
function getGrade(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

//Switch Statements
function getDayName(dayNumber) {
    switch (dayNumber) {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        default:
            return "Invalid day";
    }
}

//Loops
for (let i = 0; i < 5; i++) {
    console.log(i);
}

//While Loop
let whileCount = 0;

while (whileCount < 5) {
    console.log(whileCount);
    whileCount++;
}

//for...of Loop (for arrays)

const colors = ["red", "green", "blue"];

for (const color of colors) {
    console.log(color);
}

//Print numbers 1–100
for (let i = 1; i <= 100; i++) {
    console.log(i);
}

//Print only even numbers 1–50

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

//FizzBuzz
for (let i = 1; i <= 100; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }
    else if (i % 3 === 0) {
        console.log("Fizz");
    }
    else if (i % 5 === 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }

}

//Print a triangle of stars
for (let i = 1; i <= 5; i++) {
    console.log("*".repeat(i));
}

//Complete Calculator Code
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Cannot divide by zero";
    }
    return a / b;
}

function modulus(a, b) {
    return a % b;
}

function power(a, b) {
    return a ** b;
}

function calculate(num1, operator, num2) {

    switch (operator) {

        case "+":
            return add(num1, num2);

        case "-":
            return subtract(num1, num2);

        case "*":
            return multiply(num1, num2);

        case "/":
            return divide(num1, num2);

        case "%":
            return modulus(num1, num2);

        case "**":
            return power(num1, num2);

        default:
            return "Invalid operator";
    }

}

// Tests
console.log(calculate(10, "+", 5));  
console.log(calculate(10, "-", 5));  
console.log(calculate(10, "*", 5));  
console.log(calculate(10, "/", 5));  
console.log(calculate(10, "/", 0));  
console.log(calculate(10, "%", 3));  
console.log(calculate(2, "**", 3)); 

//Array

// Creating arrays
const fruits = ["apple", "banana", "orange"];
const numbersArray = [1, 2, 3, 4, 5];
const mixed = ["hello", 42, true, null];

// Accessing elements
console.log(fruits[0]);      // apple
console.log(fruits.length);  // 3

// Modifying arrays
fruits.push("grape");     // Add to end
fruits.unshift("mango");  // Add to start
fruits.pop();             // Remove from end
fruits.shift();           // Remove from start

// Final result
console.log(fruits);

//Array Methods
const numbersArrary = [1, 2, 3, 4, 5];

// forEach - do something with each element
numbersArray.forEach(num => console.log(num * 2));

// map - transform each element
const doubledMap = numbersArray.map(num => num * 2);

// filter
const evenNumbers = numbersArray.filter(num => num % 2 === 0);

// find
const firstEven = numbersArray.find(num => num % 2 === 0);

// reduce
const sum = numbersArray.reduce((total, num) => total + num, 0);

const numbers = [5, -3, 8, 12, -7, 20];
// includes - check if element exists
console.log(numbers.includes(3)); // true

// 1. Double all numbers
const doubled = numbers.map(num => num * 2);
console.log("Doubled numbers:", doubled);

// 2. Filter out negative numbers
const positiveNumbers = numbers.filter(num => num >= 0);
console.log("Without negatives:", positiveNumbers);

// 3. Find the first number greater than 10
const firstGreaterThanTen = numbers.find(num => num > 10);
console.log("First number > 10:", firstGreaterThanTen);

// 4. Calculate the product of all numbers
const product = numbers.reduce((total, num) => total * num, 1);
console.log("Product of numbers:", product);

//Creating objects
const person = {
    firstName: "Vivian",
    lastName: "Macua",
    age: 30,
    isStudent: false,
    hobbies: ["cooking", "coding", "swimming"],
    address: {
        city: "Nairobi",
        country: "Kenya"
    }
};

//Accessing object properties
console.log(person.firstName);         // Dot notation
console.log(person["lastName"]);       // Bracket notation
console.log(person.address.city);      // Nested

//Modifying objects
person.age = 31;                     // Update existing property
person.email = "macuavivianne@gmail.com"; // Add new property
delete person.isStudent;               // Remove property

//Calculator object with methods
const calculator = {
    add: function(a, b) {
        return a + b;
    },

    // Shorthand method syntax
    subtract(a, b) {
        return a - b;
    },

    // Arrow function
    multiply: (a, b) => a * b
};


//Object Iteration
const scores = {
    math: 95,
    english: 88,
    science: 92
};

// Get keys
console.log(Object.keys(scores));   
// Output: ["math", "english", "science"]

// Get values
console.log(Object.values(scores)); 
// Output: [95, 88, 92]

// Get entries
console.log(Object.entries(scores)); 
// Output: [["math", 95], ["english", 88], ["science", 92]]

// Loop through object
for (const [subject, score] of Object.entries(scores)) {
    console.log(`${subject}: ${score}`);
}

//Array of Objects 
const students = [
    { name: "Alice", age: 22, grade: 85, major: "CS" },
    { name: "Bob", age: 20, grade: 72, major: "Math" },
    { name: "Charlie", age: 23, grade: 90, major: "CS" },
    { name: "Diana", age: 21, grade: 88, major: "Physics" },
    { name: "Eve", age: 22, grade: 95, major: "CS" }
];

// 1. Get all student names
const names = students.map(student => student.name);
console.log(names);

// 2. Get students with grade > 80
const highAchievers = students.filter(student => student.grade > 80);
console.log(highAchievers);

// 3. Find the student named "Charlie"
const charlie = students.find(student => student.name === "Charlie");
console.log(charlie);

// 4. Calculate average grade
const avgGrade = students.reduce((total, student) => total + student.grade, 0) / students.length;
console.log(avgGrade);

// 5. Get CS majors only
const csMajors = students.filter(student => student.major === "CS");
console.log(csMajors);

// 6. Sort by grade (highest first)
const sortedByGrade = [...students].sort((a, b) => b.grade - a.grade);
console.log(sortedByGrade);

// 7. Check if any student has grade > 90
const hasTopStudent = students.some(student => student.grade > 90);
console.log(hasTopStudent);

// 8. Check if all students are passing (grade >= 60)
const allPassing = students.every(student => student.grade >= 60);
console.log(allPassing);


//Daily challenge(fizzbuzz)

for (let i = 1; i <= 100; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");

    } else if (i % 3 === 0) {
        console.log("Fizz");

    } else if (i % 5 === 0) {
        console.log("Buzz");

    } else {
        console.log(i);
    }
}

//Reverse a string

function reverseString(str) {

    let reversed = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    return reversed;
}

console.log(reverseString("hello"));

function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(reverseString("hello"));

//Find the largest number
function findLargest(arr) {

    let largest = arr[0];

    for (let i = 1; i < arr.length; i++) {

        if (arr[i] > largest) {
            largest = arr[i];
        }

    }

    return largest;
}

console.log(findLargest([4, 7, 1, 12, 3]));

function findLargest(arr) {

    return arr.reduce((max, num) => {
        return num > max ? num : max;
    });

}

console.log(findLargest([4, 7, 1, 12, 3]));

//Remove duplicates
function removeDuplicates(arr) {

    return [...new Set(arr)];

}

console.log(removeDuplicates([1,2,2,3,4,4,5]));

function removeDuplicates(arr) {

    return arr.filter((value, index) => {
        return arr.indexOf(value) === index;
    });

}

console.log(removeDuplicates([1,2,2,3,4,4,5]));

//Palindrome Checker
function isPalindrome(str) {

    let cleaned = str
        .toLowerCase()
        .replace(/\s/g, "");

    let reversed = cleaned.split("").reverse().join("");

    return cleaned === reversed;
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("A man a plan a canal Panama"));