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
        <h1>Cloud Architecture</h1>
        <p> With the right cloud strategy and consulting services, an organization can elastically scale up or down to fit its ever-changing business needs.</p> 
      </div>
    </header>

    <body className={style.BodyView}>

      <section>
        
        <article className={style.article_view}>
          <h1 className={style.handle_gentext}>Cloud Strategy and Planning</h1>
          <p class={style.handle_gentext}> With the right cloud strategy and consulting services, an organization can elastically scale up or down to fit its ever-changing business needs. On-premise, managed servers are quickly approaching end-of-life, as viable platforms for business IT. The reasons are innumerable: Traditional physical servers take up precious space, require regular maintenance and updates, and operate on a constant basis—whether they are being actively utilized or not. We can help design the archeticeture for your product.</p> 
            
          <h1 className={style.handle_gentext}>Leverage Cloud for Business Growth</h1> 
          <p class={style.handle_gentext}> Shifting data from standard hardware to the cloud offers a multitude of benefits, from the nearly infinite expandability, which helps businesses future-proof their IT, to as-needed access modes that save money and eliminate the unnecessary network utilization inherent to outdated systems. Cloud-based IT also geographically disperses data, eliminating the need for customers to purchase hardware for maximum capacity scenarios.</p> 

          <h1 className={style.handle_gentext}>Proven Cloud Expertise</h1>
          <p class={style.handle_gentext}> Whether your business is thinking of making the leap, or you have already begun planning, our cloud strategy consulting services help optimize the process and keep your costs and downtime to a minimum. Our leading cloud experts have done this work for hundreds of companies – and know how to navigate the complex landscape and avoid pitfalls, while also allowing our customers the freedom to grow.</p> 
          <p class={style.handle_gentext}> You’ll be able to better leverage the cloud, analyze your current environment, identify gaps, plan for both your long- and short-term goals. Determine the best cloud providers for your distinct business requirements and build a custom cloud strategy that feels comfortable, worry-free and individually tailored to your unique needs.</p> 

          <h1 className={style.handle_gentext}>Consulting Services</h1>
          <p class={style.handle_gentext}> Our cloud strategy and planning services include, but are not limited to, the following:</p> 
          <ul className={style.bulletCol}>
            <div className={style.columns}>

              <div className={style.col1}> 
                <li className={style.bulletStyle}>Workload portfolio analysis</li>
                <li className={style.bulletStyle}>Benchmarking</li>
                <li className={style.bulletStyle}>Readiness</li>
                <li className={style.bulletStyle}>Assessments</li>
              </div>

              <div className={style.col2 }> 
                <li className={style.bulletStyle}>Data Management</li>
                <li className={style.bulletStyle}>Architecture Design</li>
                <li className={style.bulletStyle}>Total Cost of Ownership</li>
                <li className={style.bulletStyle}>Risk Mitigation Strategy</li>
              </div>

              <div className={style.col3}> 
                <li className={style.bulletStyle}>Business Case</li>
                <li className={style.bulletStyle}>Change Readiness</li>
                <li className={style.bulletStyle}>Deployment Roadmap</li>
                <li className={style.bulletStyle}>Cost Management</li>
              </div>

            </div> 
          </ul>  



          <p class={style.handle_gentext}> For businesses acclimatizing to or already in the cloud, our 24/7 help desk and self-service management solutions build enormous long-term value and ease of use into service packages. ZiraSoltuions removes the burden of troubleshooting and maintenance, by addressing IT concerns before they become IT problems.</p> 

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

export default operatingSystem;