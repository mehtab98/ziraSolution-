import React from 'react';
import CountUp from 'react-countup';
import { Carousel } from "react-responsive-carousel"; 


import './css/App.css';
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import style from './css/home.module.css';

import {Link} from 'react-router-dom'
function Home() {
  return (
    <React.Fragment>
  	<header className={style.header_1}>     
      <img class={style.img_1} src={require("./images/bay_area.jpg")}  alt="bay area"/>
      <div class={style.hero_text}>
    	  <h1>Unbeatable IT Support</h1>
    	  <h2>All across the Bay Area</h2>
        <h3>EST. 2015</h3>
  	  </div>
    </header>

     <body class = {style.body_style}> 
       <div class = {style.flex_alignview} >

       <div class = {style.container}>
       <Link  to='/cloud' class={style.link_style}> 
       <div class={style.box}>
       <img class={style.icon} src={require("./images/cloud_icon_zira.png")}  alt="cloud"/>
            <div class={style.content}>
                <h3 class={style.handle_title}>Cloud Service</h3>
                <p class={style.handle_text}> Our Cloud Services include cloud migrations and cloud managment. Whether you have a private or public network, we have something for you! </p>
            </div>
        </div>
        </Link> 

        <Link  to='/network' class={style.link_style}> 
        <div class={style.box}>
        <img class={style.icon} src={require("./images/wifi_icon_zira_n.png")}  alt="wifi"/>
            <div class={style.content}>
                <h3 class={style.handle_title}>Infrastructure Services</h3>
                <p class={style.handle_text}>We offer efficent and secure IT infrastructure services that provide computing, networking, and application processing capacity to ensure proficient performace.</p>      	        
            </div>
        </div>
        </Link> 

        <Link to='/development' class={style.link_style}> 
        <div class={style.box}>
        <img class={style.icon} src={require("./images/laptop_icon_zira.png")}  alt="wifi"/>
            <div class={style.content}>
                <h3>Development Services</h3>
                <p class={style.handle_text}>Our developers provide customized applications to your exact specificiations. Whether mobile to web development, we can develop an application suited for your buisness.</p>
            </div>
        </div>
        </Link> 
       </div>

       <div class={style.container_about}>

        <div class = {style.flex_alignview} >
        <p class={style.handle_text_about}>  Zira Solutions is specialized in Linux, Windows, AWS/Azure cloud support for small to medium sized businesses, whether it’s a classic mom or pop shop or the next Silicon Valley startup.  We can help to deploy or support Microsoft and Linux applications under tight budget and under your time restrictions. Our existing customers in San Jose and San Francisco makes us more accessible across the bay area. With our experience in deploying and supporting applications in complex AWS clouds and virtualization, it makes us the most exceptional provider in the market.</p>
        </div>

      </div>

       <div class={style.container_animation}>
        <div class={style.col}>
        <h3 class={style.left_title}>Years in buisness</h3> 
          <img class={style.animation_icon} src={require("./images/biz_icon.png")}  alt="wifi"/>
          <h3><CountUp  delay={2} end={15} /> +</h3>
          
        </div>

        <div class={style.col}>
        <h3>Team Members</h3>
          <img class={style.animation_icon} src={require("./images/team_m.jpg")}  alt="wifi"/> 
          <h3><CountUp delay={2} end={10} /> +</h3>
          
        </div>

        <div class={style.col}>
          <h3>Finished Projects</h3> 
          <img class={style.animation_icon} src={require("./images/projects.png")}  alt="wifi"/>

          <h3><CountUp delay={2} end={350} /> +</h3>
          
        </div>

        <div class={style.col}>
          <h3 class={style.right_title}>Certificates</h3> 
          <img 
class={style.animation_icon} src={require("./images/certificate.jpg")}  alt="wifi"/>
          <h3><CountUp delay={2} end={15}/> +</h3>
          
        </div>
      </div>

      

      <div class={style.container_slides}>
        <Carousel showThumbs={false} infiniteLoop={true}>
          <div class={style.slide_design}><img class={style.test_design} src={require("./images/cloud_icon_zira.png")}  alt="cloud"/></div>
          <div class={style.slide_design}>this is slide 2</div>
          <div class={style.slide_design}>this is slide 3</div>
      </Carousel>
      </div>

      </div> 
      <br></br>
      <br></br>
    </body>
  
  </React.Fragment>
    

  

  	
  );
}


export default Home;

