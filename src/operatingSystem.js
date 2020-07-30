import React from 'react';
import CountUp from 'react-countup';
import './css/App.css';
import style from './css/genView.module.css';
import {Link} from 'react-router-dom';

function operatingSystems() {
  return (
    <React.Fragment>
  	<header className={style.header_views}>     
      <img src={require("./images/sick_vista.jpg")}  alt="fog over the bay"/>
      <div class={style.hero_text_net}>
        <h1>Operating Systems</h1>
      </div>
    </header>

    <body className={style.BodyView}>

      <section>
        
        <article className={style.article_view}>
          <p class={style.handle_gentext}>For your business to run smoothly, you must have complete confidence that your IT systems
          have been deployed and are being administered and managed with a high degree of expertise and efficiency. No matter what Operating System your network uses or needs, we have the experience to cater to you.</p> 
          <p class={style.handle_gentext}> ZiraSolutions, delivers just what the name “managed IT systems” implies. We set up servers
          dedicated to meet your business needs in one of our state-of-the-art data centers. This ensures the highest level of security, availability, service, flexibility and scalability.</p> 

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

              <div className={style.col2}> 
                <li className={style.bulletStyle}>Patch Updates</li>
                <li className={style.bulletStyle}>Remote support for resolution</li>
                <li className={style.bulletStyle}>Reporting for capacity planning</li>
              </div>

            
            </div> 
          </ul>  

          <h1 className={style.handle_genblue}>Available Operating System:</h1> 
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

              <div className={style.col2}> 
                <li className={style.bulletStyle}>OS: SuSe</li>
                <li className={style.bulletStyle}>Hypervisor: VMware</li>
                <li className={style.bulletStyle}>Hypervisor: Microsoft Hyper-V</li>
                <li className={style.bulletStyle}>Hypervisor: Oracle VM</li>
              </div>

            </div> 
          </ul>  

      <div class={style.container_animation}>
        <div class={style.inner_alignment}> 
          <div class={style.col}>
            <h2 class={style.wht_txt}><CountUp  delay={2} end={44} /> %</h2>
            <p class={style.container_text}> U.S. Corporations have dated operating systems</p> 
          </div>
          <div class={style.col}>
            <h2 class={style.wht_txt}><CountUp  delay={2} end={94} /></h2>
            <p class={style.container_text}> OS accounts have been handled by Zira Solution</p> 
          </div>
          <div class={style.col}>
            <h2 class={style.wht_txt}><CountUp  delay={2} end={40} /> %</h2>
            <p class={style.container_text}> Reduction in cost for clients joining Zira Solution</p> 
          </div>
          <div class={style.col}> 
            <h2 class={style.wht_txt}><CountUp  delay={2} end={37} /> %</h2>
            <p class={style.container_text}>Reduction in on-site work by updating your O.S.</p> 
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

export default operatingSystems;