const { DataTypes } = require('sequelize');

// const { toDefaultValue } = require('sequelize/types/utils');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id: {
      type: DataTypes.INTEGER,
      // toDefaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
      
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    diets:{
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    // resumen del plato 
    summary: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // nivel de comida saludable
    healthy: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    // paso a paso
    steps: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
    // { timestamps: false },
  );
};
