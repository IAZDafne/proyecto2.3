  
require('dotenv').config(); // para lo datos sencibles 
// const { API_KEY } = process.env; // es el api generado en la pagina 
 const { Router } = require('express');
const router = Router();
// const axios = require('axios').default;
 const {Proyectos,Usuarios,Recursos,Tareas} = require('../db');

 router.post('/', async(req, res) => {
     let {name,description,entregable,fechai,fechae,justificacion,status}=req.body;
     let  usuariosbd= usuarios.map(usu =>{
         return Usuarios.findOrCreate({
             where:{name:usu}
         })
     })  
     let recursosbd = recursos.map(rec =>{
         return Recursos.findOrCreate({
             where:{name:rec}
         })
     })
     let tareasbd =tareas.map(tar=>{
         return Tareas.findOrCreate({
             where:{name:tar}

         })
     })
     let allUsuarios =await Promise.all(usuariosbd);
     console.log(allUsuarios)
     let allRecursos = await Promise.all(recursosbd);
     console.log (allRecursos)
     let allTareas = await Promise.all(tareasbd);
     console.log(allTareas)
     let proyectosPost = await Proyectos.create({
         name,
         description,
         entregable,
        fechai,
        fechae,
        justificacion,
        status,

     })
     allUsuarios.forEach(usu=> proyectosPost.setUsuarios(usu[0]))
     allRecursos.forEach(rec=>proyectosPost.setRecursos(rec[0]))
     allTareas.forEach(tar=> proyectosPost.serTareas(tar[0]))
     res.json(proyectosPost)
 })

 router.get('/:proyectosid', async(req,res)=> {
   const {proyectosid}=req.params
   if(proyectosid.includes('-')){
       let proyectosDb = await Proyectos.findByPk(proyectosid,{include:Usuarios,Recursos,Tareas})
       proyectosDb=JSON.stringfy(proyectosDb);
       proyectosDb=JSON.parse(proyectosDb);
       proyectosDb.usuarios = proyectosDb.usuarios.map(u => u.name);
       proyectosDb.recursos= proyectosDb.recursos.map(r => r.name);
       proyectosDb.tareas= proyectosDb.tareas.map(t => t.name);
       res.send(proyectosDb)
   }
 })
 
 
 

     module.exports = router 
 
