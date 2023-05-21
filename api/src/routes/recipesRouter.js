const { Router } = require("express");

const { 
    getRecipeHandler,
} = require("../handlers/recipesHandler");
// const { getAllCountries } = require("../controllers/countriesController");

const recipesRouter = Router();

// recipesRouter.get("/",getAllCountries );

// countriesRouter.get("/", getCountriesHandler);

recipesRouter.get("/:id", getRecipeHandler);


module.exports = recipesRouter;