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
