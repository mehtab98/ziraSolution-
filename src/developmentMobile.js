import React from 'react';
import CountUp from 'react-countup';
import './css/App.css';

import style from './css/genView.module.css';


import {Link} from 'react-router-dom';

function developmentMobile() {
  return (
    <React.Fragment>
  	  <header className={style.header_views}>     
            <img src={require("./images/web_dev.jpg")}  alt="fog over the bay"/>
      <div class={style.hero_text_net}>
        <h1>Mobile Development</h1>
      </div>
    </header>

    <body className={style.BodyView}>

      <section>
        
        <article className={style.article_view}>
          <h1 className={style.handle_genblue}>React Native</h1>
          <p class={style.handle_gentext}> Modern day technology has created a new mobile market. Learn how Zira Solution can help you grow in this emerging market. If you are considering building an application that will be utilized by both Android and iPhone users. We can help develop and deploy your application utilizing React Native. </p> 

          <p class={style.handle_gentext}> React Native lets you create truly native apps and doesn't compromise on your users' experience. It provides a core set of platform agnostic native components like View, Text, and Image that map directly to the platform’s native UI building blocks. The working principles of React Native are virtually identical to React except that React Native does not manipulate the DOM via the Virtual DOM. It runs in a background process (which interprets the JavaScript written by the developers) directly on the end-device and communicates with the native platform via a serialisation, asynchronous and batched Bridge.</p>
            
          <h1 className={style.handle_genblue}>Swift</h1> 
          <p class={style.handle_gentext}> If you would prefer to just create a tradiotnal iOS application, Zira Solutions mobile development team can utilize Swift programming language to help deploy your idea. </p> 
          <p class={style.handle_gentext}> Swift is a powerful and intuitive programming language for macOS, iOS, watchOS, tvOS and beyond. Swift is the result of the latest research on programming languages, Apple combined decades of experience building Apple platforms into this programming language. It is designed to make APIs in Swift easy to read and maintain. </p> 
          <p class={style.handle_gentext}> Apple intended Swift to support many core concepts associated with Objective-C, notably dynamic dispatch, widespread late binding, extensible programming and similar features, but in a "safer" way, making it easier to catch software bugs; Swift has features addressing some common programming errors like null pointer dereferencing and provides syntactic sugar to help avoid the pyramid of doom. By utilizing swift, we can gurantee you will have a fully functioning app for iOS.</p> 

          <p class={style.handle_gentext}> Our in house mobile development team can specializes in Swift. With over a 100 million iOS users in America, this framework is perfect for any North American company.</p> 
          <div class={style.container_animation}>
        <div class={style.inner_alignment}> 
          <div class={style.col}>
            <h2 class={style.wht_txt}><CountUp  delay={2} end={180} /> K</h2>
            <p class={style.container_text}> Web Applications are made with Node.JS</p> 
          </div>
          <div class={style.col}>
            <h2 class={style.wht_txt}><CountUp  delay={2} end={58} /> %</h2>
            <p class={style.container_text}> Reduction in development cost with Node.JS</p> 
          </div>
          <div class={style.col}>
            <h2 class={style.wht_txt}><CountUp  delay={2} end={47} /></h2>
            <p class={style.container_text}> projects were developed by Zira Solution Developers</p> 
          </div>
          <div class={style.col}> 
            <h2 class={style.wht_txt}><CountUp  delay={2} end={35} /> %</h2>
            <p class={style.container_text}>increase in performance with a JS framework</p> 
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

export default developmentMobile;