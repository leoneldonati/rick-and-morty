import React, { useEffect, useState } from "react";
import "../styles/characters.css";
import '../styles/search-bar.css'

const Characters = () => {
  

  const [character, setCharacter] = useState([]);
  const [page, setPage] = useState(1);

  const URL = `https://rickandmortyapi.com/api/character/?page=${page}`;

  // petición de datos API
  useEffect(() => {
    const fecthData = async () => {
      const response = await fetch(URL);
      const data = await response.json();
      setCharacter(data.results);
      console.log(data.results);
    };

    fecthData();
  }, [URL]);

  return (
    <>
      {/* BARRA DE BÚSQUEDA */}
      <div className="Search">
        <p className="Search-p">Page: {page}</p>
        <div className="Search-container-buttons">
          {page == 1 ? (
            ""
          ) : (
            <button
              className="Search-button__left"
              onClick={() => {
                setPage(page - 1);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="Search-svg"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5ZM10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5Z"
                />
              </svg>{" "}
              {""}
            </button>
          )}

          <button
            className="Search-button__right"
            onClick={() => {
              setPage(page + 1);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="Search-svg"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8Zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5Z"
              />
            </svg>{" "}
            {""}
          </button>
        </div>
      </div>

      {/* LISTA DE PERSONAJES */}
      {character.map((character) => {
        return (
          <div key={character.id} className="Character-container">
            <h2 className="Character-h2">{character.name}</h2>
            <div className="Character-info">
              <img
                src={character.image}
                alt={character.name}
                className="Character-img"
                loading="lazy"
              />
              <p className="Character-p">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="Character-svg"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.5 1a.5.5 0 0 1 0-1h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-3.45 3.45A4 4 0 0 1 8.5 10.97V13H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V14H6a.5.5 0 0 1 0-1h1.5v-2.03a4 4 0 1 1 3.471-6.648L14.293 1H11.5zm-.997 4.346a3 3 0 1 0-5.006 3.309 3 3 0 0 0 5.006-3.31z"
                  />
                </svg>{" "}
                Gender:{" "}
                {character.gender == "unknown"
                  ? "Unidentified gender"
                  : character.gender}
              </p>
              <p className="Character-p">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="Character-svg"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.355.522a.5.5 0 0 1 .623.333l.291.956A4.979 4.979 0 0 1 8 1c1.007 0 1.946.298 2.731.811l.29-.956a.5.5 0 1 1 .957.29l-.41 1.352A4.985 4.985 0 0 1 13 6h.5a.5.5 0 0 0 .5-.5V5a.5.5 0 0 1 1 0v.5A1.5 1.5 0 0 1 13.5 7H13v1h1.5a.5.5 0 0 1 0 1H13v1h.5a1.5 1.5 0 0 1 1.5 1.5v.5a.5.5 0 1 1-1 0v-.5a.5.5 0 0 0-.5-.5H13a5 5 0 0 1-10 0h-.5a.5.5 0 0 0-.5.5v.5a.5.5 0 1 1-1 0v-.5A1.5 1.5 0 0 1 2.5 10H3V9H1.5a.5.5 0 0 1 0-1H3V7h-.5A1.5 1.5 0 0 1 1 5.5V5a.5.5 0 0 1 1 0v.5a.5.5 0 0 0 .5.5H3c0-1.364.547-2.601 1.432-3.503l-.41-1.352a.5.5 0 0 1 .333-.623zM4 7v4a4 4 0 0 0 3.5 3.97V7H4zm4.5 0v7.97A4 4 0 0 0 12 11V7H8.5zM12 6a3.989 3.989 0 0 0-1.334-2.982A3.983 3.983 0 0 0 8 2a3.983 3.983 0 0 0-2.667 1.018A3.989 3.989 0 0 0 4 6h8z" />
                </svg>{" "}
                Species: {character.species}
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Characters;
