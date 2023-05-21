const { Recipe, Diets } = require("../db");
const axios = require("axios");
const { Op } = require('sequelize');
const {
    API_KEY,
} = process.env;

const cleanArray = (elem) => {
    let elementFilter = {};
    if (elem.length) {
        elementFilter = elem.map((e) => ({
            id: e.id,
            name: e.title,
            image: e.image,
            summary: e.summary,
            healthy: e.healthScore,
            steps: e.analyzedInstructions[0].steps[0].step,
        }));
    } else {
        elementFilter = {
            id: elem.id,
            name: elem.title,
            image: elem.image,
            summary: elem.summary,
            healthy: elem.healthScore,
            steps: elem.analyzedInstructions[0].steps[0].step,
        };
    }
    return elementFilter;
};

const getRecipeById = async (id, source) => {
    const recipes = source === "api" ?
        (await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`)).data
        : await Recipe.findByPk(id);

    return cleanArray(recipes);
};

const searchRecipeByName = async (name) => {
    const response = await axios.get(`https://api.spoonacular.com/food/search?query=${name}&apiKey=${API_KEY}`);

    return response.data;

};

const getAllRecipes = async () => {
    // buscar en la bdd
    const databaseRecipes = await Recipe.findAll();

    // buscar en la api
    const apiRecipesRaw = (
        await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true#`)
    ).data.results;
    const apiRecipes = cleanArray(apiRecipesRaw);


    // unificar 
    return [...databaseRecipes, ...apiRecipes];
};

const createRecipe = async (id, name, image, summary, healthy, steps) => {
    if (id && name && image && summary && healthy && steps) {

     await Recipe.create({ id, name, image, summary, healthy, steps});
    };
}



module.exports = { getRecipeById, searchRecipeByName, getAllRecipes, createRecipe }; 