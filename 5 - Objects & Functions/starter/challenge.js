function Quiz (question, answer, correct) {
    this.question = question;
    this.answer = answer;
    this.correct = correct;
}

Quiz.prototype.displayQuestion = function() {
    console.log(this.question);

    for (var i = 0; i < this.answer.length; i++) {
        console.log(i + ' : ' + this.answer[i]);
    }
}

Quiz.prototype.checkAnswer = function(ans, callbackkeepScore) {
    var sc;
    
    if (ans == this.correct) {
        console.log('Correct Answer')
        sc = callbackkeepScore(true);
    } else {
        console.log('Incorrect answer');
        sc = callbackkeepScore(false);
    }
    this.displayScore(sc);
}

Quiz.prototype.displayScore = function(score) {
    console.log('Your current score is: ' + score);
    console.log('----------------------------');
}


var q1 = new Quiz('Is Javascript the best programming language?', ['yes', 'no'], 0);
var q2 = new Quiz('what is 2 + 2?', [3, 6, 4], 2);

var questions = [q1, q2];

function score() {
        var sc = 0;

        return function(correct) {
            if(correct) {
            sc++;
        }
        return sc;
    }
}

var keepScore = score();

function nextQuestion () {
    var n = Math.floor(Math.random() * questions.length);
    questions[n].displayQuestion();
    var answer = (prompt('What is the correct answer?'));

    if (answer != 'exit') {
        questions[n].checkAnswer(parseInt(answer), keepScore);
        nextQuestion();
    }
}

nextQuestion();





























