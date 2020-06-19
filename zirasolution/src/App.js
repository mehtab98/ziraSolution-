import React from 'react';

import Nav from './Nav'; 
import About from './About';
import Shop from './Shop'; 
import Home from './Home';
import Cloud from './Cloud';
import Network from './Network';
import Developer from './Developer.js';

import './css/App.css';
import './css/home.module.css';
import './css/cloud.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 

function App() {

  return (
    <Router> 

    	<div className="App">

        	<Nav/> 

        	<Switch>
        		<Route path = "/" exact component={Home}/>  
        		
        		<Route path = "/about" component={About}/>                       
				<Route path = "/cloud" component={Cloud}/>                       
				<Route path = "/network" component={Network}/>  

				<Route path = "/developer" component={Developer}/>                                                        
        		<Route path = "/shop" component={Shop}/>

        	</Switch>  
    	</div>

    </Router> 
  );
}





export default App;
