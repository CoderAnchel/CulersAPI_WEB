import React from "react";
import Lamine from "../assets/fcbPlayers/Lamine Yamal.png";
import AlejandroBalde from "../assets/fcbPlayers/Alejandro Balde.png";
import AndreasChristensen from "../assets/fcbPlayers/Andreas Christensen.png";
import AndrésCuenca from "../assets/fcbPlayers/Andrés Cuenca.png";
import AnsuFati from "../assets/fcbPlayers/Ansu Fati.png";
import DaniOlmo from "../assets/fcbPlayers/Dani Olmo.png";
import EricGarcía from "../assets/fcbPlayers/Eric García.png";
import FermínLópez from "../assets/fcbPlayers/Fermín López.png";
import FerranTorres from "../assets/fcbPlayers/Ferran Torres.png";
import FrenkieDeJong from "../assets/fcbPlayers/Frenkie de Jong.png";
import Gavi from "../assets/fcbPlayers/Gavi.png";
import GuilleFernández from "../assets/fcbPlayers/Guille Fernández.png";
import HéctorFort from "../assets/fcbPlayers/Héctor Fort.png";
import IñakiPeña from "../assets/fcbPlayers/Iñaki Peña.png";
import IñigoMartínez from "../assets/fcbPlayers/Iñigo Martínez.png";
import JulesKoundé from "../assets/fcbPlayers/Jules Koundé.png";
import MarcBernal from "../assets/fcbPlayers/Marc Bernal.png";
import MarcCasadó from "../assets/fcbPlayers/Marc Casadó.png";
import MarcAndréTerStegen from "../assets/fcbPlayers/Marc-André ter Stegen.png";
import Martín from "../assets/fcbPlayers/Martín.png";
import p593110t178_2024_1_003_000 from "../assets/fcbPlayers/p593110_t178_2024_1_003_000.png";
import PabloTorre from "../assets/fcbPlayers/Pablo Torre.png";
import PauVíctor from "../assets/fcbPlayers/Pau Víctor.png";
import Pedri from "../assets/fcbPlayers/Pedri.png";
import Raphinha from "../assets/fcbPlayers/Raphinha.png";
import RobertLewandowski from "../assets/fcbPlayers/Robert Lewandowski.png";
import RonaldAraujo from "../assets/fcbPlayers/Ronald Araújo.png";
import SergiDomínguez from "../assets/fcbPlayers/Sergi Domínguez.png";
import ToniFernández from "../assets/fcbPlayers/Toni Fernández.png";
import WojciechSzczęsny from "../assets/fcbPlayers/Wojciech Szczęsny.png";

const Player = (props) => {
  const playerImages = {
    "Lamine Yamal": Lamine,
    "Alejandro Balde": AlejandroBalde,
    "Andreas Christensen": AndreasChristensen,
    "Andrés Cuenca": AndrésCuenca,
    "Ansu Fati": AnsuFati,
    "Dani Olmo": DaniOlmo,
    "Eric García": EricGarcía,
    "Fermín López": FermínLópez,
    "Ferran Torres": FerranTorres,
    "Frenkie de Jong": FrenkieDeJong,
    Gavi: Gavi,
    "Guille Fernández": GuilleFernández,
    "Héctor Fort": HéctorFort,
    "Iñaki Peña": IñakiPeña,
    "Iñigo Martínez": IñigoMartínez,
    "Jules Koundé": JulesKoundé,
    "Marc Bernal": MarcBernal,
    "Marc Casadó": MarcCasadó,
    "Marc-André ter Stegen": MarcAndréTerStegen,
    Martín: Martín,
    "Pablo Torre": PabloTorre,
    "Pau Víctor": PauVíctor,
    Pedri: Pedri,
    Raphinha: Raphinha,
    "Robert Lewandowski": RobertLewandowski,
    "Ronald Araújo": RonaldAraujo,
    "Sergi Domínguez": SergiDomínguez,
    "Toni Fernández": ToniFernández,
    "Wojciech Szczęsny": WojciechSzczęsny,
    p593110_t178_2024_1_003_000: p593110t178_2024_1_003_000,
  };

  return (
    <div className="playerCard">
      <img src={playerImages[props.name]} alt="" className="foto" />
      <div className="playerBody">
        <div className="mainCard">
          <div className="titleMainCard">
            <span className="cardTitle">{props.name}</span>
            <span className="cardBio">{props.position}</span>
          </div>
          <span className="number">{props.number}</span>
        </div>
        <div className="mainCard white">
          <div className="titleMainCard">
            <span className="cardBio">COUNTRY</span>
            <span className="cardBoldBio">{props.country}</span>
          </div>
        </div>
        <div className="mainCard grey">
          <div className="titleMainCard">
            <span className="cardBio">BIRTHAY</span>
            <span className="cardBoldBio">{props.birth}</span>
          </div>
        </div>
        <div className="mainCard white">
          <div className="titleMainCard">
            <span className="cardBio">HEIGHT</span>
            <span className="cardBoldBio">{props.height}</span>
          </div>
        </div>
        <div className="mainCard grey">
          <div className="titleMainCard">
            <span className="cardBio">WEIGHT</span>
            <span className="cardBoldBio">{props.weight}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
