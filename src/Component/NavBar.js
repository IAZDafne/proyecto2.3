import React from 'react';
import { NavLink } from 'react-router-dom';




export default function NavBar() {
    return (
<div className="navbar">
    <h2 className="center ">PLANEADOR</h2>
    <nav>
    <ul className="list">
                    <li className="list-item">
                        <NavLink exact to path="/AllPost"  >Todas las Tareas</NavLink>
                        
                        
                    </li>
                </ul>
        
        </nav>
    </div>
  
    )}
   