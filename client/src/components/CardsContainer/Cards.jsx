import Card from "../Card/Card";
import Style from "./CardsContainer.module.css"
// import { useSelector } from "react-redux"

const CardsContainer = ({ currentCountry }) => {




    return (

        <div className={Style.container}>
            {currentCountry.map(country => {

                return (
                    <div className={Style.card} key={country.cca3}>
                        <Card

                            id={country.id}
                            nombre={country.name.common || "No hay informacion"}
                            imagen={country.flags[0] || "No hay informacion"}
                            continente={country.continents[0] || "No hay informacion"}
                            capital={country.capital || "No hay informacion"}
                            subregion={country.subregion || "No hay informacion"}
                            area={country.area || "No hay informacion"}
                            poblacion={country.population || "No hay informacion"}

                        />
                        
                    </div>
                )

            })}
        </div>
    )
};

export default CardsContainer;