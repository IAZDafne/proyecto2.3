const { DataTypes} = require('sequelize');
// // // Exportamos una funcion que define el modelo
// // // Luego le injectamos la conexion a sequelize.
 module.exports = (sequelize) => {

 sequelize.define('usuarios', {
         id: {
                    type: DataTypes.UUID,
     defaultValue: DataTypes.UUIDV4,
    primaryKey: true
   },
    name: {
      type: DataTypes.STRING, //cierto numero de palabras 
      
     },
     puesto: {
     type: DataTypes.TEXT, //para cosas mas grandes 
      
    },
    especialidad: {
      type: DataTypes.TEXT,
      
   },
    cumple:{
        type:DataTypes.DATE,
       
      
    },
   

  });
 };