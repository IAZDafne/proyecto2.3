import React, { Component } from 'react';
import { connect } from 'react-redux';
import './PostForm.css'
//import {Link } from 'react-router-dom';
import Navbar from './NavBar'



class PostForm extends Component {
handleSubmit = (e) => {
e.preventDefault();
 const nombre = this.getNombre.value;
 const descripcion = this.getDescripcion.value;
 const entregable = this.getEntregable.value;
 const realizar = this.getRealizar.value;
 const fechai = this.getFechai.value;
 const fechae = this.getFechae.value;
 const prioridad = this.getPrioridad.value;
 const status = this.getStatus.value;
 const recursos = this.getRecursos.value;
 const proyecto = this.getProyecto.value;
 
 const data = {
  id: new Date(),
  nombre,
  descripcion,
  entregable,
  realizar,
  fechai,
  fechae,
  prioridad,
  status,
  recursos,
  proyecto,

  editing: false
 }
 this.props.dispatch({
 type: 'ADD_POST',
 data
 })
 this.getNombre.value = '';
 this.getDescripcion.value = '';
 this.getEntregable.value = '';
 this.getRealizar.value= '';
 this.getFechai.value = '';
 this.getFechae.value = '';
 this.getPrioridad.value = '';
 this.getStatus.value = '';
 this.getRecursos.value = '';
 this.getProyecto.value = '';
}
render() {
return (
  <>
  <Navbar/>
<div className="post-container">
  
{/*  <div>
     <h1 className='crear'>Crear tarea</h1>
    
   </div> */}


  <form className="form" onSubmit={this.handleSubmit} >
   
   
 
   
   <div className='nombreTarea'>
   <h4 className='h4'>Nombre  Tarea: </h4> 
   <input className='inputs' required type="text" ref={(input) => 
      this.getNombre = input}
      placeholder="Introduce Nombre" /><br></br>
   </div>
   
    <div className='descripcion'>
    <h4 className='h4'>Descripcion Tarea:</h4>
   <textarea className='inputs' required rows="5" ref={(input) => 
    this.getDescripcion = input}
   cols="18" placeholder="Introduce Descrpcion" /><br />
   </div>
   
   <div  className='entregable'>
   <h4 className='h4'>Entregable:</h4>
   <input className='inputs' requiered type="text" 
      placeholder='Intoduce entregable' 
      ref={(input)=> this.getEntregable= input}/>
  </div>
    
    <div className='responsable'>
      <h4 className='h4'>Responsable:</h4><br></br>
    <input className='inputs'  required type="text" ref={(input) => 
     this.getRealizar = input}
          placeholder="Introduce Nombre" />
    </div>

   <div className='fechaI'>
     <h4 className='h4'>Fecha Inicio:</h4>
   <input  className='inputs' type="date" ref={(input) => 
   this.getFechai = input}
        placeholder="Introduce Fecha de inicio" />
   </div>

   <div className='fechae'>
     <h4 className='h4'>Fecha de Entrega:</h4>
    <input className='inputs' type="date" ref={(input) => 
   this.getFechae = input}
        placeholder="Introduce Fecha de entrega" />
   </div>

   <div>
     <h4 className='h4'>Recursos</h4>
     <input className='inputs' type='text' ref={(input)=> 
     this.getRecursos=input} placeholder= 'Introduce Recursos'/>
   </div>

   <div>
     <h4 className='h4'>Proyecto</h4>
     <input className='inputs' type='text' ref={(input)=> 
     this.getProyecto=input} placeholder= 'Introduce proyecto'/>
   </div>

  <div className='prioridad'>
    <h4 className='h4'>Prioridad:</h4>
   <select className='inputs' id="dropDown" onChange="output(this)"  
          ref={(select)=>
     this.getPrioridad = select} placeholder='Selecione una Prioridad'>
    <option>Selecione una  </option>
    <option >ALTO</option>
    <option >MEDIO</option>
    <option >BAJO</option>
</select>
</div>

<div className='status' >
  <h4 className='h4'>Status:</h4>
<select className='inputs' id="dropDown" onChange="output(this)" 
         ref={(select)=>
     this.getStatus = select} placeholder='Selecione un Status'>
    <option>Selecione uno</option>
    <option >0%</option>
    <option >50%</option>
    <option >100%</option>
</select>
</div>
<div >
   <button className='guardar' >GUARDAR</button>
   </div>

  </form>
  </div> 
  </>
);
}
}
export default connect()(PostForm);