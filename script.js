/********************
 * Variables and data types
 **************************/
/* var firstName = 'John';
console.log(firstName)

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job); 

*/

// Variable mutation and type coercion
/*
var firstName = 'John'
var age = 28;

// Type coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'Teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// Variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last Name?');
console.log(firstName + ' ' + lastName);
*/

/*********************
 * Basic Operators
 ********************/

/*
var year, yearJohn, yearMark;
now = 2019;
ageJohn = 28;
ageMark = 33;

// Math operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;


 console.log(yearJohn);
 console.log(now + 2);
 console.log(now * 2);
 console.log(now / 10);

 // Logical operators

var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// typeof operator

console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);

*/

/*******
 * Operator precedence
 */

/*
 var now = 2019;
 var yearJohn = 1989;
 var fullAge = 18;
 // Multiple operators
 var isFullAge = now - yearJohn >= fullAge; // true
 console.log(isFullAge);

 // Grouping
 var ageJohn = now - yearJohn;
 var ageMark = 35;
 var average = (ageJohn + ageMark) / 2;
 console.log(average);

 // Multiple  
 var x, y;
 x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
 console.log(x, y);

 // More operators

 x *= 2;
 console.log(x);
 x += 10;
 console.log(x);
x++;
console.log(x);
*/

/*****
 *  Coding Challange 1
 */

/*
 var markMass = 90; // kg
 var johnMass = 85; // kg
 var markHeight = 1.6; // meters
 var johnHeight = 1.45; // meters

 var markBmi = markMass / (markHeight * markHeight);
 var johnBmi = johnMass / (johnHeight * johnHeight);

 var higherBmi = markBmi > johnBmi;



 console.log("Is Mark's BMI higher than John's BMI? " + higherBmi)
 */

/***
 * If/Else statement
 */
/*
  var firstName = 'John';
  var civilStatus = 'single';

  var isMarried = true;
  if (isMarried) {
      console.log(firstName + ' is married!');
  } else {
      console.log(firstName + ' will hopefully marry soon :)');
  }


var markMass = 90; // kg
 var johnMass = 85; // kg
 var markHeight = 1.6; // meters
 var johnHeight = 1.45; // meters

 var markBmi = markMass / (markHeight * markHeight);
 var johnBmi = johnMass / (johnHeight * johnHeight);

 var higherBmi = markBmi > johnBmi;

if (markBmi > johnBmi) {
    console.log('Mark\'s BMI is higher than John\'s.');
} else {
    console.log("John\'s BMI is higher than Mark\'s.");
}

*/

/**
 * Boolean logic
 */

/*
 var firstName = 'John';
 var age = 20;

 if (age < 13) {
     console.log(firstName + ' is a boy');
 } else if (age >= 13 && age < 20) { // Between 13 and 20
     console.log(firstName + ' is a teenager.')
 } else if (age > 20 && age < 30) {
     console.log(firstName + ' is a young man.')
 }else {
     console.log(firstName + ' is a man');
 }
 */

/*************
 *  The Ternary operator and Switch statements
 */

/*  var firstName = 'John';
  var age = 22;


  // Ternary operator
  age >= 18 ? console.log(firstName + ' drinks beer.')
  : console.log(firstName + ' drinks juice.');

  var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);
 */
/* if (age >= 18) {
    var drink = 'beer';
} else {
    var drink = 'juice';
} */

// Switch statement

/* var job = 'instructor';
switch(job) {
    case 'teacher':
    case 'instructor':    
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon.');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites.');
        break;
    default:
        console.log(firstName + ' does something else.')            
        
}

age = 31
switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age > 20 && age < 30:
        console.log(firstName + ' is a young man.');
        break; 
    default:
        console.log(firstName + ' is a man.')        
} */

/**
 * Truthy and Falsy values and equality operators
 */

/* var height;

height = "23";

if (height || height === 0) {
  console.log("The variable is defined");
} else {
  console.log("Variable has NOT been defined");
}

// Equality Operators
if (height == "23") {
  console.log("The == operator does type coercion!");
}
 */

/******
 *  Coding Challange 2
 */

