import Card from "../Card/Card";
import Style from "./CardsContainer.module.css"
// import { useSelector } from "react-redux"

const CardsContainer = ({ currentRecipes }) => {




    return (

        <div className={Style.container}>
            {currentRecipes.map(recipe => {

                return (
                    <div className={Style.card} key={recipe.id}>
                        <Card

                            id={recipe.id}
                            name={recipe.title || "No hay informacion"}
                            image={recipe.image || "No hay informacion"}
                            summary={recipe.summary || "No hay informacion"}
                            healthy={recipe.healthScore || "No hay informacion"}
                            steps={recipe.analyzedInstructions[0].steps || "No hay informacion"}
                            
                        />
                        
                    </div>
                )

            })}
        </div>
    )
};

export default CardsContainer;