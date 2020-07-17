import React from 'react';
import CountUp from 'react-countup';
import './css/App.css';

import style from './css/genView.module.css';

function networkStorage() {
  return (
    <React.Fragment>
  	<header className={style.header_views}>     
      <img src={require("./images/it_network.jpeg")}  alt="fog over the bay"/>
      <div class={style.hero_text_net}>
        <h1>Managing Storage</h1>
        <p>Data is a vital component of your business. You need to ensure that it’s always available when you need it.</p> 
      </div>
    </header>

    <body className={style.BodyView}>

      <section>
        
        <article className={style.article_view}>
          
          <p class={style.handle_gentext}> Here at ZiraSolutions, we’ll make sure that you always have the right solution to meet your business requirements. In fact, we strive to go beyond what today’s businesses demand from a managed IT services provider.</p> 
            
          <p class={style.handle_gentext}> Our managed storage services can help you ensure that your data is available anytime, anywhere. It is a perfect solution for dynamic businesses or those with a widely distributed workforce that need to access their data from multiple locations in a variety of time zones.</p> 

          <h1 className={style.handle_gentext}>Managed Cloud Azure/S3 Storage</h1>
          <p class={style.handle_gentext}>ZiraSolutions, can help manage your Azure storage environment, no matter what tier of storage or configuration you have in place today. Our team will provide management and oversight of your environment, 24/7, from initial design and deployment to operations support, along with recommendations for potential optimization within your environment.</p> 

          <h1 className={style.handle_gentext}>Legacy Managed Storage</h1>
          <p class={style.handle_gentext}>With our intimate knowledge of HPE,3PAR, Netapps or IBM Storage suite, you can trust ZiraSolutions to keep your storage arrays up-to-date and working at peak performance, so you can focus on your core business initiatives.</p> 

          <button className={style.consultButton}>Schedule a consultation</button>

          <div class={style.container_animation}>
        <div class={style.col}>
        <h3 class={style.left_title}>Years in buisness</h3> 
          <img class={style.animation_icon} src={require("./images/biz_icon.png")}  alt="wifi"/>
          <h3 class={style.bar_text}><CountUp  delay={2} end={15} /> +</h3>
          
        </div>

        <div class={style.col}>
        <h3 class={style.bar_text}>Team Members</h3>
          <img class={style.animation_icon} src={require("./images/team_m.jpg")}  alt="wifi"/> 
          <h3 class={style.bar_text}><CountUp delay={2} end={10} /> +</h3>
          
        </div>

        <div class={style.col}>
          <h3 class={style.bar_text}>Finished Projects</h3> 
          <img class={style.animation_icon} src={require("./images/projects.png")}  alt="wifi"/>

          <h3 class={style.bar_text}><CountUp delay={2} end={350} /> +</h3>
          
        </div>

        <div class={style.col}>
          <h3 class={style.right_title}>Certificates</h3> 
          <img class={style.animation_icon} src={require("./images/certificate.jpg")}  alt="wifi"/>
          <h3 class={style.bar_text}><CountUp delay={2} end={15}/> +</h3>
          
        </div>
      </div>

        </article>


      </section>

    </body>

    </React.Fragment>
  );
}

export default networkStorage;