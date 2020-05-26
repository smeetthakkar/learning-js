/*---------------------------------------------------
Random - Recursive Function
---------------------------------------------------

function fact(x) {
    if (x == 1) {
        return 1;
    } else {
        return x * fact(x-1);
    }
}

console.log(fact(3));
*/

/* ---------------------------------------------------
Passing Functions as arguments - First Class Functions
---------------------------------------------------

Execution Context Piling Up - nested call stacks
return 3 * fact(3-1); // 3 * 2
    return 2 * fact(2 - 1); // 2 * 1 = 2 ^^
        return 1; //base case ^^

Popping off the Execution Stack:
    return 3 * 2 * 1;
*/

/* Decipher to read the code
calcArr accepts 2 args - an array and fn
when function calcArr is invoked:
Code Block:
    an empty array 'result' is initialised;
    for loop initialiser is set to 0 and the condition check is set to array lenght.
    First Iteration:
        arr[i] or as per the initialiser arr[0] is passed to function arg. In the first scenario, it's caclulateAge.
        arr[0] = 1993; calculateAge(1993) returns 27;
        this is then pushed into the empty results array. results.push(27);
        Now:
            result = [27];
    Following Iterations function in a similar way translating to the below:
        result = [27, 2020 - arr[1]/1995, 2020 - arr[arr.length - 1]/2017]
*/

/*
var years = [1993, 1995, 2000, 2005, 2017];

function calcArr (arr, fn) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        result.push(fn(arr[i]));
    }
    return result;
}


function calculateAge(el) {
    return 2020 - el;
}

function fullAge (el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if (el >= 18 && el < 81) {
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }
}

var ages = calcArr(years, calculateAge);
console.log(ages);

var fullAge = calcArr(ages, fullAge);
console.log(fullAge);

var rates = calcArr(ages, maxHeartRate);
console.log(rates);
*/




/* ---------------------------------------------------
66. Functions returning functions
---------------------------------------------------

function interviewQuestion(title) {
    if (title === 'designer') {
        return function(name) {
            console.log (name + ' ,what is UX design?');
        }
    } else if (title === 'teacher') {
        return function(name) {
            console.log(name + ' ,what subject do you teach?');
        }
    } else {
        return function(name) {
            console.log(name + ' ,what do you do?');
        }
    }
}


var jane = interviewQuestion('designer');
jane('Jane');

interviewQuestion('teacher')('Josh');
interviewQuestion('')('Sam');

*/

/* ----------------------------------------------------
67. Immediately Invoked Functions Expressions
-------------------------------------------------------

//IIFE without a param
(function () {
    var score =  Math.floor(Math.random() * 10);
    console.log(score)
    console.log((score <= 5));
})();

//IIFE with a param
(function (goodLuck) {
    var score =  Math.floor(Math.random() * 10);
    console.log(score)
    console.log((score >= 5 - goodLuck));
})(5);
*/

/* ----------------------------------------------------
68. Closures
-------------------------------------------------------

function interviewQuestion(title) {
    var teacher = ' , what subjects do you teach?'
    var designer = ' , what is UX design?'
    if (title == 'teacher') {
        return function(name) {
            console.log(name + teacher);
        }
    } else if (title == 'designer') {
        return function(name) {
            console.log(name + designer);
        }
    }
}

var teach = interviewQuestion('teacher');
teach('Jane');

interviewQuestion('designer')('Rob');


function retirement(retirementAge) {
    var a = ' years till retirement';

    return function(yearOfBirth) {
        var age = 2020 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(65);
retirementUS(1990);

var retirementGermany = retirement(67)(1993);
*/

