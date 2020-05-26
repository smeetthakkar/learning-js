/*
// console.log("Hello World!");

// 9. Vairable Mutation and Type Coercion

var firstName = "John";
var age = 28;

//Type Coercion examples
console.log(firstName + ' ' + age)

//Declaring multiple variables on same line and assign them values later
var job, isMarried;
job = 'teacher'
isMarried = false;

//type coercion with booleans. Boolean value outputted as string
console.log(firstName + ' is a ' + job + '. He is ' + age + ' years old.' + ' IsMarried: ' + isMarried);

// Vairable Mutation. Once defined you can re-assign value without var
age = 'twenty-eight';

var lastName = prompt('What is his last name?');
alert('Hello ' + firstName + ' ' + lastName);

*/

/**************************************
********* 10. Basic Operators *********
**************************************/

/*
var currentYear, yearJohn, yearMark;
currentYear = 2020;
yearJohn = currentYear - 28;
yearMark = currentYear - 34;

console.log(yearJohn);
console.log(yearMark);
console.log(currentYear * 2);
console.log(currentYear / 2);
console.log(currentYear + 2);

//Logical Operators
var ageJohn, ageMark;


// Multiple assigments, Operator Precedence:
x = y = (2+3) * 10 / 10; // 5 * 10 / 10 - multiplication & division take same precendence

z = 10 * 10 / 2; // right to left

console.log(x);
console.log(z);

//More Opertators

x++; // 5 = 5 + 1.
console.log(x); //6

x *= 10; // x = x * 10.
console.log(x); //60

*/

/**************************************
**** 13. Coding Challenge Solution ****
**************************************/

/*

var massJohn, massMark, heightJohn, heightMark, bmiMark, bmiJohn;

massJohn = 60;
massMark = 45;

heightJohn = 1.75;
heightMark = 1.35;


bmiMark = massMark / (heightMark * heightMark);
bmiJohn = massJohn / (heightJohn * heightJohn);

console.log (bmiJohn);
console.log (bmiMark);

var bmiComp = bmiMark > bmiJohn;
console.log("Is Mark's BMI greater than John's BMI?: " + bmiComp);
*/

/**************************************
**** 14. If Else Statements ***********
**************************************/

//Control Structures. Execute certain parts of code/the entire code

/* Syntax:
if (logical condition === true/false) {
    code block/instructions;
} else {
    instruction
}
*/

//Coding challenge with if/else statements

/* var massJohn, massMark, heightJohn, heightMark, bmiMark, bmiJohn;

massJohn = 60;
massMark = 45;

heightJohn = 1.75;
heightMark = 1.35;


bmiMark = massMark / (heightMark * heightMark);
bmiJohn = massJohn / (heightJohn * heightJohn);

if (bmiJohn > bmiMark) {
    console.log ('John\'s BMI is greater than Mark');
} else {
    console.log ('Mark\'s BMI is great than John');
}
*/


/**************************************
******** 15. Boolean Logic ***********
**************************************/

/*

var age, firstName;
age = 20;
firstName = 'Sam';

if (age < 13) {
    console.log (firstName + ' is a boy');
} else if (age >= 13 && age < 20) {
    console.log (firstName + ' is a teen');
} else if (age >= 20 && age <30) {
    console.log (firstName + ' is a young.');
} else {
    console.log (firstName + ' is a man');
}

*/

/**************************************
16. Ternary Operator, Switch Statements
**************************************/

//condition ? if : else - ternary operator
/*
var firstName = 'Rob';
var age = 27;

var drink = age >= 24 ? ' drinks beer' : ' drinks milk';
console.log(firstName + drink);

Switch statements Syntax:

switch (condition/var) {
    case 1:
        code block;
        break;
    case 2:
    case 3:
        code block;
        break;
    default:
        code block;
}

switch (true) {
    case age < 13:
        console.log (firstName + ' is a boy');
        break;
    case age >= 13 && age < 20:
        console.log (firstName + ' is a teen');
        break;
    case age >= 20 && age <30:
        console.log (firstName + ' is young.');
        break;
    default:
        console.log (firstName + ' is a man');
}

*/

/********************************************
17. Truthy & Falsy Values, Equality Operators
*********************************************/

/*
Falsy = undefined, null, NaN, 0, ''
If evanluated in if/else condition the above will come as false

truthy = all values that are not falsy

Stricty quality comparison '==='
type coercion quality operators '=='
*/


/* Examples:

var height;
console.log (height); //undefined



height = ''; //not defined


height = 0; //not defined

if (height) {
    console.log('Variable is defined.')
} else {
    console.log('Variable is not defined.')
}

*/

/* Equality Operators

var age = 23;

if (age == '23') {
    console.log('the == operator does type coercion');
}



var age = 23;

if (age === '23') {
    console.log('the == operator does type coercion');
} else {
    console.log('strict equality operator;'); //true
}

*/


