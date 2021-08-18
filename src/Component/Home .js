import React from 'react';
import { Link } from 'react-router-dom';



export default function Home() {
    return (
<>

<div>
    <div claseName ="titulo"> 
        
        <h1>Planea tu Proyecto</h1>
    </div>
        <h2>
            <Link to = "/proyectos">Proyectos</Link>
        </h2>
   </div> 
   <h2>
       <Link to ="/crear"> Crear Tareas  </Link>
   </h2>
   <div>
   </div> 
   <h2>
       <Link to ="/AllPost">  Tareas  </Link>
   </h2>
   <div>
       
   </div>
</>
     
   )}