import React from 'react';
import CountUp from 'react-countup';
import './css/App.css';

import style from './css/genView.module.css';


import {Link} from 'react-router-dom';

function networkStorage() {
  return (
    <React.Fragment>
  	<header className={style.header_views}>     
      <img src={require("./images/sick_vista.jpg")}  alt="fog over the bay"/>
      <div class={style.hero_text_net}>
        <h1>Storage Management</h1>
      </div>
    </header>

    <body className={style.BodyView}>

      <section>
        
        <article className={style.article_view}>
          <p class={style.handle_gentext}> Here at Zira Solutions, we’ll make sure that you always have the right solution to meet your business requirements. In fact, we strive to go beyond what today’s businesses demand from a managed IT services provider.</p> 
            
          <p class={style.handle_gentext}> Our managed storage services can help you ensure that your data is available anytime, anywhere. It is a perfect solution for dynamic businesses or those with a widely distributed workforce that need to access their data from multiple locations in a variety of time zones.</p> 

          <h1 className={style.handle_genblue}>Managed Cloud Azure/S3 Storage</h1>
          <p class={style.handle_gentext}>ZiraSolutions, can help manage your Azure storage environment, no matter what tier of storage or configuration you have in place today. Our team will provide management and oversight of your environment, 24/7, from initial design and deployment to operations support, along with recommendations for potential optimization within your environment.</p> 

          <h1 className={style.handle_genblue}>Legacy Managed Storage</h1>
          <p class={style.handle_gentext}>With our intimate knowledge of HPE,3PAR, Netapps or IBM Storage suite, you can trust ZiraSolutions to keep your storage arrays up-to-date and working at peak performance, so you can focus on your core business initiatives.</p> 

      <div class={style.container_animation}>
        <div class={style.inner_alignment}> 

          <div class={style.col}>
            <h2 class={style.wht_txt}><CountUp  delay={2} end={63} /> %</h2>
            <p class={style.container_text}> of customers believe cloud adoption is transformational</p> 
          </div>

          <div class={style.col}>
            <h2 class={style.wht_txt}><CountUp  delay={2} end={172} /></h2>
            <p class={style.container_text}> Projects have been handled by Zira Solution for Storage</p> 
          </div>

          <div class={style.col}>
            <h2 class={style.wht_txt}><CountUp  delay={2} end={40} /> %</h2>
            <p class={style.container_text}> Reduction in cost for clients joining Zira Solution</p> 
          </div>

          <div class={style.col}> 
            <h2 class={style.wht_txt}><CountUp  delay={2} end={27} /> %</h2>
            <p class={style.container_text}>Reduction in on-site work by managing storage on cloud</p> 
          </div>
      </div>
    </div> 


    </article> 

      <Link  to='/shop' class={style.link_style}> 
        <button className={style.consultButtonMain}>Schedule a consultation</button>
      </Link>

      </section>

    </body>

    </React.Fragment>
  );
}

export default networkStorage;