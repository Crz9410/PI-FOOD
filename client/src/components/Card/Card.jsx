import React, { useState } from "react";
import styles from "./Card.module.css";

const Card = (props) => {
  const [showBack, setShowBack] = useState(false);

  const handleCardClick = () => {
    setShowBack(!showBack);
  };
  console.log("XXXXXXXXXXXXXXXX", props)
  
  return (
    <div className={styles.cardBox} onClick={handleCardClick}>
      <div className={`${styles.card} ${showBack ? styles.showBack : ""}`}>
        <div className={`${styles.front} ${showBack ? styles.hide : ""}`}>
          <p>Id: {props.id}</p>
          <p className={styles.country}>{props.name}</p>
          <img src={props.image} alt="Not found" />
          <p>Summary: {props.summary}</p>
          <p>Healthy: {props.healthy}</p>
        </div>
        <div className={`${styles.back} ${showBack ? "" : styles.hide}`}>
          <p>Steps: {props.steps}</p>


        </div>
      </div>
    </div>
  );
};

export default Card;