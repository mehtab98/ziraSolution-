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
        <h1>Development Services</h1>
      </div>
    </header>

    <body className={style.BodyView}>

      <section>
        <nav class={style.side_nav}>
          <ul style={sideNavUl}>
            <Link  to='/developmentBackend'>
              <li><button className={style.navButtons}>Backend Development</button></li>
            </Link>
            <Link to='/developmentWeb'> 
              <li><button className={style.navButtons}>Frontend Web Applications</button></li>
            </Link>

            <Link to='/developmentMobile'>
             <li><button className={style.navButtons}>Frontend Mobile Applications</button></li>
            </Link>
          </ul>
        </nav>

        <article className={style.article_view}>
          <h1 class={style.handle_title}>Backend Development</h1>
          <p class={style.handle_text}> Our in house Developers prefer to develop backend of their applications with a Node.js javascript environment. The Node.JS framework allows us to create effecient and scallable applications with a short turnaround time.</p>
          
          <p class={style.handle_text}> Our developers have the skillset to create RESTful APIs for your backend, and integrate third-party APIs with any previous application. The development team can design applications using either SQL or noSQL database. Furthermore, our team also has the skillset to develop scalable MicroService archeticture for your application utilizing Hapi.JS. When you work with ZiraSolution's backend development team, you'll be working with sharp-witted developers that have a motivating drive to excell applications. </p> 
            
          <h1 class={style.handle_title}>Frontend Web Applications</h1>
          <p class={style.handle_text}> Our developers prefer to work with a javascript framework on the front-end for web applications. Our in-house speciality is React.js, an emerging framework by Facebook, which allows us to render applications faster on the DOM. However, we can also provide frontend development in Angular.JS or HTML5.</p> 
          <p class={style.handle_text}> Whether you want to simply redesign your corporate website or create a web application from scratch. We can provide this service for you at competitve rates.</p> 
          
          <h1 class={style.handle_title}>Frontend Mobile Applications</h1> 
          <p class={style.handle_text}> Our main speciality in designing mobile applications is creating iOS applications with Apple's very own Swift programming language. If you are looking for applications for both iOS and Android, we can consider designing your application in REACT Native. Whether you have a buisness idea your trying to bring to reality or you have a application you want to bring to a mobile platform ZiraSolution's mobile team has a framework for you.</p> 

        </article>


      </section>

    </body>

    </React.Fragment>
  );
}

export default Developer;