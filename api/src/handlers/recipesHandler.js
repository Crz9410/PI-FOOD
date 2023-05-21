const { getRecipeById } = require("../controllers/recipeControllers");


    const getRecipeHandler = async (req, res) => {
        const { id } = req.params;
        const source = isNaN(id) ? "api" : "bdd";
    
        try {
            const recipe = await getRecipeById(id, source);
            res.status(200).json(recipe)
        } catch (error) {
            res.status(400).json({ error: error.message })
        }
    
    };
    





module.exports ={
    getRecipeHandler,
    
    
};