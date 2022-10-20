import React, {useEffect, useState} from 'react';
import CountUp from 'react-countup';
import { Carousel } from "react-responsive-carousel"; 
import './css/App.css';
import view_r from './slides_create.js'; 
import style from './css/home.module.css';

//to inline style css
import { jsx, css } from '@emotion/core'

import {Link} from 'react-router-dom'

function Home() {

  const reviews = { 
    0:{
      name: "Rai Law Associates",
      quote:
        "By Shifting to the cloud, Rai Associates have been succesful in starting to work remote. There solid skillset in cloud migration and cloud deployment made the transition really smooth. In these modern times the cloud is essential in running a succesful buisness."
    },
    1:{
      name: "Bay Area Graphics",
      quote:
        "Zira Solution provided us with the perfect infrastruce services, on a fast timeline. With their skills in data management and network support BAG is succesful in operating their buisness on a larger scale. With Zira Solutions commitment towards providing excellent service, we are confident in our network and IT Infrastructure."
    },
   2:{
      name: "Translarity",
      quote:
        "Zira solution handles all of our infrastructure. They provide Translarity with a secure network, and help provide us 24 hour support. Their expertience can help any Bay Area Start-up get cost-effective support, and focus more on development."
    },
  3:{
      name: "Deeya energy",
      quote:
        "Zira Solution helped provide all of the infrastructure and cloud support at our early start-up stages. Deeya Energy really appreciated their fast turnaround time, and accomdating to our constraints. We really felt safe in scaling, and enjoyed how accomadating Zira Solution could be."
    }
};

  const [current, setCurrent] = useState(reviews[0]);

  const[active, setActive] = useState(0)

  const handleSetClick = (event) => {
    setCurrent(reviews[event.target.getAttribute("data-review")])
    setActive(event.target.getAttribute("data-review"))
  }

  return (
    <React.Fragment>
  	<header className={style.header_1}>     
      <img class={style.img_1} src={require("./images/bay_area.jpg")}  alt="bay area"/>
      <div class={style.hero_text}>
    	  <h1>Unbeatable IT Support</h1>
    	  <h4>across the Bay Area since 2015</h4>
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

       <div class={style.finesse_about}>

        <div class = {style.flex_alignview}>
        <p class={style.handle_text_about}>  Zira Solutions is specialized in Linux, Windows, AWS/Azure cloud support for small to medium sized businesses, whether it’s a classic mom or pop shop or the next Silicon Valley startup.  We can help to deploy or support Microsoft and Linux applications under tight budget and under your time restrictions. Our existing customers in San Jose and San Francisco makes us more accessible across the bay area. With our experience in deploying and supporting applications in complex AWS clouds and virtualization, it makes us the most exceptional provider in the market.</p>
        </div>

      </div>

      <div class={style.finesse_animation}>
        <div class={style.col}>
        <h3 class={style.left_title}>Years in buisness</h3> 
          <img class={style.animation_icon} src={require("./images/biz_icon.png")}  alt="wifi"/>
          <div class={style.render_left}> 
            <h3 class={style.render}><CountUp  delay={2} end={7} />+</h3>
          </div>
        </div>

        <div class={style.col}>
          <h3>Customers</h3>
          <img class={style.animation_icon} src={require("./images/team_m.jpg")}  alt="wifi"/> 
          <div class={style.render_mid}> 
          <h3 class={style.render}><CountUp delay={2} end={10} />+</h3>
          </div> 
        </div>

        <div class={style.col}>
          <h3>Finished Projects</h3> 
          <img class={style.animation_icon} src={require("./images/projects.png")}  alt="wifi"/>

          <div class={style.render_third}> 
            <h3><CountUp delay={2} end={350}/></h3> 
            <h3 class={style.plus_pushed}>+</h3>
          </div>
          
        </div>

        <div class={style.col}>
          <h3 class={style.right_title}>Certificates</h3> 
          <img 
class={style.animation_icon} src={require("./images/certificate.jpg")}  alt="wifi"/>
          <div class={style.render_last}>
            <h3 class={style.render}><CountUp delay={2} end={15}/>+</h3>
          </div> 
        </div>
      </div>



    <div class={style.finesse}>
        
        <p class={style.finesse_p}>{current.quote}</p>
        <p class={style.finesse_p}>{current.name}</p>

        <div class={style.span_view}>

            {Object.keys(reviews).map(index => (
                <span 
                  class={style.span_view}
                  onClick={event => handleSetClick(event)}
                  data-review={index}
                  key={index}
                  
                />
            ))}
       </div>
        

    </div> 
      
    </div> 

  </body>
  
  </React.Fragment>
    

  

  	
  );
}


export default Home;

