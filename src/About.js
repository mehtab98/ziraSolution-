import React from 'react';
import CountUp from 'react-countup';
import './css/App.css';



import {Link} from 'react-router-dom';

import styles from './css/home.module.css';
import style from './css/genView.module.css';

function About() {
  return (
    <React.Fragment>
  	<header className={style.header1}>     
      <img className={style.background_pic} src={require("./images/about_us.jpg")}  alt="fog over the bay"/>
      <div class={style.hero_text_net_t}>
      </div>
    </header>
    <h1 class={style.head_left}>About Us</h1>
    <body className={style.BodyView}>
      <section>
        <article className={style.article_view}>
          <p class={style.handle_gentext}> Zira Solutions promises you the right expertise and an unrelenting commitment to manage your technology services, there is nothing we take more importantly than providing an exceptional service experience. Through every interaction with our clients, our team truly cares and is passionate about building long-term relationship. We take the responsibility that comes with managing your IT systems and hope to drive your business forward. When you work with Zira Solutions, you are part of our family.</p> 

          <p class={style.handle_gentext}> Based in Fremont, CA and support offices in Canada and India, Zira Solutions has more than 7 years of successful IT experience. We know how to architect and implement scalable solutions for multinational companies in energy, telecommunication, networking, legal, financial and retail sectors.</p> 
          <p class={style.handle_gentext}>The global team at Zira Solutions, is formed of product visionaries and technology evangelists who completely understand the IT ecosystem. We understand the demanding needs of corporate users working in a fast paced organization. Our company promises you the right expertise and unrelenting commitment to manage your technology services. With our breadth of knowledge, experience, and economical systems in place we believe companies like yours will be able to capitalize.</p> 

          <p class={style.handle_gentext}> Whether it’s a classic mom or pop shop or the next Silicon Valley startup, we can help deploy new software or support your exisiting buisness.</p> 
          
      <div class={styles.finesse_animation}>
        <div class={styles.col}>
        <h3 class={styles.left_title}>Years in buisness</h3> 
          <img class={styles.animation_icon} src={require("./images/biz_icon.png")}  alt="wifi"/>
          <div class={styles.render_left}> 
            <h3 class={styles.render}><CountUp  delay={2} end={7} />+</h3>
          </div>
        </div>

        <div class={styles.col}>
        <h3>Customers</h3>
          <img class={styles.animation_icon} src={require("./images/team_m.jpg")}  alt="wifi"/> 
          <div class={styles.render_mid}> 
          <h3 class={styles.render}>
            <CountUp delay={2} end={10} />+
          </h3>
          </div> 
        </div>

        <div class={styles.col}>
          <h3>Finished Projects</h3> 
          <img class={styles.animation_icon} src={require("./images/projects.png")}  alt="wifi"/>

          <div class={styles.render_third}> 
            <h3><CountUp delay={2} end={350}/></h3> 
            <h3 class={styles.plus_pushed}>+</h3>
          </div>
          
        </div>

        <div class={styles.col}>
          <h3 class={styles.right_title}>Certificates</h3> 
          <img 
class={styles.animation_icon} src={require("./images/certificate.jpg")}  alt="wifi"/>
          <div class={styles.render_last}>
            <h3 class={styles.render}><CountUp delay={2} end={15}/>+</h3>
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


export default About;
