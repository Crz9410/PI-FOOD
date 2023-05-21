const { getRecipeById, getAllRecipes, searchRecipeByName } = require("../controllers/recipeControllers");


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
    
    const getRecipesHandler = async (req, res) => {
        
        try {
            const { name } = req.query;
            // Obtener el nombre del país de los parámetros de la URL 
            // Hacer una petición GET al endpoint con el nombre del país
            const response = name?await searchRecipeByName(name):await getAllRecipes();
           
            // Devolver la respuesta en formato JSON
            res.json(response);
        } catch (error) {
            // Manejar el error si la petición falla
            res.status(400).json({message:"No se encuentra la receta buscado"})
            
          }
       
    };




module.exports ={
    getRecipeHandler, getRecipesHandler,
    
    
};