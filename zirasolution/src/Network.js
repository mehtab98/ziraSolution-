import React from 'react';
import './css/App.css';

import style from './css/genView.module.css';

function Network() {
  return (
    <React.Fragment>
  	<header className={style.header_views}>     
      <img src={require("./images/it_network.jpeg")}  alt="fog over the bay"/>
      <div class={style.hero_text_net}>
        <h1>Network Services</h1>
      </div>
    </header>

    <body className={style.BodyView}>

      <section>
        <nav class={style.side_nav}>
          <ul class={style.side_nav_ul}>
            <li><button className={style.navButtons}>Cloud Migrations</button> </li>
            
            <li><button className={style.navButtons}>Cloud Management</button></li>
            
            <li><button className={style.navButtons}>Cloud Architecture</button></li>
          </ul>
        </nav>

        <article className={style.article_view}>
          <h1>Cloud Migrations</h1>
          <p> The Cloud has finally come to the Bay Area! No longer do you need to have a large server space to run your applications, and store your data. Instead you can start shifting your services to the cloud, and start saving on overhead cost like space, electricity, and downtime. By migrating your services to the cloud you are making it even easier for your buisness to scale in the future. </p> 
            
          <p> Migrating buisness to the Cloud is Zira Solution's bread and butter. We can help shift your buisness to the cloud without having you experience any downtime. </p>

          <h1>Cloud Management</h1>
          <p> The Cloud has finally come to the Bay Area! No longer do you need to have a large server space to run your applications, and store your data. Instead you can start shifting your services to the cloud, and start saving on overhead cost like space, electricity, and downtime. By migrating your services to the cloud you are making it even easier for your buisness to scale in the future. </p> 
          <p> Migrating buisness to the Cloud is Zira Solution's bread and butter. We can help shift your buisness to the cloud without having you experience any downtime. </p>

        </article>


      </section>

    </body>


    <footer className="footer_view">
      <p>Footer</p>
    </footer>

    </React.Fragment>

  );
}


export default Network;