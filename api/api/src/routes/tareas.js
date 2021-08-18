require('dotenv').config(); // para lo datos sencibles 
// const { API_KEY } = process.env; // es el api generado en la pagina 
 const { Router } = require('express');
const router = Router();
// const axios = require('axios').default;
 const {Proyectos,Usuarios,Recursos,Tareas} = require('../db');

 router.post('/', async(req, res) => {
     let {name,description,entregable,fechai,fechae,prioridad,status}=req.body;
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
     let recursosbd = recursos.map(rec=>{
         return Recursos.findOrCreate({
             where:{name:rec}

         })
     })
     let allUsuarios =await Promise.all(usuariosbd);
     console.log(allUsuarios)
     let allProyectos = await Promise.all(proyectosbd);
     console.log (allProyectos)
     let allRecursos = await Promise.all(recursosbd);
     console.log(allRecursos)
     let tareasPost = await Tareas.create({
         name,
         description,
         entregable,
         fechai,
        fechae,
        prioridad,
        status,

     })
     allUsuarios.forEach(usu=> tareasPost.setUsuarios(usu[0]))
     allProyectos.forEach(pro=> tareasPost.setProyectos(pro[0]))
     allRecursos.forEach(rec=> tareasPost.setRecursos(rec[0]))
     res.json(tareasPost)
 })

 router.get('/:tareasid', async(req,res)=> {
   const {tareasid}=req.params
   if(tareasid.includes('-')){
       let tareasDb = await Tareas.findByPk(tareasid,{include:Usuarios,Proyectos,Recursos})
       tareasDb=JSON.stringfy(tareasDb);
       tareasDb=JSON.parse(tareasDb);
       tareasDb.usuarios = tareasDb.usuarios.map(u => u.name);
       tareasDb.proyectos= tareasDb.proyectos.map(p => p.name);
       tareasDb.recursos= tareasDb.recursos.map(r => r.name);
       res.send(tareasDb)
   }
 })
 