import React from 'react';

import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import Nav from './Nav'; 
import Footer from './website_footer'; 
import About from './About.js';
import Shop from './Shop'; 
import Home from './Home';
import Cloud from './Cloud';
import Network from './Network';

import Developer from './Developer.js';
import developmentBackend from './developmentBackend.js'; 
import developmentWeb from './developmentWeb.js'; 
import developmentMobile from './developmentMobile.js'; 

import cloudMigration from './cloudMigration';
import cloudManagement from './cloudManagement';
import cloudArchitecture from './cloudArchitecture';

import networkRoadMap from './networkRoadMap';
import networkSecurity from './networkSecurity';
import networkService from './networkService'; 
import networkStorage from './networkStorage'; 
import operatingSystem from './operatingSystem'; 

import './css/App.css';
import './css/home.module.css';
import './css/genView.module.css';
import './network.module.css';



import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 
import { expression } from '@babel/template';


function App() {

  return (
    <Router> 

    	<div className="App">

        	<Nav/> 

        	<Switch>
        		<Route path = "/" exact component={Home}/>  
        		
        		<Route path = "/about" component={About}/>                       
				<Route path = "/cloud" component={Cloud}/>   

				<Route path = "/cloudMigration" component={cloudMigration}/> 

				<Route path = "/cloudManagement" component={cloudManagement}/> 

				<Route path = "/cloudArchitecture" component={cloudArchitecture}/> 

				<Route path = "/network" component={Network}/>  

				<Route path = "/networkService" component={networkService}/>  
				
				<Route path = "/networkStorage" component={networkStorage}/>  

				<Route path = "/networkSecurity" component={networkSecurity}/> 

				<Route path = "/operatingSystem" component={operatingSystem}/>

				<Route path = "/networkRoadMap" component={networkRoadMap}/> 


				<Route path = "/development" component={Developer}/>  

				<Route path = "/developmentBackend" component={developmentBackend}/>

				<Route path = "/developmentWeb" component={developmentWeb}/>  

				<Route path = "/developmentMobile" component={developmentMobile}/>  

        		<Route path = "/shop" component={Shop}/>

        	</Switch>  

			<Footer/>
    	</div>
		
    </Router> 
  );
}





export default App;