/* var johnAverage = (89 + 120 + 103) / 3;
console.log(johnAverage);

var mikeAverage = (116 + 94 + 123) / 3;
console.log(mikeAverage);

var maryAverage = (97 + 134 + 105) / 3;
console.log("Mary's average is " + maryAverage);

if (johnAverage > mikeAverage && johnAverage > maryAverage) {
  console.log(
    "John's team is the winner with an average score of " + johnAverage
  );
} else if (mikeAverage > johnAverage && mikeAverage > maryAverage) {
  console.log(
    "Mike's team is the winner with an average score of " + mikeAverage
  );
} else if (maryAverage > johnAverage && maryAverage > mikeAverage) {
  console.log("Mary is the winner with an average score of " + maryAverage);
} else {
  console.log("It's a draw");
} */

/******************
 *  Functions
 */

/* function calculateAge(birthYear) {
  return 2019 - birthYear;
}

var ageJohn = calculateAge(1988);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);

console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement(year, firstName) {
  var age = calculateAge(year);
  var retirement = 67 - age;
  if (retirement > 0) {
    console.log(firstName + " retires in " + retirement + " years.");
  } else {
    console.log(firstName + " is already retired.");
  }
}

yearsUntilRetirement(1990, "John");
yearsUntilRetirement(1988, "Matt");
yearsUntilRetirement(1969, "Jane");
yearsUntilRetirement(1948, "Mike"); */

/*****************
 *  Function Statements and Expressions
 */

// Function declaration
//  function whatDoYouDo(job, firstName) {}

// Function Expression

/* var whatDoYouDo = function(job, firstName) {
  switch (job) {
    case "teacher":
      return firstName + " teaches kids how to code";
    case "driver":
      return firstName + " drivers a cab in Lisbon";
    case "designer":
      return firstName + " designs beautiful websites";
    default:
      return firstName + " does something else";
  }
};

console.log(whatDoYouDo("teacher", "John"));
console.log(whatDoYouDo("designer", "Jane"));
console.log(whatDoYouDo("retired", "Mark")); */

/***********
 *  Arrays
 */

// Initialize new Array
/* var names = ["John", "Mark", "Jane"];
var years = new Array(1990, 1969, 1948);
console.log(names[1]);
console.log(names);
console.log(names.length);

// Mutate array data
names[1] = "Ben";
names[5] = "Mary";
console.log(names);

// Different data types

var john = ["John", "Smith", 1990, "designer", false];

john.push("blue");
john.unshift("Mr.");
console.log(john);
console.log(typeof john);

john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(23));

var isDesigner =
  john.indexOf("designer") === -1
    ? "John is Not a designer"
    : "John IS a designer";

console.log(isDesigner); */

/****************
 *
 * Coding Challange 3
 *
 */

/* function tipCalculator(bill) {
  var percentage;
  if (bill < 50) {
    percentage = 0.2;
  } else if (bill >= 50 && bill < 200) {
    percentage = 0.15;
  } else {
    percentage = 0.1;
  }
  return percentage * bill;
}

var bills = [124, 48, 268];
var tips = [
  tipCalculator(bills[0]),
  tipCalculator(bills[1]),
  tipCalculator(bills[2])
];

var finalValues = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(tips, finalValues); */

/***********************
 *  Objects and Properties
 */

// Object literal
/* var john = {
  firstName: "John",
  lastName: "Smith",
  birthYear: 1990,
  family: ["Jane", "Mark", "Bob", "Emily"],
  job: "teacher",
  isMarried: false
};

console.log(john.firstName);
console.log(john["lastName"]);
var x = "birthYear";
console.log(john[x]);

john.job = "designer";
john["isMarried"] = true;
console.log(john);

// new Object syntax
var jane = new Object();
jane.firstName = "Jane";
jane.birthYear = 1969;
jane["lastName"] = "Smith";
console.log(jane); */

/*********
 * Objects and Methods
 */

/* var john = {
  firstName: "John",
  lastName: "Smith",
  birthYear: 1992,
  family: ["Jane", "Mark", "Bob", "Emily"],
  job: "teacher",
  isMarried: false,
  calcAge: function() {
    this.age = 2019 - this.birthYear;
  }
};

john.calcAge();
console.log(john); */
