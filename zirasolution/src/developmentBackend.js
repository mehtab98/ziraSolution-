import React from 'react';
import CountUp from 'react-countup';
import './css/App.css';

import style from './css/genView.module.css';

function developmentBackend() {
  return (
    <React.Fragment>
  	<header className={style.header_views}>     
            <img src={require("./images/web_dev.jpg")}  alt="fog over the bay"/>
      <div class={style.hero_text_net}>
        <h1>Backend Development</h1>
        <p>No matter how big or small your application is. You need a backend to process your data & with Node.js we can help.</p> 
      </div>
    </header>

    <body className={style.BodyView}>

      <section>
        
        <article className={style.article_view}>
          <h1 className={style.handle_gentext}>Node.JS</h1>
          <p class={style.handle_gentext}> Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser.</p> 

          <p class={style.handle_gentext}>Our team of developers have mastered JavaScript and can integrate Node.JS with your web application. Furthermore, our development team can help create a variety of CRUD operations and API's with your service for you. Furthermore, if your application needs third-party APIs integrating, we can help bring those integrations to reality.</p> 
            
          <h1 className={style.handle_gentext}>Databases</h1> 
          <p class={style.handle_gentext}>When it comes to databases there are a variety you can choose from. Our team can support both SQL and NoSQL database development. We can also architect data models for your current applications.</p> 

          <h4 className={style.handle_gentext}>SQL:</h4>
          <p class={style.handle_gentext}>SQL stands for Structure Query Language. It is a domain-specific language used in programming and designed for managing data held in a relational database management system (RDBMS), or for stream processing in a relational data stream management system (RDSMS). It is particularly useful in handling structured data, i.e. data incorporating relations among entities and variables.</p> 

          <p class={style.handle_gentext}>Their are two benefts of writing code in SQL. It introduced the concept of accessing many records with one single command. Secondly, it eliminates the need to specify how to reach a record, e.g. with or without an index.</p> 


          <h4 className={style.handle_gentext}>NoSQL:</h4>
         
          <p class={style.handle_gentext}> NoSQL stands for Non-Relational Structure Query Language.NoSQL databases are increasingly used in big data and real-time web applications. NoSQL systems are also sometimes called "Not only SQL" to emphasize that they may support SQL-like query languages or sit alongside SQL databases in polyglot-persistent architectures.</p> 
        
          <p class={style.handle_gentext}>Their are three benefts of integrating a NoSQL database.First its the simplicity of design, simpler "horizontal" scaling to clusters of machines. Secondly, it is more accurate of a database, as it provides finer control over availability and limiting the object-relational impedance mismatch.  Third, The data structures used by NoSQL databases, making some operations faster in NoSQL.</p> 


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


    <footer className="footer_view">
      <p>Footer</p>
    </footer>


    </React.Fragment>
  );
}

export default developmentBackend;