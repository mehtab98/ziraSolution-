import React from 'react';
import './css/App.css';
import styles from './css/home.module.css';

import {Link} from 'react-router-dom'
function Home() {
  return (
    <React.Fragment>
  	<header className={styles.header_1}>     
      <img class={styles.img_1} src={require("./images/bay_area.jpg")}  alt="bay area"/>
      <div class={styles.hero_text}>
    	  <h1>Unbeatable IT Support</h1>
    	  <h2>All across the Bay Area</h2>
  	  </div>
    </header>
     <body>
       <div class = {styles.container}>
       <div class={styles.box}>
       <img class={styles.icon} src={require("./images/cloud_icon_zira.png")}  alt="cloud"/>
            <div class={styles.content}>
                <h3>Cloud Service</h3>
                <p> Our Cloud Services include cloud migrations and cloud managment. Whether you have a private or public networks, we have something for you! </p>
                <Link  to='/about'> 
      		        <a href="./About"> <button className={styles.homeButton}>Cloud </button></a>
      	        </Link> 

            </div>
        </div>

        <div class={styles.box}>
        <img class={styles.icon} src={require("./images/wifi_icon_zira_n.png")}  alt="wifi"/>
            <div class={styles.content}>
                <h3>Network Services</h3>
                <p> Our Network Services help increase the number of devices on your network while providing you with swift speeds. Let us help boost your productivity!</p>
                <Link  to='/about'> 
      		        <a href="./About"><button className={styles.homeButton}>Network</button></a>
      	        </Link> 
            </div>
        </div>

        <div class={styles.box}>
        <img class={styles.icon} src={require("./images/laptop_icon_zira.png")}  alt="wifi"/>
            <div class={styles.content}>
                <h3>Development Services</h3>
                <p> We can provide you with customized applications to your exact specificiations. From mobile to web development, we can design an application suited for you! </p>
                <Link to='/about'> 
      		        <a href="./About"><button className={styles.homeButton}>Development</button></a>
      	        </Link> 
            </div>
        </div>

       </div>

       

     </body>
    
    </React.Fragment>
    

  

  	
  );
}


export default Home;

