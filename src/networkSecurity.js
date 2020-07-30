import React from 'react';
import CountUp from 'react-countup';
import './css/App.css';

import style from './css/genView.module.css';


import {Link} from 'react-router-dom';

function networkSecurity() {

  return (
    <React.Fragment>
  	<header className={style.header_views}>     
      <img src={require("./images/sick_vista.jpg")}  alt="fog over the bay"/>
      <div class={style.hero_text_net}>
        <h1>Security Services</h1>
      </div>
    </header>

    <body className={style.BodyView}>

      <section>
        
        <article className={style.article_view}>
        <p class={style.handle_gentext}> Cyberthreats are on the rise & budgets are shrinking. Leave this vital task to a security services provider with experience.Our approach to our customers’ security is demonstrated in our managed security services framework. We base our work on the core principles of the CIA triad: Confidentiality, Integrity and Availability.</p> 
        
        <p class={style.handle_gentext}> Everything we do for our customers is built and managed to strict best practices that provide a level of operational excellence achieved through rigorous ITIL process and procedure, best-in-class technology, top-tier data centers and truly exceptional engineering talent.</p>
        <h1 className={style.handle_genblue}>Managed Detection & Response: </h1> 

        <p class={style.handle_gentext}> Security leaders need a cost-effective solution that detects and prevents intrusions, malware and other malicious activity. They need access to the latest threat research and analytics to separate the real threats from the noise. And they need 24/7 security experts who continually monitor their environments for threats and know what to do when they arise.  With OneNeck's Managed Detection and Response service, organizations get the always-on support they need.</p> 

        <p class={style.handle_gentext}> Our cloud strategy and planning services include, but are not limited to, the following:</p> 

        <ul className={style.bulletCol}>
            <div className={style.columns}>

            <div className={style.col1}> 
                <li className={style.bulletStyle}>Secure Sign-on</li>
                <li className={style.bulletStyle}>Firewall protection</li>
                <li className={style.bulletStyle}>Authentication</li>
              </div>

              <div className={style.col2}> 
                <li className={style.bulletStyle}>Encryption</li>
                <li className={style.bulletStyle}>VPN Archeticture</li>
                <li className={style.bulletStyle}>Back-up Storage</li>
              </div>

            </div> 
        </ul>  
        
        <p class={style.handle_gentext}> ZiraSolutions has partnered with Symantec to provide Managed Detection and Response capabilities to stretched IT teams who need to protect their organizations against security breaches. We bring together a unique combination of Endpoint’s award-winning SaaS security platform and continuous threat research and analytics, with our combined teams of round-the-clock security experts.</p>  

      <div class={style.container_animation}>
        <div class={style.inner_alignment}> 
          <div class={style.col}>
            <h2 class={style.wht_txt}><CountUp  delay={2} end={39} /> %</h2>
            <p class={style.container_text}> U.S. Corporations are vulernable to network attacks</p> 
          </div>
          <div class={style.col}>
            <h2 class={style.wht_txt}><CountUp  delay={2} end={90} /></h2>
            <p class={style.container_text}> Accounts use our security services</p> 
          </div>
          <div class={style.col}>
            <h2 class={style.wht_txt}><CountUp  delay={2} end={45} /> %</h2>
            <p class={style.container_text}> Stronger network security with Zira Solution</p> 
          </div>
          <div class={style.col}> 
            <h2 class={style.wht_txt}><CountUp  delay={2} end={86} /> %</h2>
            <p class={style.container_text}>Clients are comfortable with our support</p> 
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

export default networkSecurity;