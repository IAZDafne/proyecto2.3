const { DataTypes } = require('sequelize');
// // // Exportamos una funcion que define el modelo
// // // Luego le injectamos la conexion a sequelize.
 module.exports = (sequelize) => {

 sequelize.define('recursos', {
         id: {
                    type: DataTypes.UUID,
     defaultValue: DataTypes.UUIDV4,
    primaryKey: true
   },
    name: {
      type: DataTypes.STRING, //cierto numero de palabras 
      allowNull: false,
     },
     description: {
     type: DataTypes.TEXT, //para cosas mas grandes 
     
    },
    provedores: {
      type: DataTypes.TEXT,
     
   },
    fechae:{
        type:DataTypes.DATE,
       
      
    },
    justificacion:{
        type:DataTypes.TEXT,
        
    }

  });
 };