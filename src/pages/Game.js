import React, { useState,useEffect} from 'react';
import { useLocation } from 'react-router-dom';
export default function Game() {

 
  const location = useLocation();

  let player1 = location.state.player1;
  let player2 = location.state.player2;

  const [viePlayer1,setViePlayer1] = useState(player1.getVie());
  const [viePlayer2,setViePlayer2] = useState(player2.getVie());


  
  

  const clickAttackBase = (attack,defend) => {
    return () => {
    attack.attackBase(defend);
   updatevie()
    };
    
  }

  const clickAttackSpecial = (attack,defend) => {
    return () => {
      attack.attackSpecial(defend);
      updatevie()
    };
    
   
  }


  

   const updatevie = () => {

    setViePlayer1(player1.getVie());
    setViePlayer2(player2.getVie());

      
  }

 
  

  
  

  


 

    //Start(player1,player2)
    return <div className="container">
      
    <div className="column left-column">
      <text>{
         viePlayer1.toString() 
        }
     
      </text>
     
      <HealthBar maxHealth={viePlayer1}/>


      <div className="row">
      <button  
                onClick={
                  clickAttackBase(player1,player2)
                }
        >
          attackBase
        </button>
        <button  
                onClick={clickAttackSpecial(player1,player2)}
        >
          attackSpecial
        </button>

      </div>

    </div>

    <div className="column right-column">
      <text>
        {
          viePlayer2.toString()
        }
      </text>
    <HealthBar maxHealth={viePlayer2}/>

    <div className="row">
      <button  
                onClick={clickAttackBase(player2,player1)}
        >
          attackBase
        </button>
        <button  
                onClick={clickAttackSpecial(player2,player1)}
        >
          attackSpecial
        </button>

      </div>

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
      //turnAction(player1, player2);
    } else {
      //turnAction(player2, player1);
    }
    turn++;
  }

  if (player1.getVie() <= 0) {
    console.log("Player 1 has lost!");
  } else {
    console.log("Player 2 has lost!");
  }
}

