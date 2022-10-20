import React from 'react';
import CountUp from 'react-countup';
import './css/App.css';

import style from './css/home.module.css';



function slides_create() {
  return (
    <React.Fragment>

       <div class={style.container_animation}>
        <div class={style.col}>
        <h3 class={style.left_title}>Years in buisness</h3> 
          <img class={style.animation_icon} src={require("./images/biz_icon.png")}  alt="wifi"/>
          <h3><CountUp  delay={2} end={7} />+</h3>
          
        </div>

        <div class={style.col}>
        <h3>Customers</h3>
          <img class={style.animation_icon} src={require("./images/team_m.jpg")}  alt="wifi"/> 
          <h3><CountUp delay={2} end={10} />+</h3>
          
        </div>

        <div class={style.col}>
          <h3>Finished Projects</h3> 
          <img class={style.animation_icon} src={require("./images/projects.png")}  alt="wifi"/>

          <h3><CountUp delay={2} end={350} />+</h3>
          
        </div>

        <div class={style.col}>
          <h3 class={style.right_title}>Certificates</h3> 
          <img 
class={style.animation_icon} src={require("./images/certificate.jpg")}  alt="wifi"/>
          <h3 class={style.render}>
            <CountUp delay={2} end={15}/>
            +
            </h3>
          
        </div>
      </div>

    
        
    </React.Fragment>

  );
}


export default slides_create;