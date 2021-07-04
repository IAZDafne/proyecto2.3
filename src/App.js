import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PostForm from './Component/PostForm';
import AllPost from './Component/AllPost';
import './App.css'
import NavBar from './Component/NavBar'


class App extends Component {
render() {
return (
<div className="App">
  <Router>
  <NavBar/>
  <Switch>
    <Route exact  path = '/' component={PostForm}/>
    <Route exact path = '/AllPost' component = {AllPost }/>
  </Switch>
   
   
     
    <AllPost />

    </Router>
   
</div>
);
}
}
export default App;