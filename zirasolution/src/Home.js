import React from 'react';
import CountUp from 'react-countup';


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
        <h3>EST. 2015</h3>
  	  </div>
    </header>

     <body> 
       <div class = {styles.flex_alignview} >

       <div class = {styles.container}>
       <Link  to='/cloud' class={styles.link_style}> 
       <div class={styles.box}>
       <img class={styles.icon} src={require("./images/cloud_icon_zira.png")}  alt="cloud"/>
            <div class={styles.content}>
                <h3 class={styles.handle_title}>Cloud Service</h3>
                <p class={styles.handle_text}> Our Cloud Services include cloud migrations and cloud managment. Whether you have a private or public network, we have something for you! </p>
            </div>
        </div>
        </Link> 

        <Link  to='/network' class={styles.link_style}> 
        <div class={styles.box}>
        <img class={styles.icon} src={require("./images/wifi_icon_zira_n.png")}  alt="wifi"/>
            <div class={styles.content}>
                <h3 class={styles.handle_title}>Infrastructure Services</h3>
                <p class={styles.handle_text}>We offer efficent and secure IT infrastructure services that provide computing, networking, and application processing capacity to ensure proficient performace.</p>      	        
            </div>
        </div>
        </Link> 

        <Link to='/development' class={styles.link_style}> 
        <div class={styles.box}>
        <img class={styles.icon} src={require("./images/laptop_icon_zira.png")}  alt="wifi"/>
            <div class={styles.content}>
                <h3>Development Services</h3>
                <p class={styles.handle_text}>Our developers provide customized applications to your exact specificiations. Whether mobile to web development, we can develop an application suited for your buisness.</p>
            </div>
        </div>
        </Link> 
       </div>

       <div class={styles.container_about}>

        <div class = {styles.flex_alignview} >
        <p class={styles.handle_text_about}>  Zira Solutions is specialized in Linux, Windows, AWS/Azure cloud support for small to medium sized businesses, whether it’s a classic mom or pop shop or the next Silicon Valley startup.  We can help to deploy or support Microsoft and Linux applications under tight budget and under your time restrictions. Our existing customers in San Jose and San Francisco makes us more accessible across the bay area. With our experience in deploying and supporting applications in complex AWS clouds and virtualization, it makes us the most exceptional provider in the market.</p>
        </div>

      </div>

       <div class={styles.container_animation}>
        <div class={styles.col}>
        <h3 class={styles.left_title}>Years in buisness</h3> 
          <img class={styles.animation_icon} src={require("./images/biz_icon.png")}  alt="wifi"/>
          <h3><CountUp  delay={2} end={15} /> +</h3>
          
        </div>

        <div class={styles.col}>
        <h3>Team Members</h3>
          <img class={styles.animation_icon} src={require("./images/team_m.jpg")}  alt="wifi"/> 
          <h3><CountUp delay={2} end={10} /> +</h3>
          
        </div>

        <div class={styles.col}>
          <h3>Finished Projects</h3> 
          <img class={styles.animation_icon} src={require("./images/projects.png")}  alt="wifi"/>

          <h3><CountUp delay={2} end={350} /> +</h3>
          
        </div>

        <div class={styles.col}>
          <h3 class={styles.right_title}>Certificates</h3> 
          <img 
class={styles.animation_icon} src={require("./images/certificate.jpg")}  alt="wifi"/>
          <h3><CountUp delay={2} end={15}/> +</h3>
          
        </div>
      </div>



      <div class={styles.container_about}>
        <h1>Testimony</h1> 

      </div>

      </div> 
    </body>
  
  </React.Fragment>
    

  

  	
  );
}


export default Home;

