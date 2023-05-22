const { getAllDiets } = require("../controllers/dietsConrollers");

const getDietsHandler = async (req, res) => {
    try {
        const response = await getAllDiets();
        res.json(response);
    } catch (error) {
        res.status(400).json({ message: "No se encuentra la dieta buscada" });
    }
};

module.exports = {
    getDietsHandler,
};
