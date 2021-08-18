require('dotenv').config(); // para lo datos sencibles 
// const { API_KEY } = process.env; // es el api generado en la pagina 
 const { Router } = require('express');
const router = Router();
// const axios = require('axios').default;
 const {Proyectos,Usuarios,Recursos,Tareas} = require('../db');

 router.post('/', async(req, res) => {
     let {name,puesto,especialidad,cumple}=req.body;
     let  tareasbd= tareas.map(tar=>{
         return Tareas.findOrCreate({
             where:{name:tar}
         })
     })  
     let proyectosbd = proyectos.map(pro =>{
         return Proyectos.findOrCreate({
             where:{name:pro}
         })
     })
     let recursosbd = recursos.map(rec=>{
         return Recursos.findOrCreate({
             where:{name:rec}

         })
     })
     let allTareas =await Promise.all(tareasbd);
     console.log(allTareas)
     let allProyectos = await Promise.all(proyectosbd);
     console.log (allProyectos)
     let allRecursos = await Promise.all(recursosbd);
     console.log(allRecursos)
     let usuariosPost = await Usuarios.create({
         name,
         puesto,
         especialidad,
         cumple,

     })
     allTareas.forEach(tar=> usuariosPost.setTareas(tar[0]))
     allProyectos.forEach(pro=> usuariosPost.setProyectos(pro[0]))
     allRecursos.forEach(rec=> usuariosPost.serRecursos(rec[0]))
     res.json(usuariosPost)
 })

 router.get('/:usuariosid', async(req,res)=> {
   const {usuariosid}=req.params
   if(usuariosid.includes('-')){
       let usuariosDb = await Usuarios.findByPk(usuariosid,{include:Tareas,Proyectos,Recursos})
       usuariosDb=JSON.stringfy(usuariosDb);
       usuariosDb=JSON.parse(usuariosDb);
       usuariosDb.recursos = usuariosDb.recursos.map(r => r.name);
       usuariosDb.proyectos= usuariosDb.proyectos.map(p => p.name);
       usuariosDb.tareas= usuariosDb.tareas.map(t => t.name);
       res.send(usuariosDb)
   }
 })