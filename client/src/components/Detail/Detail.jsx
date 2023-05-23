import React from "react";
import styles from "./Detail.module.css";

const Detail = (props) => {
  const { id, name, image, healthy, summary, steps } = props.location.state;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Receta Detallada</h2>
      <div className={styles.details}>
        <p>
          <strong>Id:</strong> {id}
        </p>
        <p>
          <strong>Nombre:</strong> {name}
        </p>
        <img src={image} alt="Not found" className={styles.image} />
        <p>
          <strong>Healthy:</strong> {healthy}
        </p>
        <p>
          <strong>Summary:</strong>{" "}
          <div dangerouslySetInnerHTML={{ __html: summary }}></div>
        </p>
        <p>
          <strong>Steps:</strong>
        </p>
        <div className={styles.stepsContainer}>
          {steps?.map((step) => (
            <div className={styles.step} key={step.number}>
              <div>
                <strong>Paso {step.number}:</strong> {step.step}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Detail;