const { DataTypes } = require('sequelize');
const Genres = require('./Genres');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  //const Videogame = 
  sequelize.define('videogame', {
    ID: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    Platforms: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
      defaultValue: ['PC']
    },
    Image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Released_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    Rating: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    Created: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    VideogameGenre: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    }
    
  });

//   Videogame.associate = (models) => {
//     Videogame.belongsToMany(models.Videogame, { through: 'VideogameGenre', foreignKey: 'videogameId', otherKey: 'genreId' });
// };

};
