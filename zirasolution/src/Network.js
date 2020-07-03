import React from 'react';
import './css/App.css';

import style from './css/genView.module.css';
import {Link} from 'react-router-dom'; 

function Network() {

  const sideNavUl = {
    listStyleType: "none",
    lineHeight: "1000%",
    padding: "0"
  };

  return (
    <React.Fragment>
  	<header className={style.header_views}>     
      <img src={require("./images/it_network.jpeg")}  alt="fog over the bay"/>
      <div class={style.hero_text_net}>
        <h1>Infrastructure Services</h1>
      </div>
    </header>

    <body className={style.BodyView}>

      <section>
        <nav class={style.side_nav}>
          <ul style={sideNavUl}>
          <Link  to='/networkRoadMap'>
            <li><button className={style.navButtons}>Project Roadmap</button> </li>
          </Link> 
          <Link  to='/networkService'> 
            <li><button className={style.navButtons}>Network Management</button> </li>
          </Link> 
          <Link  to='/networkStorage'>
            <li><button className={style.navButtons}>Storage Management</button></li>
          </Link>
          <Link to='/networkSecurity'>
            <li><button className={style.navButtons}>Network Security</button></li>
          </Link> 
          <Link  to='/operatingSystem'> 
            <li><button className={style.navButtons}>Operating System</button> </li>
          </Link>
          </ul>
        </nav>

        <article className={style.article_view}>
          <h1>Project Roadmap</h1>          
          <p class={style.handle_gentext}> No matter how big or small your project is. Proper planning is necessary for a solid infrastructure. We have laid out the steps we would take in order to create a more solid infrastructer for your buisness. </p>
          <p class={style.handle_gentext}>You can get a better rundown of our development cycles we would implement at your buisness. Whether we are designing a integration with your team or taking over your whole network we follow the same desing principles and beliefs.</p>

          <h1>Network Management</h1>
          <p class={style.handle_gentext}> When you are trying to work in an enterprise network, keep the corporate network perforiming profeciently can be a hard and danting task.It is something that no one should try to tackle alone. With our network experts in the industry since the 1990s, the Zira Solution team has an expert for any style of network. We can help you design a network, but can also help manage it for you. So anytime you face a downtime we can have our experts come onsite and bring you back up. With our dedicated young team, we also offer on-site network support.</p> 
        
          <h1>Storage Management</h1>
          <p class={style.handle_gentext}>In this digital age, buisness have a lot of data that they collect. It is important to have a strong infrastructer to access this data at your fingertips. Whether you have a dated system or the latest storage system, our team has the expertise to let you gain access to your corporate data in a few seconds time.</p>

          <h1>Network Security</h1>
          <p class={style.handle_gentext}> Technology is always evolving and making systems more vulnerable to attacks. With our expertise in infrastructure, we can make sure you have the right tools to fight off any hacking attempts. With our experience in IT we have seen a lot of variety of attacks, and understand how to handle attacks, and prepare for any in the near future.</p>

          <h1>Operating System</h1>
          <p class={style.handle_gentext}> Modern day technology has designed a variety of operating systems for different buisness models. No matter what operating system you are utilizing we can provide support towards managing it. Even if you need a new operating system installed, we can provide you with the assistance in installing them.</p>

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