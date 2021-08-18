import React, { Component } from 'react';

import {connect} from 'react-redux';

class Post extends Component {
  render() {
  return (
    <div>
      <h2>{this.props.post.nombre}</h2>
      <p>{this.props.post.descripcion}</p>
      <p>{this.props.post.entregable}</p>
      <p>{this.props.post.realizar}</p>
      <p>{this.props.post.fechai}</p>
      <p>{this.props.post.fechae}</p>
      <p>{this.props.post.prioridad}</p>
      <p>{this.props.post.status}</p>
      <p>{this.props.post.recursos}</p>
      <p>{this.props.post.proyecto}</p>
      <button
       onClick={()=>this.props.dispatch({type:'EDIT_POST',id:this.props.post.id})}>
       Edit</button>
      <button 
      onClick={()=>this.props.dispatch({type:'DELETE_POST',id:this.props.post.id})}>
      Eliminar</button>
    </div>
  );
 }
}
export default connect()(Post);