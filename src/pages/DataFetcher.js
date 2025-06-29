import React, { useState, useEffect } from 'react';

export default function DataFetcher() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const envoyerDonnees = async (gamePartId,playerVictorious ) => {
    try {
      const reponse = await fetch('http://localhost:5000/gameparts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          GamePartId: gamePartId,
          playerVictorious: playerVictorious
        }),
      });
      const donnees = await reponse.json();
      console.log(donnees);
    } catch (erreur) {
      console.error('Erreur :', erreur);
    }
  };

  const recevoirDonnees = async () => {
    
    fetch('http://localhost:5000/gameparts')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setData(JSON.parse(JSON.stringify(data)));
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      }
    );
  
  };

  useEffect(() => {
    recevoirDonnees()
  }, []);

  if (loading) return <div>Chargement...</div>;
  if (error) return <div> Error; {error.message} </div> ;


  return (
    <div>

      <button onClick={
        () => 
          recevoirDonnees()
        
        }>
          rafraichir
      </button>


      <h1>Liste des objets</h1>
      <ul>
        {data.map(gamepart => (
          <li key={gamepart.GamePartId}>{gamepart.playerVictorious}</li>
        ))}
      </ul>


      <button onClick={
        () => {
        envoyerDonnees(Math.floor(Math.random() * 900000) + 100000,"Non Determiné");
        recevoirDonnees();
        }
        }>
          Envoyez donnees
      </button>

    </div>
  );

}