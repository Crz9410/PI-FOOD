import React from "react";
import Card from "../Card/Card";
import Style from "./CardsContainer.module.css";

const CardsContainer = ({ currentRecipes }) => {
  return (
    <div className={Style.container}>
      {currentRecipes?.map((recipe) => (
        <div className={Style.card} key={recipe.id}>
          {(
            <Card
              id={recipe.id}
              name={recipe.title || recipe.name || "No hay información"}
              image={recipe.image || "No hay información"}
              summary={recipe.summary || "No hay información"}
              healthy={recipe.healthScore || "No hay información"}
              steps={recipe?.analyzedInstructions?.[0]?.steps || recipe?.steps || "No hay información"}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default CardsContainer;