/**************************************
******** 18. Coding Challenge *********
**************************************/

/*
var avgTeamJohn, avgTeamMike, avgTeamMary;

avgTeamJohn = (100+160+133) / 3;
avgTeamMike = (116+124+153) / 3;
avgTeamMary = (97+134+105) / 3;

console.log(avgTeamJohn, avgTeamMike, avgTeamMary);

if (avgTeamJohn > avgTeamMary && avgTeamJohn > avgTeamMike) {
    console.log ('John\'s team wins. Score: ' + avgTeamJohn);
} else if (avgTeamMike > avgTeamJohn && avgTeamMike > avgTeamMary) {
    console.log ('Mike\'s team wins. Score: ' + avgTeamMike);
} else if (avgTeamJohn === avgTeamMike || avgTeamJohn === avgTeamMary || avgTeamMike === avgTeamMary) {
    console.log ('It\'s a draw');
} else {
    console.log ('Mary\'s team wins. Scire: ' + avgTeamMary);
}
*/

/**************************************
******** 19. Functions ***************
**************************************/

/*
function function_name (argument - can be none, single, multiple) {
    function block;
}
*/

/*
function caclulateAge(birthYear) {
    return 2020 - birthYear;
}

var ageJohn = caclulateAge(1993);
console.log(ageJohn);

function retirement(year, fName) {
    var age = caclulateAge(year);
    var retirement = 65 - age;

    if (retirement < 0) {
        console.log (fName + ' has already retired');
    } else {
        console.log (fName + ' will retire in ' + retirement + ' years.');
    }
}

retirement(1995, 'Rambo');
retirement(1950, 'Jane');
retirement(1994, 'Gemini');
*/


/****************************************
20. Functions statements and Expressions
****************************************/

/*

syntax var x = function (arguments); - Expression
when JS expects a value it's an expression

Statements perform actions. They don't product immediate value. if/else, while.
*/

/****************************************
21. Arays
****************************************/

//Collection of variables with different data types

/*
var names = ['John', 'Mike', 'Sam', 'Jane', 'Jill'];
var years = new Array (1990, 1969, 1948, 1995);

console.log(years[0]);
console.log(names[3]);

console.log(names.length);

names[1] = 'Ben'; //Mutate
names[names.length] = 'Nat';
names[8] = 'Mark';

console.log(names);
*/

/* Different data types all in one variable

var john = [1995, 'Student', false, 'John'];

//Methods
john.push('blue'); //add an element to the end of an Array
john.unshift('Mr'); //adds an element start of the arary

john.pop(); //removes the last element
john.shift(); //removes the first element
console.log(john);

console.log(john.indexOf(false));
console.log(john.indexOf(23)); //if not in array, returns -1
*/


/****************************************
23. Coding Challenge - Solution
****************************************/


/*
var bills = [124, 48, 300];

function tipCalculator(bill) {
    var percentage;

    if (bill < 50) {
        percentage = 0.2;
    } else if (bill >= 50 && bill < 200) {
        percentage = 0.15;
    } else {
        percentage = 0.1;
    }
    return bill * percentage;
}

var tips = [tipCalculator(bills[0]), tipCalculator(bills[1]), tipCalculator(bills[2])];

var finalAmt = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];
*/

/****************************************
23. Objects & Properties
****************************************/

//Creating Object literal {}

/*
var john = {
    fName: 'John',
    lName: 'Wick',
    birthYear: 1993,
    family: ['Jane', 'Mark', 'Bob', 'Doggo'],
    job: 'Student',
    isMarried: false
}
*/

//console.log(john);

//Dot Notation
//console.log(john.fName);

// Brackets
//console.log(john['job']);

// Storing/Re-assigning using it in a variable

// var x = 'birthYear';
// console.log(john[x]);

//Mutate Objects
// john.job = 'developer';


//

/* New Object Syntax
var jane = new Object();
jane.fName = 'Jane';
jane.lName = 'Hammer';

console.log(jane);
*/

/****************************************
26. Objects & Methods
****************************************/
/*
var jim = {
    fName: 'Jim',
    lName: 'Robbie',
    birthYear: 1989,
    calcAge: function() {
        this.age = 2020 - this.birthYear;
    }
}

jim.calcAge();
console.log(jim);
*/


/****************************************
28. Coding Challenge - Solution
****************************************/

/*

var john = {
    fullName: 'John Wick',
    mass: 65,
    height: 1.65,
    calcBmi: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

var mark = {
    fullName: 'Mark Manson',
    mass: 90,
    height: 1.85,
    calcBmi: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

//below 2 lines can be added directly to the conditional statement (control structures)

john.calcBmi();
mark.calcBmi();

if (john.bmi > mark.bmi) {
    console.log('John\'s bmi is ' + john.bmi + ' greater than mark\'s bmi which is ' + mark.bmi);
} else if (mark.bmi > john.bmi) {
    console.log('Mark\'s bmi is ' + mark.bmi + ' greater than john\'s bmi which is ' + john.bmi);
} else {
    console.log('they have the same bmi\'s');
}

*/


