import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import FoodDetails from './components/FoodDetail';
import Food from './components/Food';
import FoodCard from './components/FoodCard';
import About from './components/About';
//import Bar from './components/Bar';
//import CarasoulComp from './components/CarasoulComp'
import Help from './components/Help';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Login from './components/Login'

const App = ()=> {

  return(
    <Router>
      <div>
        
          <Route exact path="/foods" component={Food}/>
          <Route exact path="/details/:id" component={FoodDetails}/>
          <Route exact path="/about" component={About}/>
          {/* <Route exact path="/bar" component={Bar}/> */}
          {/* <Route exact path="/caraousel" component={CarasoulComp}/> */}
          <Route exact path="/help" component={Help}/>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/" component={Dashboard}/>
          <Route exact path="/login" component={Login}/>
      </div>
    </Router>
  )
}

export default App;