import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PostForm from './Component/PostForm';
import AllPost from './Component/AllPost';
import './App.css'
import Proyectos from './Component/proyectos/Proyectos'
import Home from './Component/Home '


class App extends Component {
render() {
return (
<div className="App">
  <Router>
  <Switch>
    <Route exact to path ='/proyectos' component={Proyectos}/>
    <Route exact to path ='/' component={Home}/>
    <Route exact to path = '/crear' component={PostForm}/>
    <Route exact to path = '/AllPost' component = {AllPost }/>
  </Switch>
   
   
    

    </Router>
   
</div>
);
}
}
export default App;