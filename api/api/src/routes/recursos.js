require('dotenv').config(); // para lo datos sencibles 
// const { API_KEY } = process.env; // es el api generado en la pagina 
 const { Router } = require('express');
const router = Router();
// const axios = require('axios').default;
 const {Proyectos,Usuarios,Recursos,Tareas} = require('../db');

 router.post('/', async(req, res) => {
     let {name,description,provedores,fechae,justificacion}=req.body;
     let  usuariosbd= usuarios.map(usu =>{
         return Usuarios.findOrCreate({
             where:{name:usu}
         })
     })  
     let proyectosbd = proyectos.map(pro =>{
         return Proyectos.findOrCreate({
             where:{name:pro}
         })
     })
     let tareasbd =tareas.map(tar=>{
         return Tareas.findOrCreate({
             where:{name:tar}

         })
     })
     let allUsuarios =await Promise.all(usuariosbd);
     console.log(allUsuarios)
     let allProyectos = await Promise.all(proyectosbd);
     console.log (allProyectos)
     let allTareas = await Promise.all(tareasbd);
     console.log(allTareas)
     let recursosPost = await Recursos.create({
         name,
         description,
         provedores,
        fechae,
        justificacion,

     })
     allUsuarios.forEach(usu=> recursosPost.setUsuarios(usu[0]))
     allProyectos.forEach(pro=>recursosPost.setProyectos(pro[0]))
     allTareas.forEach(tar=> recursosPost.serTareas(tar[0]))
     res.json(recursosPost)
 })

 router.get('/:recursosid', async(req,res)=> {
   const {recursosid}=req.params
   if(recursosid.includes('-')){
       let recursosDb = await Recursos.findByPk(recursosid,{include:Usuarios,Proyectos,Tareas})
       recursosDb=JSON.stringfy(recursosDb);
       recursosDb=JSON.parse(recursosDb);
       recursosDb.usuarios = recursosDb.usuarios.map(u => u.name);
       recursosDb.proyectos= recursosDb.proyectos.map(p => p.name);
       recursosDb.tareas= recursosDb.tareas.map(t => t.name);
       res.send(recursosDb)
   }
 })
 