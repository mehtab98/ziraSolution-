import React from 'react';

import './css/App.css';

import style from './css/genView.module.css';

import {Link} from 'react-router-dom'; 

function Cloud() {
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
          <ul class={style.side_nav_ul}>
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
            
          <p class={style.handle_text}> Migrating buisness to the Cloud is Zira Solution's bread and butter. We can help shift your buisness to the cloud without having you experience any downtime. </p>

          <h1 class={style.handle_title}>Cloud Management</h1>
          <p class={style.handle_text}> The Cloud has finally come to the Bay Area! No longer do you need to have a large server space to run your applications, and store your data. Instead you can start shifting your services to the cloud, and start saving on overhead cost like space, electricity, and downtime. By migrating your services to the cloud you are making it even easier for your buisness to scale in the future. </p> 
          <p class={style.handle_text}> Migrating buisness to the Cloud is Zira Solution's bread and butter. We can help shift your buisness to the cloud without having you experience any downtime. </p>

        </article>


      </section>

    </body>


    <footer className="footer_view">
      <p>Footer</p>
    </footer>

    </React.Fragment>

  );
}


export default Cloud;