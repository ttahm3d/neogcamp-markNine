import React, { useState } from "react";
import "./styles.css";

const GamesDB = {
  survival: [
    {
      name: "PlayerUnknown's Battlegrounds",
      rating: "4.5/5"
    },
    {
      name: "Apex Legends",
      rating: "4/5"
    },
    {
      name: "Fortnite",
      rating: "3.8/5"
    }
  ],
  moba: [
    {
      name: "Dota 2",
      rating: "4.8/5"
    },
    {
      name: "League of Legends",
      rating: "3.9/5"
    }
  ],
  fps: [
    {
      name: "Counter Strike: Global Offensive",
      rating: "4.5/5"
    },
    {
      name: "Valorant",
      rating: "4.2/5"
    }
  ]
};

export default function App() {
  const [genere, setGenere] = useState("moba");

  function selectedGenereHandler(genere) {
    setGenere(genere);
  }

  return (
    <div className="App">
      <header>
        <h1>
          <span role="img" aria-label="icon">
            💻
          </span>{" "}
          Games
        </h1>
        <small>Some of the PC games that I liked</small>
      </header>
      <main>
        {Object.keys(GamesDB).map((genere) => (
          <button onClick={() => selectedGenereHandler(genere)}>
            {genere}
          </button>
        ))}
      </main>
      <hr />
      <section>
        <ul className="gameslist">
          {GamesDB[genere].map((game, index) => (
            <li key={index} className="gameslist-item">
              <p className="name">{game.name}</p>
              <p className="rating">{game.rating}</p>
            </li>
          ))}
        </ul>
      </section>
      <footer>
        Created by{" "}
        <a rel="noreferrer" target="_blank" href="https://github.com/ttahm3d">
          Tahir Ahmed T
        </a>
      </footer>
    </div>
  );
}
