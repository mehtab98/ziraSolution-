import React, {useState, useEffect} from 'react';
import './css/App.css';
import style from './css/form.module.css';

import {Link} from 'react-router-dom'; 

function Shop() {
  return (
    <React.Fragment>
  	<header className={style.header_style}>
      <h1 className={style.h1_form}>Contact Us</h1>
    </header>

    <p className={style.handle_gentext}> We are glad you want to consider taking steps towards making your companies technology and infrastructure better. To help make this experience be catered exactly to your needs, please fill out our Consultation form. By understanding exactly what you are looking for, we can assemble the right tools and requirements suited for your network. One of our experienced team members will contact you soon with more information about how we can help take your experiene to the next level. </p>

    <body> 

      <section className={style.section_style}>       
         
          <form className={style.form_view}>
            
            <h1>Consultation Form</h1>
            <h4 className={style.sub_form_titles}>Client Information</h4>

            <label className={style.sub_form_titles} for="name"> Name: </label>

            <div className={style.form_inputs}> 
              <input className={style.input_style_l} type="text" id="name" name="name" placeholder="Firstname"></input>

              <input className={style.input_style}  type="text" id="name" name="name" placeholder="Lastname"></input>
            </div>

            <label className={style.sub_form_titles} for="service">Contact: </label>
            <div className={style.form_inputs}> 
              
                <input className={style.input_style_l} type="text" id="fname" name="firstname" placeholder="Phone Number"></input>

                <input className={style.input_style} type="text" id="fname" name="firstname" placeholder="Email"></input>
            </div>

            <h4 className={style.sub_form_titles}>Service Information</h4>  
            <div className={style.form_inputs}> 
              <select className={style.input_style_l} name="services" id="service">
                <option selected="selected" className={style.defaultChoice} value=""> choose a service</option>
                <option value="cloud">Cloud Services</option>
                <option value="Infrastructure">Infrastructure</option>
                <option value="development">Development</option>
              </select>


              <select className={style.input_style} name="services" id="service">
                <option selected="selected" className={style.defaultChoice} value=""> company size</option>
                <option value="cloud">Cloud Services</option>
                <option value="Infrastructure">Infrastructure</option>
                <option value="development">Development</option>
              </select>
            </div>
            <br></br>
            
            <textarea className={style.textbox_form} id="inquiry" name="inquiry">
              Any further information, required for inquiry.
              
            </textarea>


            <input className={style.button_size} type="submit" value="Submit" />
          </form>

      </section>

    </body>
    </React.Fragment>
  );
}

export default Shop;
