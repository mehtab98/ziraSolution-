import React from 'react';
import CountUp from 'react-countup';
import './css/App.css';

import style from './css/genView.module.css';

function networkSecurity() {

  return (
    <React.Fragment>
    <header className={style.header_views}>     
  <img src={require("./images/it_network.jpeg")}  alt="fog over the bay"/>
  <div class={style.hero_text_net}>
    <h1>Security Service</h1>
    <p>Cyberthreats are on the rise & budgets are shrinking. Leave this vital task to a security services provider with experience.</p> 
  </div>
</header>

<body className={style.BodyView}>

  <section>
    
    <article className={style.article_view}>
      <p class={style.handle_gentext}> Our approach to our customers’ security is demonstrated in our managed security services framework. We base our work on the core principles of the CIA triad: Confidentiality, Integrity and Availability.</p> 
        
      <p class={style.handle_gentext}> Everything we do for our customers is built and managed to strict best practices that provide a level of operational excellence achieved through rigorous ITIL process and procedure, best-in-class technology, top-tier data centers and truly exceptional engineering talent.</p> 

      <h1 className={style.handle_gentext}>Managed Detection & Response</h1>
      <p class={style.handle_gentext}> Security leaders need a cost-effective solution that detects and prevents intrusions, malware and other malicious activity. They need access to the latest threat research and analytics to separate the real threats from the noise. And they need 24/7 security experts who continually monitor their environments for threats and know what to do when they arise.  With OneNeck's Managed Detection and Response service, organizations get the always-on support they need.</p> 
      <p class={style.handle_gentext}> Security leaders need a cost-effective solution that detects and prevents intrusions, malware and other malicious activity. They need access to the latest threat research and analytics to separate the real threats from the noise. And they need 24/7 security experts who continually monitor their environments for threats and know what to do when they arise.</p> 

    
      <p class={style.handle_gentext}> Our cloud strategy and planning services include, but are not limited to, the following:</p> 
      
      <p class={style.handle_gentext}> ZiraSolutions has partnered with Symantec to provide Managed Detection and Response capabilities to stretched IT teams who need to protect their organizations against security breaches. We bring together a unique combination of Endpoint’s award-winning SaaS security platform and continuous threat research and analytics, with our combined teams of round-the-clock security experts.</p> 

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

export default networkSecurity;