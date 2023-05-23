import React from "react";
import Card from "../Card/Card";
import Style from "./CardsContainer.module.css";

const CardsContainer = ({ currentRecipes }) => {
  return (
    <div className={Style.container}>
      {currentRecipes?.map((recipe) => (
        <div className={Style.card} key={recipe.id}>
          {recipe.results ? (
            recipe.results.map((result, i) => (
              <Card
              key={i}
                id={result.id}
                name={result.name || "No hay información"}
                image={result.image || "No hay información"}
                summary={result.summary || "No hay información"}
                healthy={result.healthScore || "No hay información"}
                steps={result?.analyzedInstructions?.[0]?.steps || "No hay información"}
              />
            ))
          ) : (
            <Card
              id={recipe.id}
              name={recipe.title || "No hay información"}
              image={recipe.image || "No hay información"}
              summary={recipe.summary || "No hay información"}
              healthy={recipe.healthScore || "No hay información"}
              steps={recipe?.analyzedInstructions?.[0]?.steps || "No hay información"}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default CardsContainer;