import React, { useState } from "react";
import styles from "./Card.module.css";
import { Link } from 'react-router-dom';
import Detail from "../Detail/Detail";

const Card = (props) => {
  const [showBack, setShowBack] = useState(false);
  
  const handleCardClick = () => {
    setShowBack(!showBack);
  };
  


  return (
    <div className={styles.cardBox} onClick={handleCardClick}>
      <div className={`${styles.card}`}>
        <div className={`${styles.front}`}>
          <p className={styles.country}>{props.name}</p>
          <img src={props.image} alt="Not found" />

          <Link to={{
            pathname: "/detail",
            state: {
              healthy: props.healthy,
              summary: props.summary,
              steps: props.steps
            }
          }}>
            <button>Ingresar</button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Card;