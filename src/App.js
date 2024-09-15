import React, { useState } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';
import {Guerrier} from'./Guerrier';
import {Rodeur} from'./Rodeur';
import {Mage} from'./Mage';

export default function App() {

  const navigate = useNavigate();

  const Classe = {
    Guerrier : "Guerrier",
    Rôdeur : "Rôdeur",
    Mage: "Mage",
  }

  const [inputNiveauPlayer1, setInputNiveauPlayer1] = useState(0);
  const [inputForcePlayer1, setInputForcePlayer1] = useState(0);
  const [inputIntelligencePlayer1, setInputIntelligencePlayer1] = useState(0);
  const [inputAgilitéPlayer1, setInputAgilitéPlayer1] = useState(0);

  const [imputClassePlayer1, setImputClassePlayer1] = useState(Classe.Guerrier);

  const [inputNiveauPlayer2, setInputNiveauPlayer2] = useState(0);
  const [inputForcePlayer2, setInputForcePlayer2] = useState(0);
  const [inputIntelligencePlayer2, setInputIntelligencePlayer2] = useState(0);
  const [inputAgilitéPlayer2, setInputAgilitéPlayer2] = useState(0);

  const [imputClassePlayer2, setImputClassePlayer2] = useState(Classe.Guerrier);

  const [message,setMessage] = useState('');

  let player1;
  let player2;

  

  const handleClick = (event)=> {

    let statsPlayer1 = (inputForcePlayer1 + inputAgilitéPlayer1 + inputIntelligencePlayer1);

    setMessage('');

    if (statsPlayer1 > inputNiveauPlayer1){

      console.log("Condition 1"+ statsPlayer1);

      setMessage("Le Personnage 1 niveau " + inputNiveauPlayer1 + " ne peut pas avoir " + inputForcePlayer1 + " de force" +
        " + " + inputAgilitéPlayer1 + " d'agilité + " + inputIntelligencePlayer1 + " d’intelligence : le total doit faire " + inputNiveauPlayer1);

    }
    else if(inputForcePlayer2 + inputAgilitéPlayer2 + inputIntelligencePlayer2 > inputNiveauPlayer2) {

      console.log("Condition 2");

      setMessage("Le Personnage 2 niveau " + inputNiveauPlayer2 + " ne peut pas avoir " + inputForcePlayer2 + " de force" +
        " + " + inputAgilitéPlayer2 + " d'agilité + " + inputIntelligencePlayer2 + " d’intelligence : le total doit faire " + inputNiveauPlayer2);

    }
    
    else{
      player1 = createPlayer(imputClassePlayer1,inputNiveauPlayer1,inputForcePlayer1,inputIntelligencePlayer1,inputAgilitéPlayer1,1)
      player2 = createPlayer(imputClassePlayer2,inputNiveauPlayer2,inputForcePlayer2,inputIntelligencePlayer2,inputAgilitéPlayer2,2)
      

      
        navigate("/game",{state : { player1 : player1 ,player2 : player2} })
      

    
      
    }
  
  };

  const clickTestWeather = (event) => {
    navigate("/testweather")
  }





  const handleClassePlayer1 = (event) => {
    setImputClassePlayer1(event.target.value);
  };

  const handleClassePlayer2 = (event) => {
    setImputClassePlayer2(event.target.value);
  };

  return (
    <div className="container">
      <div className="column left-column">
        
          <h2>Joueur 1</h2>
          
          <fieldset>
  <legend>Selectionner une classe :</legend>

  <div>
    <input type="radio" value="Guerrier" checked={imputClassePlayer1 ==="Guerrier"} onChange={handleClassePlayer1} />
    <label for="huey">Guerrier</label>
  </div>

  <div>
    <input type="radio" value="Rôdeur" checked={imputClassePlayer1 ==="Rôdeur"} onChange={handleClassePlayer1} />
    <label for="dewey">Rôdeur</label>
  </div>

  <div>
    <input type="radio" value="Mage" checked={imputClassePlayer1 ==="Mage"} onChange={handleClassePlayer1} />
    <label for="louie">Mage</label>
  </div>
</fieldset>
          Niveau
          <input 
            min="0"
            type="number" 
            value={inputNiveauPlayer1} 
            onChange={
              e => setInputNiveauPlayer1(parseInt(e.target.value))
            } 
            placeholder="Entrez du texte ici" 
            className="text-input"
          />
          Force 
          <input 
            min="0"
            type="number" 
            value={inputForcePlayer1} 
            onChange={
              e => setInputForcePlayer1(parseInt(e.target.value))
            } 
            placeholder="Entrez du texte ici" 
            className="text-input"
          />
          Intelligence
          <input 
            min="0"
            type="number" 
            value={inputIntelligencePlayer1} 
            onChange={
              e => setInputIntelligencePlayer1(parseInt(e.target.value))
            } 
            placeholder="Entrez du texte ici" 
            className="text-input"
          />
          Agilité
          <input 
            min="0"
            type="number" 
            value={inputAgilitéPlayer1} 
            onChange={
              e => setInputAgilitéPlayer1(parseInt(e.target.value))
            } 
            placeholder="Entrez du texte ici" 
            className="text-input"
          />


      </div>
      <div className="column right-column">

        <h2>Joueur 2</h2>

        <fieldset>
  <legend>Selectionner une classe :</legend>

  <div>
    <input type="radio" value="Guerrier" checked={imputClassePlayer2 ==="Guerrier"} onChange={handleClassePlayer2} />
    <label for="huey">Guerrier</label>
  </div>

  <div>
    <input type="radio" value="Rôdeur" checked={imputClassePlayer2 ==="Rôdeur"} onChange={handleClassePlayer2} />
    <label for="dewey">Rôdeur</label>
  </div>

  <div>
    <input type="radio" value="Mage" checked={imputClassePlayer2 ==="Mage"} onChange={handleClassePlayer2} />
    <label for="louie">Mage</label>
  </div>
</fieldset>

        Niveau
          <input 
            min="0"
            type="number" 
            value={inputNiveauPlayer2} 
            onChange={
              e => setInputNiveauPlayer2(parseInt(e.target.value))
            } 
            placeholder="Entrez du texte ici" 
            className="text-input"
          />
          Force 
          <input 
            min="0"
            type="number" 
            value={inputForcePlayer2} 
            onChange={
              e => setInputForcePlayer2(parseInt(e.target.value))
            } 
            placeholder="Entrez du texte ici" 
            className="text-input"
          />
          Intelligence
          <input 
            min="0"
            type="number" 
            value={inputIntelligencePlayer2} 
            onChange={
              e => setInputIntelligencePlayer2(parseInt(e.target.value))
            } 
            placeholder="Entrez du texte ici" 
            className="text-input"
          />
          Agilité
          <input 
            min="0"
            type="number" 
            value={inputAgilitéPlayer2} 
            onChange={
              e => setInputAgilitéPlayer2(parseInt(e.target.value))
            } 
            placeholder="Entrez du texte ici" 
            className="text-input"
          />

        
      </div>
      <div className="button-container">

        <text>{message}</text>

      
        <button className="center-button" 
                onClick={handleClick}
        >
          Jouer
        </button>

        <button className="center-button" 
                onClick={clickTestWeather}
        >
          TestWeather
        </button>

      </div>
    </div>
  );
}

function instanciationPersonnage(classe, niveau, force, agilite, intelligence, playerNumber) {
  let temp = null;
  switch (classe) {
    case "Guerrier":
      temp = new Guerrier(niveau, force, agilite, intelligence, playerNumber,"https://needcoolershoes.com/skins/4769/embed");
      break;
    case "Rôdeur":
      temp = new Rodeur(niveau, force, agilite, intelligence, playerNumber,"https://needcoolershoes.com/skins/979/embed");
      break;
    case "Mage":
      temp = new Mage(niveau, force, agilite, intelligence, playerNumber,"https://needcoolershoes.com/skins/476/embed");
      break;
    default:
      console.log('Classe inconnue');
  }
  console.log(temp);
  return temp;
}

function createPlayer(classe, niveau, force, agilite, intelligence, playerNumber) {
  return instanciationPersonnage(classe, niveau, force, agilite, intelligence, playerNumber);
}


