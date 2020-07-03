import React from 'react';
import CountUp from 'react-countup';
import './css/App.css';

import style from './css/genView.module.css';

function networkService() {
  return (
    <React.Fragment>
  	  	<header className={style.header_views}>     
      <img src={require("./images/it_network.jpeg")}  alt="fog over the bay"/>
      <div class={style.hero_text_net}>
        <h1>Network Management</h1>
        <p> Planning and designing a highly functional and efficient IT infrastructure requires a lot like planning, designing
and proper architecture.</p> 
      </div>
    </header>

    <body className={style.BodyView}>

      <section>
        
        <article className={style.article_view}>
          <p class={style.handle_gentext}> Just like blueprints for a complex building, enterprise IT infrastructure management represents a
significant investment in your company’s future, and there’s no one-size-fits-all solution. In order to
ensure that your IT infrastructure suits your company’s needs now and will remain useful in the future,
your infrastructure must be optimized down to the last detail.</p> 
            

          <p class={style.handle_gentext}> At ZiraSolutions, this infrastructure management process begins by gaining a deep understanding of
your unique needs. By asking the right questions and getting a deep understanding of your
infrastructure, we are able to identify the critical requirements that will drive your infrastructure design.</p> 

          <p class={style.handle_gentext}> Our team has decades of experience with technology, systems and infrastructure initiatives
across many industries. We help our clients think strategically about the technology they use,
identify gaps, and recommend areas for improving productivity across business functions as
well as IT support and security. We serve as a resource that brings expertise on new
technologies and presents custom solutions for your business by building sound, expandable
foundational infrastructures that support corporate growth.</p> 

          <h1 className={style.handle_gentext}>Key technical components include:</h1>
          <ul className={style.bulletCol}>
            <div className={style.columns}>

              <div className={style.col1}> 
                <li className={style.bulletStyle}>Virtualizion Platforms</li>
                <li className={style.bulletStyle}>Server infrastructure</li>
                <li className={style.bulletStyle}>Operating systems</li>
                <li className={style.bulletStyle}>Storage network infrastructure</li>
              </div>

              <div className={style.col2 }> 
                <li className={style.bulletStyle}>Data Management</li>
                <li className={style.bulletStyle}>Outsource CIO Services</li>
                <li className={style.bulletStyle}>Software Planning</li>
                <li className={style.bulletStyle}>Software Adoption</li>
              </div>

              <div className={style.col3}> 
                <li className={style.bulletStyle}>Load balancing</li>
                <li className={style.bulletStyle}>IT Security</li>
                <li className={style.bulletStyle}>Cloud syncing</li>
                <li className={style.bulletStyle}>Network Monitoring</li>
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


    <footer className="footer_view">
      <p>Footer</p>
    </footer>


    </React.Fragment>
  );
}

export default networkService;