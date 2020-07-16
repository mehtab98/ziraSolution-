import React from 'react';

import './css/App.css';

import style from './css/genView.module.css';

import {Link} from 'react-router-dom'; 

function Cloud() {
  const sideNavUl = {
    listStyleType: "none",
    lineHeight: "1100%",
    padding: "0"
  };

  return (
    <React.Fragment>
  	<header className={style.header_views}>     
      <img src={require("./images/sf_fog.jpg")}  alt="fog over the bay"/>
      <div class={style.hero_text_net}>
        <h1>Cloud Services</h1>
      </div>
    </header>

    <body className={style.BodyView}>

      <section>
        <nav class={style.side_nav}>
          <ul style={sideNavUl}>
          <Link  to='/cloudMigration'>
            <li><button className={style.navButtons}>Cloud Migrations</button></li>
          </Link>
          <Link to='/cloudManagement'>
            <li><button className={style.navButtons}>Cloud Management</button></li>
          </Link>

          <Link to='/cloudArchitecture'> 
            <li><button className={style.navButtons}>Cloud Architecture</button></li>
          </Link>
          </ul>
        </nav>

        <article className={style.article_view}>
          <h1 class={style.handle_title}>Cloud Migrations</h1>
          <p class={style.handle_text}> The Cloud has finally come to the Bay Area! No longer do you need to have a large server space to run your applications, and store your data. Instead you can start shifting your services to the cloud, and start saving on overhead cost like space, electricity, and downtime. By migrating your services to the cloud you are making it even easier for your buisness to scale in the future. </p> 
            
          <p class={style.handle_text}> Migrating buisness to the Cloud is Zira Solution's bread and butter. We can help shift your buisness to the cloud without you experience any downtime. </p>

          <h1 class={style.handle_title}>Cloud Management</h1>
          <p class={style.handle_text}> With a large buisness, the cloud can require certain scaling and updates in the near future. With Zira's cloud management team, it can completed in a few simple steps. No longer do you have to spend countless ours managing your cloud. Our team can step in and immediately start helping you scale as well as managing your cloud. </p> 
          <p class={style.handle_text}> By joining with Zira's cloud mamangement team you can simply reduce cost by having us their as remote support. No longer will you need a onsite team. We can help takeover your exisiting cloud platform or even help add more applications to it. No matter how big or small your cloud is Zira Solution can manage your cloud.</p>

          <h1 class={style.handle_title}>Cloud Architecture</h1>
          <p class={style.handle_text}>We understand that sometimes, we do not really need a full-blown implementation of the cloud. Rather infrastructer teams just want to simply have a guidline of how to deploy themselves or do simple updates. Zira Solution can help design project Roadmaps for your infrastructer team, and get them developing on the right path.</p>
          <p class={style.handle_text}> Sometimes projects have a slow turnaround time because IT teams do not know where to begin. Our project roadmaps will help them from finish to start. If anywhere your team gets stuck they can simply contact us and we can help them get right back on track. With the experience Zira Solution has in cloud infrastructer the complex cloud can be understood in leimans terms.</p>

        </article>


      </section>

    </body>


    <footer class={style.footer_view}>
      <div class={style.footer_row}>
          
          <div class={style.footer_column}> 
            <h4 class={style.handle_text}>Cloud Management</h4>
            <p class={style.handle_text}>2570 North First Street, Suite #200</p>
            <p class={style.handle_text}> San Jose, CA 95131</p>
            <p class={style.handle_text}> TEL: (650) 206-4009</p>
            <p class={style.handle_text}> info@zirasolutions.com</p>
          </div>

          <div class={style.footer_column}> 
            <h4 class={style.handle_text}>Quick Links</h4>
            <ul class={style.footer_links}>

              <Link  to='/cloudMigration'>
                <li class={style.link_stylez}>Contact US</li>
              </Link>

              <Link  to='/about'>
                <li class={style.link_stylez}>About</li>
              </Link>

              <Link  to='/development'>
                <li class={style.link_stylez}>Development</li>
              </Link> 

              <Link  to='/network'>
                <li class={style.link_stylez}>Infrastructure</li>
              </Link>

            </ul>
          </div>
      </div> 
    </footer>

    </React.Fragment>

  );
}


export default Cloud;