import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import bandera from "./assets/Flag_of_Catalonia.svg";
import escudo from "./assets/Barcelona-logo-escudo-750x430.png";

import Player from "./components/Player";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/players")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);

  console.log(
    data.map((player) => {
      return player.name;
    })
  );

  return (
    <>
      <div className="pageWrapper">
        <header className="header">
          <nav className="navbar">
            <div className="nav1">
              <img src={escudo} alt="fcb" className="escudo" />
            </div>
            <div className="nav2">
              <ul className="list">
                <div className="button">About</div>
                <div className="button">Docs</div>
                <div className="button">Github</div>
              </ul>
            </div>
          </nav>
          <div className="titleContainer">
            <div className="mainTitle">
              <h3 className="age">1899</h3>
              <h1 className="Ttile">BARÇA API</h1>
              <img src={bandera} alt="catalonia flag" className="flag" />
            </div>
          </div>
        </header>
        <div className="bodyContent">

          <div className="playerContainer">
            {data.map((player) => {
              return (
                <Player
                  image={player.picture}
                  name={player.name}
                  position="FORWARD"
                  country={player.nationality}
                  birth={player.dateOfBirth}
                  height={player.height}
                  weight={player.weight}
                  number={player.number}
                />
              );
            })}
          </div>
        </div>
        <footer className="footer"></footer>
      </div>
    </>
  );
}

export default App;
