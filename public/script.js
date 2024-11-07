


// ** Grabs elements from the DOM and stores them into variables **
let playButton = document.getElementById('play');
let resultDiv = document.getElementById('result');
let p1NameDiv = document.getElementById('p1Name');
let p2NameDiv = document.getElementById('p2Name');
let p1HealthDiv = document.getElementById('p1Health');

let p2HealthDiv = document.getElementById('p2Health');

//sounds
let sp1attack = document.getElementById('p1attack');
let sp1heal = document.getElementById('p1heal');
let sp2attack = document.getElementById('p2attack');
let sp2heal = document.getElementById('p2heal');
let svictory = document.getElementById('victory');

// ** Check if either players health is  0 and if it is, then update isOver to true **
const updateGame = (p1,p2,gameState) => {
  // Update the DOM with the names and the latest health of players

  
  p1NameDiv.innerHTML = p1.name;
  p2NameDiv.innerHTML = p2.name;

  p2Health.innerHTML = p2.health;
  p1Health.innerHTML = p1.health;



  // Condition IF either player health is <= 0 then set isOver to true and declareWinner
  if (p1.health <= 0 || p2.health <= 0)
  {
    gameState = true;
    resultDiv.innerHTML = game.declareWinner(p1, p2);
  }

}



//objects 

class Player {
  constructor(name, health, attackDamage) {
    this.name = name;
    this.health = health;
    this.attackDmg = attackDamage;
  }

  strike (player, enemy, attackDmg) {

    attackDmg = Math.floor(Math.random() * 10) + 1;
    enemy.health -= attackDmg;
    updateGame(p1, p2, gameState);
    return `${player.name} attacks ${enemy.name} for ${attackDmg} Damage`;
  }

  heal (player) {

    let healVal = Math.floor(Math.random() * 5) + 1;
    player.health += healVal;
    updateGame(p1, p2, gameState);
    return `${player.name} heals for ${healVal}`;

  }
}

class Game {
  constructor() {
    this.isOver = false;
  }

  declareWinner(p1, p2) {
    gameState = true;

    let resultMsg = '';

    if (p1.health <= 0)
    {
      resultMsg = `${p2.name} WINS`;

    }

    else
    {
      resultMsg = `${p1.name} WINS`

    }
    svictory.play();
    return resultMsg;

  }

  reset(p1,p2) {
    p1.health = 100;
    p2.health = 100;
    resultDiv.innerHTML = '';
    gameState = false;
    updateGame(p1, p2, gameState);


  }
// random attacks {computer button} 
  play(p1, p2) {
// for simulate
    while(!(p1.health <= 0 || p2.health <= 0))
    {
    

      var hello = [

        p1.strike(p1, p2, p1.attackDmg), 
          p2.strike(p2, p1, p2.attackDmg), 
          p1.heal(p1), 
          p1.heal(p2)
  
      ]

      var randomNumber = Math.floor(Math.random()*hello.length);
    }

  }

}


let player1 = new Player("scott", 100, 0);
let player2 = new Player("rohit", 100, 0);

let p1 = player1;
let p2 = player2;

let game = new Game();
let gameState = game.isOver;
updateGame(p1, p2, gameState);


document.addEventListener('keydown', function(e) {

    if (!gameState == true)
    {
    

    if (e.key == 'q')
    {
      sp1attack.play();
      p1.strike(p1, p2, p1.attackDmg);
    }

    else if (e.key == 'p')
    {
      sp2attack.play();
      p2.strike(p2, p1, p2.attackDmg);
    }

    else if (e.key == 'a')
    {
      sp1heal.play();
      p1.heal(p1);
    }

    else if (e.key == 'l')
    {
      sp2heal.play();
      p1.heal(p2);
    }

  }


});

playButton.addEventListener('click',  event => {
  
game.play(p1, p2);

});