/* ----------------------------------------------------
69. Bind, Call & Apply
-------------------------------------------------------

var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, time) {
        if (style == 'formal') {
            console.log('Good ' + time + ' ladies & gentlemen. I am ' + this.name + ', a ' + this.job + ' and ' + this.age + ' years old.');
        } else if(style == 'friendly') {
            console.log('Hi, whats up. Good ' + time + ' ladies & gentlemen. I am a ' + this.name + ' , a' + this.job + ' and ' + this.age + ' years old.');
        } 
    }
 }

john.presentation('formal', 'morning');

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
}

// object.property.call(this, args if a func)

var johnFriendlyVersion = john.presentation.bind(john, 'friendly');
console.log(johnFriendlyVersion); //returns func o/p since args not provided
johnFriendlyVersion('morning'); //console.logs the output

var emilyFormalVersion = john.presentation.bind(emily, 'formal');
console.log(emilyFormalVersion);
emilyFormalVersion('evening');

/*
var years = [1993, 1995, 2000, 2005, 2017];

function calcArr (arr, fn) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        result.push(fn(arr[i]));
    }
    return result;
}


function calculateAge(el) {
    return 2020 - el;
}

function fullAge (limit, el) {
    return el >= limit;
}

var ages = calcArr(years, calculateAge);
console.log(ages);

//fullAge func takes 2 args. Binding one since calcArr fn accepts only 1 argument.
var fullJapan = calcArr(ages, fullAge.bind(this, 20));
console.log(fullJapan);

*/

/*
--- Let's build a fun quiz game in the console! ---
1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor
3. Store them all inside an array
4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).
5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.
6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).
7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/

/*
--- Expert level ---
8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)
9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.
10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).
11. Display the score in the console. Use yet another method for this.
*/









/* ----------------------------------------------------
70. Coding Challenge 7
-------------------------------------------------------*/

/*
--- Let's build a fun quiz game in the console! ---
1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/


/*
1. Build a function constructor called Question to describe a question.
*/

function Quiz (question, answer, correct) {
    this.question = question;
    this.answer = answer;
    this.correct = correct;
}

Quiz.prototype.askQuestion = function () {
    console.log(this.question);

    for (var i = 0; i < this.answer.length; i++) {
        console.log(i + ': ' + this.answer[i]);
    }
}

Quiz.prototype.checkAnswer = function(ans, callback) {
    var sc;

    if (ans === this.correct) {
        console.log('Correct Answer');
        sc = callback(true);
    } else {
        console.log('Incorrect Answer');
        sc = callback(false);
    }
    this.displayScore(sc);
}

var questions = [q1, q2];

function score(sc) {
    var sc = 0;

    return function(correct) {
        if (correct) {
            sc++;
        }
        return sc;
    }
}

var keepScore = score();

function nextQuestion () {
    var n = Math.floor(Math.random() * questions.length);
    questions[n].askQuestion();
    var answer = (prompt('Please choose the correct answer: '));

    if (answer != 'exit') {
        questions[n].checkAnswer(parseInt(answer), keepScore);
        nextQuestion();
    }
}

nextQuestion();

/*
2. Create a couple of questions using the constructor
2.1 question itself
2.2 the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
2.3 correct answer (I would use a number for this)

Notes for self:
a. create instances to hold questions using the constructor
*/


/*
3. Store them all inside an array
*/


/*
4. Select one random question and log it on the console,
together with the possible answers (each question should have a number)
(Hint: write a method for the Question objects for this task).
*/

/*
5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.
6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).
*/

/*
(function() {
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }
    Question.prototype.displayQuestion = function() {
        console.log(this.question);
        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }
    Question.prototype.checkAnswer = function(ans, callback) {
        var sc;

        if (ans === this.correct) {
            console.log('Correct answer!');
            sc = callback(true);
        } else {
            console.log('Wrong answer. Try again :)');
            sc = callback(false);
        }

        this.displayScore(sc);
    }
    
    Question.prototype.displayScore = function(score) {
        console.log('Your current score is: ' + score);
        console.log('------------------------------');
    }

    function score() {
        var sc = 0;
        return function(correct) {
            if (correct) {
                sc++;
            }
            return sc;
        }
    }
    var keepScore = score();

    function nextQuestion() {
        var n = Math.floor(Math.random() * questions.length);
        questions[n].displayQuestion();
        var answer = prompt('Please select the correct answer.');
        if(answer !== 'exit') {
            questions[n].checkAnswer(parseInt(answer), keepScore);

            nextQuestion();
        }
    }

    nextQuestion();

})();
*/





