import React from 'react';
import CountUp from 'react-countup';
import './css/App.css';

import style from './css/genView.module.css';

import {Link} from 'react-router-dom';

function cloudManagement() {
  return (
    <React.Fragment>
  	<header className={style.header_views}>     
      <img src={require("./images/sf_fog.jpg")}  alt="fog over the bay"/>
      <div class={style.hero_text_net}>
        <h1>Cloud Management</h1>
      </div>
    </header>

    <body className={style.BodyView}>

      <section>

        <article className={style.article_view}>
           <p class={style.handle_gentext}> As a core part of our business, ZiraSolution’s cloud managmenent services represent the very best solution available in the independent cloud services industry. We are ideal for those businesses desiring a truly trouble-free and secure cloud experience. The service provides an alternative to Microsoft Azure and AWS, without sacrificing any of the flexibility, ease or functionality.</p> 

          <p class={style.handle_gentext}> We also handle compliance certifications that hyperscale providers simply will not, all done with an ease that only a fully managed platform with expert oversight and private service can achieve.Zirasolution’s managed cloud services address short- and long-term functionality, security and privacy concerns that might otherwise be a barrier to adopting a hyperscale cloud.</p> 
            
          <p class={style.handle_gentext}> Investing in managed cloud service provides more than just an hyperscale cloud benefit for your company. Partnering with the right MSP can not only help keep your infrastructure secure, but will also help you optimize costs, as well as save your company time, thus allowing you to focus on operational outcomes.</p>

          <p class={style.handle_gentext}>Leading hyperscale cloud services like AWS or Azure provide excellent, flexible, thoroughly modern enterprise-grade platforms, with a comprehensive range of features and benefits that get the job done for a great number of users. Still, these mega-platforms cannot provide the kind of close monitoring and management that certain organizations require.</p> 

          <p class={style.handle_gentext}>For these users, a better option may be managed private cloud services, which offer an elevated level of service and greatly enhanced security.</p> 

        <div class={style.container_animation}>
        <div class={style.inner_alignment}> 
          <div class={style.col}>
            <h2 class={style.wht_txt}><CountUp  delay={2} end={63} /> %</h2>
            <p class={style.container_text}> Of customers believe  cloud adoption is transformational</p> 
          </div>
          <div class={style.col}>
            <h2 class={style.wht_txt}><CountUp  delay={2} end={172} /></h2>
            <p class={style.container_text}> Clients have been migrated by Zira Solution Experts</p> 
          </div>
          <div class={style.col}>
            <h2 class={style.wht_txt}><CountUp  delay={2} end={75} /> %</h2>
            <p class={style.container_text}> U.S. corporations utilize a cloud-first strategy</p> 
          </div>
          <div class={style.col}> 
            <h2 class={style.wht_txt}><CountUp  delay={2} end={27} /> %</h2>
            <p class={style.container_text}>Of Reduction in on-site work is done by joining the cloud</p> 
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

export default cloudManagement;