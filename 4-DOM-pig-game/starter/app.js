/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


var scores, roundScores, activePlayer, winningNumber;

winningNumber = 20;

function init() {
    roundScores = 0;
    activePlayer = 0;
    scores = [0, 0];

    // Reset Initial values to 0
    document.getElementById('score-0').textContent = '0';
    document.getElementById('current-0').textContent = '0';

    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    // Reset Dice to none i.e. do not show dice in the beginning.
    document.querySelector('.dice').style.display = 'none';

    // NO Winner
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    // Active player
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

    // Player details
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
}

function resetRounderScoreAndActivePlayer() {
    roundScores = 0;
    document.querySelector('#current-' + activePlayer).textContent = roundScores;

    // Change the active user.
    document.querySelector('.player-'+ activePlayer +'-panel').classList.toggle('active');
    (activePlayer === 0) ? activePlayer = 1 : activePlayer = 0;
    document.querySelector('.player-'+ activePlayer +'-panel').classList.toggle('active');
}

// Reset game on Page load.
init();

// Add Event listener for 'New Game' button. Reset values on click.
document.querySelector('.btn-new').addEventListener('click', init);

// Add event listener for 'Roll Dice' button.
document.querySelector('.btn-roll').addEventListener('click', function () {
    // 1. Random number
    let dice = Math.floor(Math.random() * 6) + 1;
    console.log(dice);

    // 2. Display the dice
    let x = document.querySelector('.dice');
    x.style.display = 'block';
    x.src = `dice-${dice}.png`;

    // 3. Add numbers in the current box until Dice rolls to 1
    if(dice === 1){
        resetRounderScoreAndActivePlayer();
    }else{
        roundScores += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScores;
    }

    // 4. Reset to beginning when winner is declared.
    if(scores[activePlayer] >= winningNumber){
        init();
    }

});

// Add event Listener for 'Hold' button
document.querySelector('.btn-hold').addEventListener('click', function () {
    if(document.querySelector('#name-' + activePlayer).textContent === 'Winner!'){
        init();
    }else{
        // Added rounded score to Scores array w.r.t activePlayer.
        scores[activePlayer] += roundScores;
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        // Calculate for first one to reach 100 points.
        if(scores[activePlayer] >= winningNumber){
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        }else{
            // Reset rounded score to 0.
            resetRounderScoreAndActivePlayer();
        }
    }
})