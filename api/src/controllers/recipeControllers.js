// const { Recipe, Diets } = require("../db");
// const axios = require("axios");
// const { Op } = require('sequelize');

// const getApiInfo = async () => {
//     const apiUrl = await axios.get('https://api.spoonacular.com/recipes/complexSearch?apiKey=250d0c844611489181ae6d8179c43a34&addRecipeInformation=true#')
//     const apiInfo = await apiUrl.data.map(elem =>{
//         return{
//             id: elem.id,
//             name: elem.name,
//             image: elem.image,
//             summary: elem.summary,
//             healthy: elem.healthy,
//             steps: elem.steps,
//         }
//     });    
//   return apiInfo;  
// }; 

// const getDbInfo = async () => {
//     return await Recipe.finAll({
//         include:{
//             model: Diets,
//             attributes: ['name'],
//             througth:{
//                 attributes: [],
//             },
//         }
//     })
// }

// const  getAllRecipe = async () =>{
// const apiInfo = await getApiInfo();
// const getDbInfo = await getDbInfo();
// const infoTotal = apiInfo.concat(getDbInfo);
// return infoTotal;
// }
const { Recipe, Diets } = require("../db");
const axios = require("axios");
const { Op } = require('sequelize');


const cleanArray = (arr) =>

    arr.map((elem) => {
        return {
            id: elem.id,
            name: elem.name,
            image: elem.image,
            summary: elem.summary,
            healthy: elem.healthy,
            steps: elem.steps,
        };
    });

const getRecipeById = async (id, source) => {
    const recipes = source === "api" ?
        (await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=250d0c844611489181ae6d8179c43a34`)).data
        : await Recipe.findByPk(id);
    return cleanArray(recipes);
};

const getAllCountries = async (req, res) => {
    const {name} = req.query
    console.log(name)
   try {
    if (!name){
        const allCountries = await Country.findAll({include:Activity});
        return res.status(200).json(
            allCountries
        )
    } else {
        let pais = await Country.findAll({
            where: {
                name:{
                    [Op.iLike]:"%"+name+"%"
                }
            },
            include: Activity
        })
        console.log(pais)
        return res.status(200).json(pais)
    }
   } catch (error) {
    console.log(error)
    res.status(404).json({error: error.message}
      
    )
   }
};



module.exports = { getAllCountries, getRecipeById,  }; 