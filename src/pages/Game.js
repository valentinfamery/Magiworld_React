import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
export default function Game() {

 
  const location = useLocation();

  let  player1 = location.state.player1;
  let player2 = location.state.player2;
 

    //Start(player1,player2)
    return <div className="container">
      
    <div className="column left-column">
      <text>{
         player1.getVie().toString() 
        }
     
      </text>
     
      <HealthBar maxHealth={100}/>
    </div>

    <div className="column right-column">
      <text>
        {
          player2.getVie().toString()
        }
      </text>
    <HealthBar maxHealth={100}/>
    </div>
     
  </div>;
  
}



function HealthBar({ maxHealth }) {
  const [health, setHealth] = useState(maxHealth);

  const decreaseHealth = (amount) => {
    setHealth(prevHealth => Math.max(prevHealth - amount, 0));
  };

  const increaseHealth = (amount) => {
    setHealth(prevHealth => Math.min(prevHealth + amount, maxHealth));
  };

  const healthPercentage = (health / maxHealth) * 100;

  return (
    <div style={{ border: '1px solid black', width: '200px', height: '30px' }}>
      <div
        style={{
          width: `${healthPercentage}%`,
          height: '100%',
          backgroundColor: 'green'
        }}
      />
      <button onClick={() => decreaseHealth(10)}>Decrease</button>
      <button onClick={() => increaseHealth(10)}>Increase</button>
    </div>
  );
}

function Start(player1,player2) {

  let turn = 1;

  while (player1.getVie() > 0 && player2.getVie() > 0) {
    if (turn % 2 === 1) {
      turnAction(player1, player2);
    } else {
      turnAction(player2, player1);
    }
    turn++;
  }

  if (player1.getVie() <= 0) {
    console.log("Player 1 has lost!");
  } else {
    console.log("Player 2 has lost!");
  }
}

function turnAction(attack, defend) {
  console.log(`Player ${attack.getPlayerNumber()} (${attack.getVie()} health) please choose your action (1: Basic Attack, 2: Special Attack)`);
  let choix ;

  if (choix === 1) {
    attack.attackBase(defend);
  } else {
    attack.attackSpecial(defend);
  }
}