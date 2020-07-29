import React from 'react';

import './css/App.css';

import style from './css/genView.module.css';

import {Link} from 'react-router-dom'; 

function Developer() {
  const sideNavUl = {
    listStyleType: "none",
    lineHeight: "1100%",
    padding: "0"
  };

  
  return (
<React.Fragment>
  	<header className={style.header_views}>     
    <img src={require("./images/web_dev.jpg")}  alt="fog over the bay"/>
      <div class={style.hero_text_net}>
        <h2 class={style.overview_title}>Development Services</h2>
      </div>
    </header>
    <body className={style.BodyView}>
      <section>
        <article className={style.article_view_over}>
        <Link className={style.general_link} to='/developmentBackend'> 
          <h1 class={style.handle_title_overview}>Backend Development</h1>
        </Link> 
        <p class={style.handle_gentext}>Our in house Developers prefer to develop backend of their applications with a Node.js javascript environment. The Node.JS framework allows us to create effecient and scallable applications with a short turnaround time.</p>
          
        <p class={style.handle_gentext}>Our developers have the skillset to create RESTful APIs for your backend, and integrate third-party APIs with any previous application. The development team can design applications using either SQL or noSQL database. Furthermore, our team also has the skillset to develop scalable MicroService archeticture for your application utilizing Hapi.JS. When you work with ZiraSolution's backend development team, you'll be working with sharp-witted developers that have a motivating drive to excell applications.<a class={style.learn_more} href="/developmentBackend"> learn more</a> </p> 

        <Link className={style.general_link} to='/developmentWeb'> 
          <h1 class={style.handle_title_overview}>Frontend Web Applications</h1>
        </Link> 
          <p class={style.handle_gentext}> When you are trying to work in an enterprise network, keep the corporate network perforiming profeciently can be a hard and danting task.It is something that no one should try to tackle alone. With our network experts in the industry since the 1990s, the Zira Solution team has an expert for any style of network. We can help you design a network, but can also help manage it for you. So anytime you face a downtime we can have our experts come onsite and bring you back up. With our dedicated young team, we also offer on-site network support. <a class={style.learn_more} href="/networkService"> learn more</a></p>  

        <Link className={style.general_link} to='/developmentMobile'> 
          <h1 class={style.handle_title_overview}>Frontend Mobile Applications</h1>
        </Link> 
          <p class={style.handle_gentext}>In this digital age, buisness have a lot of data that they collect. It is important to have a strong infrastructer to access this data at your fingertips. Whether you have a dated system or the latest storage system, our team has the expertise to let you gain access to your corporate data in a few seconds time. <a class={style.learn_more} href="/developmentMobile"> learn more</a></p>

        </article>

        <Link  to='/shop' class={style.link_style}> 
            <button className={style.consultButton}>Schedule a consultation</button>
        </Link>
      </section>

    </body>
    </React.Fragment>
  );
}

export default Developer;