/********************************************
29. Loops & Iterations - Control Structures
********************************************/

/*

for (initial value of the counter; condition to be evaluated before next loop; action/counter is updated) {
    code block
}

// i = 0, 0 < 10, true, log i to the console, i++
// i = 1, 1 < 10, true  log i to the console, i++
.....
// i = 10, 1 < 10, false,  exit the loop



for (i = 0; i < 10; i++) {
    console.log(i);
}


var john = [1995, 'Student', false, 'John'];

for (i=0; i < john.length; i++) {
    console.log(john[i]);
}

//above executed using while loop

// var i = 0;

// while(i < john.length) {
//     console.log(john[i]);
//     i++;
// }

*/

/* Continue, Break Statements

var john = [1995, 'Student', false, 'John'];

for (i = 0; i < john.length; i++) {
    if  (typeof john[i] === 'string') continue; //1995, false
    console.log(john[i]);
}

for (i = 0; i < john.length; i++) {
    if  (typeof john[i] === 'string') break; //1995
    console.log(john[i]);
}

*/

/*
for (var i = john.length - 1; i >= 0; i--) {
    console.log(john[i]);
}
*/


/********************************************
32.Coding Challenge 5 - Solution
********************************************/

/*
var tripJohn = {
    bills: [124, 48, 268, 180, 42],
    calcTips: function() {
        this.tips = [];
        this.finalValue = [];

        for (var i = 0; i < this.bills.length; i++) {
            var percentage;

            if (this.bills[i] < 50) {
                percentage = .2;
            } else if (this.bills[i] >= 50 && this.bills[i] < 200) {
                percentage = .15;
            } else {
                percentage = .1;
            }
            this.tips[i] = this.bills[i] * percentage;
            this.finalValue[i] = this.bills[i] + this.tips[i];
        }
    }
}

var tripMark = {
    bills: [77, 475, 110, 45],
    calcTips: function() {
        this.tips = [];
        this.finalValue = [];

        for (var i = 0; i < this.bills.length; i++) {
            var percentage;

            if (this.bills[i] < 100) {
                percentage = .2;
            } else if (this.bills[i] >= 100 && this.bills[i] < 300) {
                percentage = .1;
            } else {
                percentage = .25;
            }
            this.tips[i] = this.bills[i] * percentage;
            this.finalValue[i] = this.bills[i] + this.tips[i];
        }
    }
}

function calcTipAverage(tips) {
    var sum = 0;

    for (i = 0; i < tips.length; i++) {
        sum += tips[i];
    }
    return sum / tips.length;
}


tripJohn.calcTips();
tripMark.calcTips();
console.log(tripJohn, tripMark);

tripJohn.average = calcTipAverage(tripJohn.tips);
tripMark.average = calcTipAverage(tripMark.tips);


// function calcAvg (tips) {

// }

/*
bills = [155, 75, 120];

function calcAvg (bill) {

    var tips = [];
    var sum = 0;

    for (var i = 0; i < bill.length; i++) {
        var percentage;

        if (bills[i] < 50) {
            percentage = .2;
        } else if (bill[i] >= 50 && bill[i] < 200) {
            percentage = .15;
        } else {
            percentage = .1;
        }
        tips[i] = bill[i] * percentage;
        sum += tips[i];
    }

    return sum;
}

avgMark = calcAvg(bills);
console.log(avgMark);
*/


/********************************************
32.Execution Context
********************************************/

/*
var name = 'John';

function first() {
    var a = 'Hello';
    second();
    var x = a + name;
}

function second() {
    var b = 'hi';
    third();
    var z = b + name;
}

function third() {
    var c = 'Hey';
    var z = c + name;
}
*/


/********************************************
32.Execution Context
********************************************/

/*
let a = 'Hello World!';

function first() {
  console.log('Inside first function');
  second();
  console.log('Again inside first function');
}

function second() {
  console.log('Inside second function');
}

first();
console.log('Inside Global Execution Context');
*/

/*
console.log(cat);
var cat = 'tibbers';
console.log(cat);

function changeName() {
    cat = 'jam';
}

changeName();
console.log(cat);
*/

/* Execution Context
var name = ' Fury';

function first() {
    var a = 'Hello';
    second ();
    var x = a + name;
    return x;
}

function second() {
    var b = 'hi';
    third();
    var z = b + name;
    return z;
}

function third() {
    var c = 'Hey';
    var z = c + name;
    return z;
}

s = first();
j = second();
t = third();

console.log(s, j, t);
*/


var cat = 'tibbers';
console.log(cat);

function changeName() {
    cat = 'jam';
    console.log(cat);
}

changeName();
console.log(cat);

var age = 23;

function foo() {
    var age = 65;
    console.log(age);
}

foo();
console.log(age);
