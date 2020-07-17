import React from 'react';
import CountUp from 'react-countup';
import './css/App.css';

import style from './css/columnView.module.css';
import styles from './css/genView.module.css'; 

function networkRoadMap() {
  return (
    <React.Fragment>
  	<header className={style.header_views}>     
      <img src={require("./images/it_network.jpeg")}  alt="fog over the bay"/>
      <div class={style.hero_text_net}>
        <h1>Project Roadmap</h1>
        <p>We take every project with serious consideration. We have higlighted the steps we take when it comes to designing your infrastructure</p> 
      </div>
    </header>

    <body className={style.BodyView}>

      <section>
        
        <article className={style.article_view}>
        <h1 className={style.handle_gentext}>Step 1: Assessment</h1>
          <p class={style.handle_gentext}> We take the time to learn your business needs. To become a strong business partner for your
organization, we explore the following questions:</p>

          <ul class={style.bulletStyle}> 
            <li> What are your business goals?</li>
            <li> What role does technology play in the organization? </li>
            <li> How can technology enhance your operations?</li> 
          </ul>

          <h1 className={style.handle_gentext}>Step 2: Report Our Findings</h1>
          <p class={style.handle_gentext}>We share our candid assessment of challenges and opportunities and use this understanding to
develop a holistic technology strategy and prioritize solutions. This is a collaborative process with
your leadership team allowing our professionals to confirm their knowledge of your business and
operational goals.</p> 

          <h1 className={style.handle_gentext}>Step 3: Roadmap Designed</h1>
          <p class={style.handle_gentext}>From our discussions, we create a road-map of high level projects to be completed with mutually
agreed upon timelines. This conversation includes a discussion of budget for immediate and
longer term projects.</p> 

          <h1 className={style.handle_gentext}>Step 4: Alignment</h1>
          <p class={style.handle_gentext}>We will provide a Statement of Work to ensure we are aligned with expectations and then begin
the on-boarding process. We believe in clear communication at every step of the process and
transparency in the cost of our services.</p> 
          <h1 className={style.handle_gentext}>Step 5: Onboarding</h1>
          <p class={style.handle_gentext}>As part of the managed services contract, we provide a detailed onboarding process which
generally happens 2-4 weeks prior to going live. The process timeline depends on your
organization’s complexity and technology requirements. We gather information on current
software applications, equipment, infrastructure and security that we will support and document
this for easy access. During the onboarding process:</p>  
          <ul class={style.bulletStyle}> 
            <li> We assign a client service manager and technical team to support your business</li>
            <li> Technical teams shares knowledge and understanding of your business systems with the technical support team</li>
            <li> We create a complete inventory of your systems, network and operations</li> 
          </ul>
          <h1 className={style.handle_gentext}>Step 6: Go Live</h1> 
          <p class={style.handle_gentext}>Once a go-live date is established, the ZiraSolution’s Technology account team will meet with
you to walk through the transition plan to set expectations, establish communication tools and
agree on milestones to ensure a smooth process.</p>  
            <p class={style.handle_gentext}>Our client service professionals will check in regularly becoming an extension of your team. They
will stay updated on changes to your organization and provide a quarterly review of services to highlight benchmarks made from our roadmap</p>  


          <button className={style.consultButton}>Schedule a consultation</button>

          <div class={styles.container_animation}>
        <div class={styles.col}>
        <h3 class={styles.left_title}>Years in buisness</h3> 
          <img class={styles.animation_icon} src={require("./images/biz_icon.png")}  alt="wifi"/>
          <h3 class={styles.bar_text}><CountUp  delay={2} end={15} /> +</h3>
          
        </div>

        <div class={styles.col}>
        <h3 class={styles.bar_text}>Team Members</h3>
          <img class={styles.animation_icon} src={require("./images/team_m.jpg")}  alt="wifi"/> 
          <h3 class={styles.bar_text}><CountUp delay={2} end={10} /> +</h3>
          
        </div>

        <div class={styles.col}>
          <h3 class={styles.bar_text}>Finished Projects</h3> 
          <img class={styles.animation_icon} src={require("./images/projects.png")}  alt="wifi"/>

          <h3 class={styles.bar_text}><CountUp delay={2} end={350} /> +</h3>
          
        </div>

        <div class={styles.col}>
          <h3 class={styles.right_title}>Certificates</h3> 
          <img class={styles.animation_icon} src={require("./images/certificate.jpg")}  alt="wifi"/>
          <h3 class={styles.bar_text}><CountUp delay={2} end={15}/> +</h3>
          
        </div>
      </div>

        </article>


      </section>

    </body>

    </React.Fragment>
  );
}

export default networkRoadMap;