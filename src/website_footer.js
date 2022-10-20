import React from 'react';

import './css/App.css';

import style from './css/footer.module.css';

import {Link} from 'react-router-dom'; 

function website_footer() {
  return (
    <React.Fragment>


    <footer class={style.footer_view}>
      <div class={style.footer_row}>
          
          <div class={style.footer_column}>
            <h4 class={style.handle_text}>Contact Information</h4>
            <p class={style.handle_text}>46560 Fremont Blvd, Suite #111</p> 
            <p class={style.handle_text}>Fremont, CA 94538</p>
            <p class={style.handle_text}>TEL: (650) 206-4009</p>
          </div>

          <div class={style.footer_column}> 
            <h4 class={style.handle_text_r}>Quick Links</h4>
            <ul class={style.footer_links}>
              <Link  to='/shop'>
                <li class={style.link_stylez}>Contact Us</li>
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


export default website_footer;