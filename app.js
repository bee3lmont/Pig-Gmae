/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var Scores , Round_Score , Active_Player , Game_Playing;

init();
   
document.querySelector('.btn-roll').addEventListener('click' , function(){
    if (Game_Playing){//1. Random Number
    var Dice = Math.floor(Math.random() * 6) + 1;
    
    //Display
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + Dice + '.png';

    //Update The Round Score Only If The Rolled number was not a 1
    if (Dice !== 1){
        //Add Score
        Round_Score += Dice;
        document.querySelector('#current-' + Active_Player).textContent = Round_Score;
    }else{
        // NEXT PLAYER
        Next_player();
        }}
        
    }  
);

document.querySelector('.btn-hold').addEventListener('click' , function(){
   if(Game_Playing){
          // Add CURRENT SCORE TO GLOBAL SCORE
    Scores[Active_Player] += Round_Score;
    
    // Update the UI
    document.querySelector('#score-' + Active_Player).textContent = Scores[Active_Player];
    
    // CHECK IF PLAYER WON THE GAME
    if (Scores[Active_Player] >=100){
        document.querySelector('#name-' + Active_Player).textContent = 'Winner';
        document.querySelector('.dice').style.display ='none';
        document.querySelector('.player-' + Active_Player + '-panel').classList.add('winner');
        document.querySelector('.player-' + Active_Player + '-panel').classList.remove('active');
        Game_Playing = false ;
        
    }else{Next_player();}
   }
    
   
   }
    
  );

function Next_player(){
    Active_Player === 0 ? Active_Player = 1 : Active_Player = 0;
        Round_Score = 0;
        
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
        document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click' , init);

function init(){
Scores = [0,0];
Round_Score = 0;
Active_Player = 0;
Game_Playing = true;
document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.getElementById('name-0').textContent = 'Player 1';
document.getElementById('name-1').textContent = 'Player 2';
document.querySelector('.player-0-panel').classList.remove('winner'); 
document.querySelector('.player-1-panel').classList.remove('winner'); 
document.querySelector('.player-0-panel').classList.remove('avtive');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('avtive');

}

//document.querySelector('#current-' + Active_Player).textContent = Dice; 
//document.querySelector('#current-' + Active_Player).innerHTML = '<em>' + Dice +'</em>';





































