/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/




var scores, roundScores, activePlayer, dice;

scores = [0,0];
roundScores = 0;
activePlayer = 0;

// Add Event listener for 'New Game' button.
document.querySelector('.btn-new').addEventListener('click', function () {
// Reset Initial values to 0
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

// Reset Dice to none i.e. do not show dice in the beginning.
    document.querySelector('.dice').style.display = 'none';
});

// Add event listener for 'Roll Dice' button.
document.querySelector('.btn-roll').addEventListener('click', function (){
    let dice = Math.floor(Math.random() * 6) + 1;
    let x = document.querySelector('.dice');
    x.style.display = 'block';
    x.src = `dice-${dice}.png`;
});




