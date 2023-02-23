import React, { useEffect, useState } from "react";

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
    <div>
      <h1>Rick and Morty</h1>
      {character.map((character) => {
        return (
          <div key={character.id}>
            <h2>{character.name}</h2>
            <div>
              <img src={character.image} alt={character.name} />
              <p>
                {character.gender == "unknown"
                  ? "Unidentified gender"
                  : character.gender}{" "}
                :{" "}{character.species}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Characters;
