const { Router } = require("express");

const { 
    getRecipeHandler,
    getRecipesHandler
} = require("../handlers/recipesHandler");


const recipesRouter = Router();

recipesRouter.get("/",getRecipesHandler);

recipesRouter.get("/search", getRecipesHandler);
recipesRouter.get("/:id", getRecipeHandler);




module.exports = recipesRouter;