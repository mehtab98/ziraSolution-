import React from 'react';
import CountUp from 'react-countup';
import './css/App.css';

import style from './css/genView.module.css';


import {Link} from 'react-router-dom';

function developmentBackend() {
  return (
    <React.Fragment>
  	<header className={style.header_views}>     
            <img src={require("./images/web_dev.jpg")}  alt="fog over the bay"/>
      <div class={style.hero_text_net}>
        <h1>Backend Development</h1>
      </div>
    </header>

    <body className={style.BodyView}>

      <section>
      
        <article className={style.article_view}>
          <h1 class={style.handle_genblue_big}>Node.JS</h1>
          <p class={style.handle_gentext}>No matter how big or small your application is. You need a backend to process your data & with Node.js we can help. Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser.</p> 

          <p class={style.handle_gentext}>Our team of developers have mastered JavaScript and can integrate Node.JS with your web application. Furthermore, our development team can help create a variety of CRUD operations and API's with your service for you. Furthermore, if your application needs third-party APIs integrating, we can help bring those integrations to reality.</p> 
          <h1 class={style.handle_genblue_big}>Databases</h1>
          <p class={style.handle_gentext}>When it comes to databases there are a variety you can choose from. Our team can support both SQL and NoSQL database development. We can also architect data models for your current applications.</p> 
          <h4 className={style.handle_genblue}>SQL:</h4>
          <p class={style.handle_gentext}>SQL stands for Structure Query Language. It is a domain-specific language used in programming and designed for managing data held in a relational database management system (RDBMS), or for stream processing in a relational data stream management system (RDSMS). It is particularly useful in handling structured data, i.e. data incorporating relations among entities and variables.</p> 

          <p class={style.handle_gentext}>Their are two benefts of writing code in SQL. It introduced the concept of accessing many records with one single command. Secondly, it eliminates the need to specify how to reach a record, e.g. with or without an index.</p> 


          <h4 className={style.handle_genblue}>NoSQL:</h4>
         
          <p class={style.handle_gentext}> NoSQL stands for Non-Relational Structure Query Language.NoSQL databases are increasingly used in big data and real-time web applications. NoSQL systems are also sometimes called "Not only SQL" to emphasize that they may support SQL-like query languages or sit alongside SQL databases in polyglot-persistent architectures.</p> 
        
          <p class={style.handle_gentext}>Their are three benefts of integrating a NoSQL database.First its the simplicity of design, simpler "horizontal" scaling to clusters of machines. Secondly, it is more accurate of a database, as it provides finer control over availability and limiting the object-relational impedance mismatch.  Third, The data structures used by NoSQL databases, making some operations faster in NoSQL. However, development time increases with NoSQL.</p> 



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
            <button className={style.consultButton}>Schedule a consultation</button>
      </Link>



      </section>

    </body>

    </React.Fragment>
  );
}

export default developmentBackend;