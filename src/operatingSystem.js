import React from 'react';
import CountUp from 'react-countup';
import './css/App.css';

import style from './css/genView.module.css';

function operatingSystem() {
  return (
    <React.Fragment>
  	  	<header className={style.header_views}>     
      <img src={require("./images/it_network.jpeg")}  alt="fog over the bay"/>
      <div class={style.hero_text_net}>
        <h1>Operating System</h1>
        <p>No matter what Operating System your network uses or needs, we have the experience to cater to you.</p> 
      </div>
    </header>

    <body className={style.BodyView}>

      <section>
        
        <article className={style.article_view}>
          <p class={style.handle_gentext}> For your business to run smoothly, you must have complete confidence that your IT systems
have been deployed and are being administered and managed with a high degree of expertise
and efficiency.</p> 
            
          <p class={style.handle_gentext}> ZiraSolutions, delivers just what the name “managed IT systems” implies. We set up servers
dedicated to meet your business needs in one of our state-of-the-art data centers. This ensures
the highest level of security, availability, service, flexibility and scalability.</p> 
          <p class={style.handle_gentext}> Our managed operating system solution also comes with a high-level of professional support,
saving you time and money. Our managed IT systems services are structured to deliver the service you need, when you
need it, including:</p> 

           <ul className={style.bulletCol}>
            <div className={style.columns}>

              <div className={style.col1}> 
                <li className={style.bulletStyle}>Single point of contact</li>
                <li className={style.bulletStyle}>Guaranteed response time</li>
                <li className={style.bulletStyle}>24/7/365 monitoring of critical services</li>
              </div>

              <div className={style.col2 }> 
                <li className={style.bulletStyle}>Patch Updates</li>
                <li className={style.bulletStyle}>Remote support for resolution</li>
                <li className={style.bulletStyle}>Reporting for capacity planning</li>
              </div>
            </div> 
          </ul>  

          <h1 className={style.handle_gentext}>Available Operating System:</h1>
          <p class={style.handle_gentext}> ZiraSolutions’s infrastructure management services team provides the right support to ensure
that your investment will continue to pay dividends for many years to come.We also offer full, robust management of the following systems:</p> 
          <ul className={style.bulletCol}>
            <div className={style.columns}>

              <div className={style.col1}> 
                <li className={style.bulletStyle}>OS: Windows Servers</li>
                <li className={style.bulletStyle}>OS: Redhat</li>
                <li className={style.bulletStyle}>OS: Oracle</li>
                <li className={style.bulletStyle}>OS: CentOS</li>
              </div>

              <div className={style.col2 }> 
                <li className={style.bulletStyle}>OS: SuSe</li>
                <li className={style.bulletStyle}>Hypervisor: VMware</li>
                <li className={style.bulletStyle}>Hypervisor: Microsoft Hyper-V</li>
                <li className={style.bulletStyle}>Hypervisor: Oracle VM</li>
              </div>
            </div> 
          </ul>  


          <button className={style.consultButton}>Schedule a consultation</button>

        <div class={style.container_animation}>

          <div class={style.col}>
            <h2 class={style.wht_txt}><CountUp  delay={2} end={63} /> %</h2>
            <p class={style.container_textL}> Organizations believe that digital transformation is driven by cloud adoption</p> 
          </div>

          <div class={style.col}> 
          <h2 class={style.wht_txt}><CountUp  delay={2} end={27} /> %</h2>
            <p class={style.container_text}>Reduction in on-site work by joining the cloud</p> 
            
          </div>

          <div class={style.col}>
            <h2 class={style.wht_txt}><CountUp  delay={2} end={75} /> %</h2>
            <p class={style.container_text}> Orginizations utilize a cloud-first strategy</p> 
            
          </div>

          <div class={style.col}>
             
            <h2 class={style.wht_txt}><CountUp  delay={2} end={172} /></h2>
            <p class={style.container_textR}> Customers have been migrated by Zira Solution Experts </p> 
            
          </div>
      </div>

        </article>


      </section>

    </body>

    </React.Fragment>
  );
}

export default operatingSystem;