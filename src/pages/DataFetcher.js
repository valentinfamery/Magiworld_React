import React, { useState, useEffect } from 'react';

export default function DataFetcher() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const envoyerDonnees = async (gamePartId,playerVictorious ) => {
    try {
      const reponse = await fetch('http://localhost:5095/gameparts', {
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

  useEffect(() => {
    fetch('http://localhost:5095/gameparts')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      }
);
  }, []);

  if (loading) return <div>Chargement...</div>;
  if (error) return <div> Error; {error.message} </div> ;


  return (
    <div>
      Fetched Data
      {JSON.stringify(data, null, 2)}

      <button onClick={
        () => 
        envoyerDonnees(Math.floor(Math.random() * 900000) + 100000,"Non Determiné")
        
        }>
          Envoyez donnees
      </button>

    </div>
  );

}