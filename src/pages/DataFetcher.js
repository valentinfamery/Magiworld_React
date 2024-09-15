import React, { useState, useEffect } from 'react';

export default function DataFetcher() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5095/weatherforecast')
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
    </div>
  );

}