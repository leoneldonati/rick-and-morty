import React, { useEffect, useState } from "react";
import '../styles/characters.scss'

const Characters = () => {
  const URL = "https://rickandmortyapi.com/api/character";

  const [character, setCharacter] = useState([]);

  // petición de datos API
  useEffect(() => {
    const fecthData = async () => {
      const response = await fetch(URL);
      const data = await response.json();
      setCharacter(data.results);
      console.log(data.results);
    };

    fecthData();
  }, []);

  return (
    <>
      <h1 className="Character-h1">Rick and Morty</h1>
      {character.map((character) => {
        return (
          <div key={character.id} className="Character-container">
            <h2 className="Character-h2">{character.name}</h2>
            <div className="Character-info">
              <img src={character.image} alt={character.name} className="Character-img" loading="lazy"/>
              <p className="Character-p">
                Gender: {character.gender == "unknown"
                  ? "Unidentified gender"
                  : character.gender}
              </p>
              <p className="Character-p">Species: {character.species}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Characters;
