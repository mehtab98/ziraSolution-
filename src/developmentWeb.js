import React from 'react';
import CountUp from 'react-countup';
import './css/App.css';

import style from './css/genView.module.css';


import {Link} from 'react-router-dom';
function developmentWeb() {
  return (
    <React.Fragment>
  	<header className={style.header_views}>     
            <img src={require("./images/web_dev.jpg")}  alt="fog over the bay"/>
      <div class={style.hero_text_net}>
        <h1>Frontend Web Development</h1>
        <p>Every buisness needs an engaing frontend design to attract users, with javascript frameworks we can help.</p> 
      </div>
    </header>

    <body className={style.BodyView}>

      <section>
        
        <article className={style.article_view}>
          <p class={style.handle_gentext}> Front-end web development, also known as client-side development is the practice of producing HTML, CSS and JavaScript for a website or Web Application so that a user can see and interact with them directly.The objective of designing a site is to ensure that when the users open up the site they see the information in a format that is easy to read and relevant. At Zira solution we take in providing you with an interactive frontend.</p> 

          <p class={style.handle_gentext}> Whether you have already started a project and need help improving the frontend or want to start a project from scratch out team has the skills in the following frameworks to help.</p> 
            
          <h1 className={style.handle_gentext}>Frontend Frameworks:</h1> 

          <h4 className={style.handle_gentext}>React.Js </h4>
          <p class={style.handle_gentext}>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.</p> 
          <p class={style.handle_gentext}>Another notable feature is the use of a virtual Document Object Model, or virtual DOM. React creates an in-memory data-structure cache, computes the resulting differences, and then updates the browser's displayed DOM efficiently. Our team has many experts in this framework and can easily produce a large scale web application with the JSX syntax. </p> 

          <h4 className={style.handle_gentext}>Vue.JS </h4>
          <p class={style.handle_gentext}> Vue is an open-source model–view–viewmodel JavaScript framework for building user interfaces and single-page applications. </p> 
          <p class={style.handle_gentext}> Vue.js features an incrementally adaptable architecture that focuses on declarative rendering and component composition. The core library is focused on the view layer only. Advanced features required for complex applications such as routing, state management and build tooling are offered via officially maintained supporting libraries and packages. Since it is a new framework development cycles are a little slower, but we can still develop applications in this Framework.</p> 

          <h4 className={style.handle_gentext}>Angular.JS </h4>
          <p class={style.handle_gentext}> AngularJS is a JavaScript-based open-source front-end web framework mainly maintained by Google and by a community of individuals and corporations to address many of the challenges encountered in developing single-page applications. It aims to simplify both the development and the testing of such applications. Since it was one of this first available Javscript frameworks, we can develop small scale applications easily with this framework.</p> 

          <h4 className={style.handle_gentext}>HTML</h4>
          <p class={style.handle_gentext}> HTML or Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.HTML can embed programs written in a scripting language such as JavaScript, which affects the behavior and content of web pages. </p> 
          <p class={style.handle_gentext}> If you want a simple static website, we can design a project for you in HTML. All of our developers have mastered this language and can easily help bring your website designs to life with this standard frontend language.</p> 
          <Link  to='/shop' class={style.link_style}> 
            <button className={style.consultButton}>Schedule a consultation</button>
          </Link>

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

export default developmentWeb;