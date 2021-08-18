 const { DataTypes } = require('sequelize');
// // // Exportamos una funcion que define el modelo
// // // Luego le injectamos la conexion a sequelize.
 module.exports = (sequelize) => {

  sequelize.define('tareas', {
         id: {
                    type: DataTypes.UUID,
     defaultValue: DataTypes.UUIDV4,
    primaryKey: true
   },
    name: {
      type: DataTypes.STRING, //cierto numero de palabras 
      
     },
     description: {
     type: DataTypes.TEXT, //para cosas mas grandes 
    
    },
    entregable: {
      type: DataTypes.TEXT,
      
   },
    fechai:{
        type:DataTypes.DATE,
        
      
    },
    fechae:{
        type:DataTypes.DATE,
        
    },
    prioridad:{
        type:DataTypes.STRING,
        
    },
    status:{
        type:DataTypes.INTEGER,
        
    }

  });
 };
