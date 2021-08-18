const postReducer = (state = [], action) => {
  switch (action.type) {
  case 'ADD_POST':
  return state.concat([action.data])
  case 'DELETE_POST':
  return state.filter((post) => post.id !== action.id)
  case 'EDIT_POST':
  return state.map((post) => post.id === action.id ?
   { ...post, editing: !post.editing } : post)
  case 'UPDATE':
  return state.map((post) => {
  if (post.id === action.id) {
  return {
  ...post,
  nombre: action.data.newNombre,
  descripcion: action.data.newDescripcion,
  entregable: action.data.newEntregable,
  realizar:action.data.newRealizar,
  fechai:action.data.newFechai,
  fechae:action.data.newFechae,
  prioridad:action.data.newPrioridad,
  status:action.data.newStatus,
  recursos:action.data.newRecursos,
  proyecto:action.data.newProyecto,
  editing: !post.editing
  }
  } else return post;
  })
  default:
  return state;
  }
  }
  export default postReducer