import React, { useState } from 'react';
import './App.css';

function App() {

  const [inputNiveauPlayer1, setInputNiveauPlayer1] = useState('');
  const [inputForcePlayer1, setInputForcePlayer1] = useState('');
  const [inputIntelligencePlayer1, setInputIntelligencePlayer1] = useState('');
  const [inputAgilitéPlayer1, setInputAgilitéPlayer1] = useState('');

  const [inputNiveauPlayer2, setInputNiveauPlayer2] = useState('');
  const [inputForcePlayer2, setInputForcePlayer2] = useState('');
  const [inputIntelligencePlayer2, setInputIntelligencePlayer2] = useState('');
  const [inputAgilitéPlayer2, setInputAgilitéPlayer2] = useState('');

  return (
    <div className="container">
      <div className="column left-column">
        
          <h2>Player 1</h2>
          Niveau
          <input 
            min="0"
            type="number" 
            value={inputNiveauPlayer1} 
            onChange={
              e => setInputNiveauPlayer1(e.target.value)
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
              e => setInputForcePlayer1(e.target.value)
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
              e => setInputIntelligencePlayer1(e.target.value)
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
              e => setInputAgilitéPlayer1(e.target.value)
            } 
            placeholder="Entrez du texte ici" 
            className="text-input"
          />


      </div>
      <div className="column right-column">

        <h2>Player 2</h2>
        Niveau
          <input 
            min="0"
            type="number" 
            value={inputNiveauPlayer2} 
            onChange={
              e => setInputNiveauPlayer2(e.target.value)
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
              e => setInputForcePlayer2(e.target.value)
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
              e => setInputIntelligencePlayer2(e.target.value)
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
              e => setInputAgilitéPlayer2(e.target.value)
            } 
            placeholder="Entrez du texte ici" 
            className="text-input"
          />

        
      </div>
      <div className="button-container">
        <button className="center-button">Jouer</button>
      </div>
    </div>
  );
}

export default App;
