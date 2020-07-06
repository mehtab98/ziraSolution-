import React, {useState, useEffect} from 'react';
import './css/App.css';
import style from './css/genView.module.css';
import CountUp from 'react-countup';
function Shop() {
  useEffect(() => {
  	
  })
  const fetchItems = async () =>{
  	const data = await fetch('')
  }
  return (
    <React.Fragment>
  	  	<header className={style.header_views}>     
      <img src={require("./images/it_network.jpeg")}  alt="fog over the bay"/>
      <div class={style.hero_text_net}>
        <h1>Contact US</h1>
        <p> Tell us what your form of consultation you are looking for & we can soon be in contact.</p> 
      </div>
    </header>







    <footer className="footer_view">
      <p>Footer</p>
    </footer>


    </React.Fragment>
  );
}

export default Shop;
