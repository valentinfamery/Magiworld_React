import React, { useState,useEffect} from 'react';
import { useLocation } from 'react-router-dom';
export default function Game() {

  const location = useLocation();

  let player1 = location.state.player1;
  let player2 = location.state.player2;

  const initViePlayer1 = player1.getVie();
  const initViePlayer2 = player2.getVie();

  const [viePlayer1,setViePlayer1] = useState(player1.getVie());
  const [viePlayer2,setViePlayer2] = useState(player2.getVie());

  const State = {
    Inactif: 'Inactif',
    Demarré: 'Demarré',
    Arrêt: 'Arrêt',
  };

  const [stateOfGame,setStateOfGame] = useState(State.Inactif);

  let [turn,setTurn] = useState(1);
  
  const [events, setItems] = useState([]);

  const addItem = (newItem) => {
    setItems([...events, newItem]);
  };

  const clickAttackBase = (attack,defend) => {
    return () => {
      if (stateOfGame === State.Demarré) {
      attack.attackBase(defend);
      updatevie();
      setTurn(turn+1);
      addItem(`a utilisé une attaque de base contre`);
      }
    };
  }

  const clickAttackSpecial = (attack,defend) => {
    return () => {
      if (stateOfGame === State.Demarré) {
      attack.attackSpecial(defend);
      updatevie();
      setTurn(turn+1);
      addItem(`a utilisé une attaque spéciale contre`);
      }
    };
  }

  const updatevie = () => {
    setViePlayer1(Math.max(0,player1.getVie()));
    setViePlayer2(Math.max(0,player2.getVie()));
  }

  const stopGame = () => {
    setStateOfGame(State.Arrêt);
  }
 

  useEffect(() => {
    
  if (viePlayer1 <= 0) {
    addItem("Player 1 has lost!");
    stopGame();
  } else if (viePlayer2 <= 0) {
    addItem("Player 2 has lost!");
    stopGame();
  }

  }, [viePlayer1,viePlayer2]);

 
 
    
    return <div className="container">

<div className="button-container">
<ul>
      {events.map((event, index) => (
        <li key={index}>{event}</li>
      ))}
      </ul>

      <button 
      className="center-button"
      onClick={() => setStateOfGame(State.Demarré)}>
        Demarré
      </button>
</div>
      
    <div className="column left-column">
      <text>{
         viePlayer1.toString() 
        }
     
      </text>
     
      <HealthBar health={viePlayer1} maxHealth={initViePlayer1}/>


      <RowButtonPlayer1 player1={player1} player2={player2} turn={turn} clickAttackBase={clickAttackBase} clickAttackSpecial={clickAttackSpecial} State={State} stateOfGame={stateOfGame}/>


     

    </div>

    <div className="column right-column">
      <text>
        {
          viePlayer2.toString()
        }
      </text>
    <HealthBar health={viePlayer2} maxHealth={initViePlayer2}/>

    <RowButtonPlayer2 player1={player1} player2={player2} turn={turn} clickAttackBase={clickAttackBase} clickAttackSpecial={clickAttackSpecial} State={State} stateOfGame={stateOfGame}/>

    </div>
     
  </div>;

}



function HealthBar({health,maxHealth}) {
  
  const healthPercentage = (health / 60) * 100;

  console.log(maxHealth);

  return (
    <div style={{ border: '1px solid black', width: '60px', height: '30px' }}>
      <div
        style={{
          width: `${healthPercentage}%`,
          height: '100%',
          backgroundColor: 'green'
        }}
      />
      
    </div>
  );
}

function RowButtonPlayer1({player1,player2,turn,clickAttackBase,clickAttackSpecial,State,stateOfGame}){
  if (turn % 2 === 1 && stateOfGame === State.Demarré) {
    return (<div className="row">
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

      </div>);
    
  } else {
    return (<div></div>);
  }
}
function RowButtonPlayer2({player1,player2,turn,clickAttackBase,clickAttackSpecial,State,stateOfGame}){
  if (turn % 2 === 0 && stateOfGame === State.Demarré) {
    return (
      <div className="row">
        <button onClick={clickAttackBase(player2, player1)}>
          Attaque de base
        </button>
        <button onClick={clickAttackSpecial(player2, player1)}>
          Attaque spéciale
        </button>
      </div>
    );
  } else {
    return <div></div>;
  }

}


