/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

/*
New Game:
    1. Hide the dice image
    2. Reset global/current score to 0 for both players
    3. Player 1 needs to have active state
Roll Dice
    1. Get a random number between 1 and 6
    2. Update 'current' score of the active player
    3. Add the number to current score till it hits 1
    3. Show image with the correct dice number
Hold:
    1. Current score gets added to global score
    2. Hides image
    3. Next player
    4. if winner add add winner class
    5. Disable the hold and roll dice buttons
*/

/*
VS code shortcuts:

Copy Line Up/Down - alt + shift + uparr/dwarr;
*/


/*
YOUR 3 CHALLENGES
Change the game to follow these rules:
1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/


var scores, activePlayer, roundScore, gamePlaying, diceImg;

init();

var lastDice = [0,0];

//Rolls Dice
document.querySelector('.btn-roll').addEventListener('click', function(){
    if (gamePlaying) {
        //Get a random number between 1 and 6
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;
        var dice = [dice1, dice2];
        console.log(dice);

        //keep adding the number to the roundScore till the dice hits 1
        if (lastDice[0] === dice[0] && lastDice[1] === dice[1]) {
            scores[activePlayer] = 0;
            document.querySelector('#score-' + activePlayer).textContent = '0';
            nextPlayer();
        } else if (dice1 !== 1 && dice2 !== 1) {
            roundScore += dice1 + dice2;

            //Update current score with roundscore for activePlayer
            document.getElementById('current-' + activePlayer).textContent = roundScore;

            //Show the dice image
            document.getElementById('dice-1').style.display = 'block';
            document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';

            document.getElementById('dice-2').style.display = 'block';
            document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';

        } else {
                nextPlayer();
            }
        lastDice = [dice1, dice2];
        }
    });

//Hold

document.querySelector('.btn-hold').addEventListener('click', function(){
    if (gamePlaying) {
        //update global score with roundscore
        scores[activePlayer] += roundScore;
        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

        //if the score hits 20, declare a winner and stop the game

        var input = document.getElementById('winning-score').value;
        var winningScore;

        if (input) {
            winningScore = input;
        } else {
            winningScore = 50;
        }

        if (scores[activePlayer] >= winningScore) {
            document.getElementById('name-' + activePlayer).textContent = 'Winner';

            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

            gamePlaying = false;
        } else {
            nextPlayer();
        }
    }
});

function nextPlayer() {
        //switch active players
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;

        //current scores should be 0, hide the dice image, show activePlayer
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

        document.getElementById('dice-1').style.display = 'none';
        document.getElementById('dice-2').style.display = 'none';

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    //New Game
        scores = [0,0];
        activePlayer = 0;
        roundScore = 0;
        gamePlaying = true;

        diceImg = document.querySelectorAll('.dice');
        diceImg[0].style.display = 'none';
        diceImg[1].style.display = 'none';
        document.getElementById('score-0').textContent = '0';
        document.getElementById('score-1').textContent = '0';
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

        document.getElementById('name-0').textContent = 'Player 1';
        document.getElementById('name-1').textContent = 'Player 2';

        document.querySelector('.player-0-panel').classList.remove('winner');
        document.querySelector('.player-1-panel').classList.remove('winner');

        document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-1-panel').classList.remove('active');

        document.querySelector('.player-0-panel').classList.add('active');
}



/*
function twoSixes(arr, diceArr) {
        arr.push(dice);
        return arr[6,6] == diceArr[6,6];
    }
*/