import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";

function App() {
  const [character, setCharacter] = useState([]);
  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character").then((response) => {
      setCharacter(response.data.results);
    });
  }, []);
  return (
    <main className="App">
      <header className="AppHeader">
        <h1>Characters</h1>
      </header>
      <div className="cardWrapper">
        {character.map((item) => {
          return (
            <section className="card">
              <figure className="cardImage">
                <img src={item.image} className="cardImageChar" />
              </figure>
              <article className="cardText">
                <h1 className="cardImageName">{item.name}</h1>
                <p className="cardTextLastLocation">Last location:</p>
                <p className="cardTextLocation">{item.location.name}</p>
              </article>
            </section>
          );
        })}
      </div>
    </main>
  );
}

export default App;
