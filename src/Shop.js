import React, {useState, useEffect} from 'react';
import './css/App.css';
import styles from './css/form.module.css';
import style from './css/genView.module.css';
import {Link} from 'react-router-dom'; 

import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput, MDBDropdownToggle, } from 'mdbreact';

import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

function Shop() {


  return (
    <React.Fragment>
    <header className={style.header_views}>     
      <img src={require("./images/sick_vista.jpg")}  alt="fog over the bay"/>
      <div class={style.hero_text_net}>
      <h1 class={styles.head_left}>Contact US</h1>
      </div>
    </header>
   
    <body className={styles.BodyView}> 

    <article className={style.article_view}>
      <p className={styles.handle_gentext}> We are glad you want to consider taking steps towards making your companies technology and infrastructure better. To help make this experience easy and catered exactly to your needs, please fill out our Consultation form. By understanding exactly what you are looking for, we can assemble the right tools and requirements suited for your network. One of our experienced team members will contact you soon with more information about how we can help take your experience to the next level. </p>
    

      <section className={style.section_style}>       
         
      <MDBContainer>
        <MDBRow>
          <MDBCol md="7">
            <form className={styles.form_card}>
              <div className="grey-text">

                <MDBInput label="Your name" icon="user" group type="text" validate error="wrong"
                  success="right" />
                <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong"
                  success="right" />
                <MDBInput label="Your phone" icon="mobile-alt" group type="email" validate error="wrong"
                  success="right" />
               
                <div > 
                <i class="fas fa-suitcase fa-2x"></i>
                <select className={styles.input_drop}>
                  <option selected> Choose a Service </option>
                  <option value="Cloud">Cloud</option>
                  <option value="Infrastructure">Infrastructure</option>
                  <option value="Development">Development</option>
                </select>
                </div>
    
                <MDBInput type="textarea" rows="2" label="Your message" icon="pencil-alt" />
              </div>
              <div className="text-center">
                <MDBBtn outline color="Indigo">
                  Send
                  <MDBIcon far icon="paper-plane" className="ml-1" />
                </MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
    </MDBContainer>

      </section>
      </article>
    </body>
    </React.Fragment>
  );

}

export default Shop;
