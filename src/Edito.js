import React, { Component } from 'react';
import { connect } from 'react-redux';


class Edito extends Component {
handleEdit = (e) => {
  e.preventDefault();
  const newNombre = this.getNombre.value;
  const newDescripcion = this.getDescripcion.value;
  const newEntregable = this.getEntregable.value;
  const newRealizar = this.getRealizar.value;
  const newFechai = this.getFechai.value;
  const newFechae = this.getFechae.value;
  const newPrioridad = this.getPrioridad.value;
  const newStatus = this.getStatus.value;
  
  const data = {
    newNombre,
    newDescripcion,
    newEntregable,
    newRealizar,
    newFechai,
    newFechae,
    newPrioridad,
    newStatus
  }
  this.props.dispatch({ type: 'UPDATE', id: this.props.post.id, data: data })
}
render() {
return (
<div key={this.props.post.id} className="post">
  <form className="form" onSubmit={this.handleEdit}>
    <input required type="text" ref={(input) => 
    this.getNombre = input}
    defaultValue={this.props.post.nombre}  />
   <textarea required rows="5" placeholder='Introduce Descripcion' ref={(input) => 
   this.getDescripcion = input}
    defaultValue={this.props.post.descripcion} />
    <input required type="text" ref={(input) => 
    this.getEntregable = input}
    defaultValue={this.props.post.entregable}/>
     <input required type="text" ref={(input) =>
      this.getRealizar = input}
    defaultValue={this.props.post.realizar}  />
      <input type="date"  ref={(input) => 
      this.getFechai = input}
     defaultValue={this.props.post.fechai} />
    <input type="date" ref={(input) => 
   this.getFechae = input}
   defaultValue={this.props.post.fechae}/>
  <select id="dropDown" onchange="output(this)" ref={(select)=> 
    this.getPrioridad = select} 
    defaultValue={this.props.post.prioridad} placeholder='Selecione una Prioridad'>
      
      <option >ALTO</option>
      <option >MEDIO</option>
      <option >BAJO</option>
</select>
<select id="dropDown" onchange="output(this)" ref={(select)=> 
    this.getStatus = select} 
    defaultValue={this.props.post.status} >
      
      <option >0%</option>
      <option >50%</option>
      <option >100%
      </option>
</select>
    <button>MODIFICAR</button>
  </form>
</div>
);
}
}
export default connect()(Edito)