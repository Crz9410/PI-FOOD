import React, { useState } from "react";
import styles from "./Card.module.css";

const Card = (props) => {
  const [showBack, setShowBack] = useState(false);

  const handleCardClick = () => {
    setShowBack(!showBack);
  };

  return (
    <div className={styles.cardBox} onClick={handleCardClick}>
      <div className={`${styles.card} ${showBack ? styles.showBack : ""}`}>
        <div className={`${styles.front} ${showBack ? styles.hide : ""}`}>
          <p className={styles.country}>{props.nombre}</p>
          <img src={props.imagen} alt="Not found" />
          <p>Continente: {props.continente}</p>
        </div>
        <div className={`${styles.back} ${showBack ? "" : styles.hide}`}>
          <p>Capital: {props.capital}</p>
          <p>Subregion: {props.subregion}</p>
          <p>Area: {props.area}</p>
          <p>Poblacion: {props.poblacion}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;