import React, {useState, useEffect} from 'react';
import './css/App.css';
import style from './css/form.module.css';

import {Link} from 'react-router-dom'; 
import { steelblue } from 'color-name';

function Shop() {
  return (
    <React.Fragment>
  	<header className={style.header_style}>
      <h1 className={style.h1_form}>Contact Us</h1>
    </header>

    <body className={style.BodyView}> 

      <section className={style.section_style}>

        <article className={style.article_view}>
          <h1>Consultation Form</h1>
          <form className={style.article_view}>
          <h1>Name:</h1>
          <input type="text" id="fname" name="firstname" placeholder="Your name.."></input>
          <h1>Email:</h1>
          <input type="text" id="fname" name="firstname" placeholder="Your name.."></input>
          <h1>Phone number:</h1>
          <input type="text" id="fname" name="firstname" placeholder="Your name.."></input>


          <input type="submit" value="Submit" />
          </form>
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

export default Shop;
