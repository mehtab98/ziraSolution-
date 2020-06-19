import React from 'react';

import './css/App.css';

function Network() {
  return (
    <React.Fragment>
  	<header>     
      <img src={require("./images/bay_area.jpg")}  alt="picture of bay area"/>
      <div class="hero-text">
    	  <h1>Unbeatable IT Support</h1>
    	  <h2>All across the Bay Area</h2>
  	  </div>
    </header>
    </React.Fragment>

  );
}


export default Network;