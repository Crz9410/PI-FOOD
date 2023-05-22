const { Diets } = require("../db");
const { UUIDV4 } = require('sequelize');
const axios = require("axios");
const {
    API_KEY,
} = process.env;

const getAllDiets = async () => {
    // buscar en la bdd
    const databaseDiets = await Diets.findAll();

    // buscar en la api
    const apiDietsRaw = (
        await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true#`)
    ).data.results[0].diets;

    const createDietPromises = apiDietsRaw.map(async (e, i) => {
        const id = i;
        const name = e;
  
        await Diets.create({ id, name });
    });
  
    await Promise.all(createDietPromises);
  
    // unificar 
    return [...databaseDiets, ...apiDietsRaw];
};

module.exports = { getAllDiets };
