import React from 'react';

import './css/App.css';

import './css/cloud.css';


function Cloud() {
  return (
    <React.Fragment>
  	<header className="header-style">     
      <img src={require("./images/sf_fog.jpg")}  alt="fog over the bay"/>
      <div class="hero-text">

    	  <h1>Cloud services</h1>

  	  </div>
    </header>
    <body>
       
       <h1>Cloud Migrations</h1>
       <p> The Cloud has finally come to the Bay Area! No longer do you need to have a large server space to run your applications, and store your data. Instead you can start shifting your services to the cloud, and start saving on overhead cost like space, electricity, and downtime.By migrating your services to the cloud you are making it even easier for your buisness to scale in the future. </p> 
       <br> 
       </br>
       <p> Migrating buisness to the Cloud is Zira Solution's bread and butter. We can help shift your buisness to the cloud without having you experience any downtime. </p>
       <hr>
       </hr>
       <br>
       </br>
       <h1>Cloud Managment</h1>
    </body>
    </React.Fragment>

  );
}


export default Cloud;