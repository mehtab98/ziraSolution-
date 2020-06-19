import React from 'react';
import './css/App.css';
import style from './css/home.module.css';

import {Link} from 'react-router-dom'
function Home() {
  return (
    <React.Fragment>
  	<header className={style.header_1}>     
      <img src={require("./images/bay_area.jpg")}  alt="bay area"/>
      <div class="hero-text">
    	  <h1>Unbeatable IT Support</h1>
    	  <h2>All across the Bay Area</h2>
  	  </div>
    </header>
     <body>
       <div class = "container">
       <div class="box">
       <img class="icon" src={require("./images/cloud_icon_zira.png")}  alt="cloud"/>
            <div class="content">
                <h3>Cloud Service</h3>
                <p> Our Cloud Services include cloud migrations and cloud managment. Whether you have a private or public networks, we have something for you! </p>
                <Link className = "navStyle" to='/about'> 
      		        <a href="./About"><button className="homeButton">Cloud</button></a>
      	        </Link> 

            </div>
        </div>

        <div class="box">
        <img class="icon" src={require("./images/wifi_icon_zira_n.png")}  alt="wifi"/>
            <div class="content">
                <h3>Network Services</h3>
                <p> Our Network Services help increase the number of devices on your network while providing you with swift speeds. Let us help boost your productivity!</p>
                <Link className = "navStyle" to='/about'> 
      		        <a href="./About"><button className="homeButton">Network</button></a>
      	        </Link> 
            </div>
        </div>

        <div class="box">
        <img class="icon" src={require("./images/laptop_icon_zira.png")}  alt="wifi"/>
            <div class="content">
                <h3>Development Services</h3>
                <p> We can provide you with customized applications to your exact specificiations. From mobile to web development, we can design an application suited for you! </p>
                <Link className = "navStyle" to='/about'> 
      		        <a href="./About"><button className="homeButton">Development</button></a>
      	        </Link> 
            </div>
        </div>

       </div>

       

     </body>
    
    </React.Fragment>
    

  

  	
  );
}


export default Home;

