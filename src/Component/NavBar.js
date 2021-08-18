import React from 'react';
import { NavLink } from 'react-router-dom';




export default function NavBar() {
    return (
<div className="navbar">
    <NavLink to ="/">
    <h2 className="center ">PLANEADOR</h2>
    </NavLink>
    <nav>
    <ul className="list">
                    <li className="list-item">
                        <NavLink to ="/AllPost"  >Todas las Tareas</NavLink>
                      </li>
                      <li>
                           <NavLink to ="/crear"  >Crear Tarea</NavLink> 
                      </li>
                </ul>
        
        </nav>
    </div>
  
    )}
   