import React from 'react';
import CountUp from 'react-countup';
import './css/App.css';
import style from './css/genView.module.css';


function cloudMigration() {
  return (
    <React.Fragment>
  	<header className={style.header_views}>     
      <img src={require("./images/sf_fog.jpg")}  alt="fog over the bay"/>
      <div class={style.hero_text_net}>
        <h1>Cloud Migration</h1>
        <p> Cloud migration may seem like a daunting task for companies accustomed to traditional data management, but it doesn’t have to be. Getting to the cloud seamlessly starts with the right partner. Rely on us to manage and maximize your cloud platform’s value, so that you can focus more on continuing to grow your business.</p> 
      </div>
    </header>

    <body className={style.BodyView}>

      <section>

        <article className={style.article_view}>
          <p class={style.handle_gentext}> Our cloud migration services handle the entire lifecycle with ease—offering a comprehensive solution for getting your business to the cloud, so you can start reaping the rewards of cloud infrastructure right away.</p> 
            
          <p class={style.handle_gentext}> Individual architecture built around our experts’ thorough analysis of your specific needs ensures your business derives the exact services required to function optimally, while remaining readily able to adapt to growth. In the short-term, our cloud services make it easy to execute, from a simple “lift and shift” of your business, to the migration and modernization of your applications and systems.</p>

          <p class={style.handle_gentext}>Our methodologies ensure your business achieves optimized IT, quickly and efficiently – making new system adaptation quick and painless.</p> 

          <p class={style.handle_gentext}>If your organization needs to move at a moderate pace, shifting individual business units over one at a time as proof of concept or handling migration at a speed that feels comfortable for your business is fine. No matter the preferred approach, our promise is to make your journey to the cloud seamless every step of the way, without worry of interruption, delay or data loss.</p> 

          <p class={style.handle_gentext}> We can help you move your workloads into the cloud – quickly and seamlessly. Our Azure/Aws migration services can allow you to embrace the benefits of the cloud – one step at a time. We will understand your specific business environment, identify data and applications that can benefit most from the Azure cloud, build a robust migration roadmap, tick items off the migration checklist, and take the required action to ensure you achieve the maximum return from your cloud investment.</p>

          <p class={style.handle_gentext}> With our cloud migration services, we can move your business to the cloud – quickly and efficiently. We offer a complete suite of AWS migration services, so your business receives the exact support and guidance required to function optimally. We build architectures based on a thorough analysis of your needs, while managing your workloads across the entire lifecycle, so you can reap maximum rewards from the AWS infrastructure.</p>

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


export default cloudMigration;