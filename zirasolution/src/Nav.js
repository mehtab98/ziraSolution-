import React from 'react';

import './css/App.css';


import {Link} from 'react-router-dom'
function Nav() {

  const navStyles = { 
    color: 'white',
    textDecoration: 'none'
  };

  const linkStyle = {
    textDecoration: 'none'
  };

  const inLink = {
    fontSize: "11px",
    width: "160px"
  }
  const contactButton ={ 
    backgroundColor: "#e7e7e7", 
    border: "none",
    color: "black",
    padding: "7px 14px",
    textAlign: "center",
    textDecoration: "none",
    display:"inline-block",
    fontSize: "14px",
    borderRadius: "12px"
  };


  

  return (
    <nav>

      <Link style={linkStyle} to='/'>   
      	<h3 style={navStyles} > Zira Solutions </h3> 
      </Link> 

      <ul className = "nav-links">  
      	
      	<Link style={linkStyle} to='/about'>  
          <button className="dropbtn">About</button> 
      	</Link> 


        
        <div className="dropdown">
          <button className="dropbtn">Cloud Services</button>
          <div className="dropdown-content">
            <Link style={linkStyle} to='/cloudMigration'>
              <a style= {inLink}>Cloud Migration</a>
            </Link>
            <Link style={linkStyle} to='/cloudManagement'>
              <a style= {inLink}>Cloud Management</a>
            </Link>
            <Link style={linkStyle} to='/cloudArchitecture'>
              <a style= {inLink}>Cloud Architecture</a>
            </Link> 

          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn">Development</button>
          <div className="dropdown-content">
            
            <Link style={linkStyle} to='/developmentBackend'>
              <a style= {inLink}>Backend Development</a>
            </Link>

            <Link style={linkStyle} to='/developmentWeb'>
              <a style= {inLink}>Frontend Web Development</a>
            </Link>

            <Link style={linkStyle} to='/developmentMobile'>
              <a style= {inLink}>Frontend Mobile Development</a>
            </Link> 

          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn">Infrastructure</button>
          <div className="dropdown-content">
            <Link style={linkStyle} to='/networkRoadMap'>
              <a style={inLink}>Project Roadmap</a>
            </Link>
            <Link style={linkStyle} to='/networkService'>
              <a style={inLink}>Network Management</a>
            </Link>
            <Link style={linkStyle} to='/networkStorage'>
              <a style={inLink}>Storage Management</a>
            </Link>
            <Link style={linkStyle} to='/networkSecurity'>
              <a style={inLink}>Network Security</a>
            </Link> 
            <Link style={linkStyle} to='/operatingSystem'>
              <a style={inLink}>Operating System</a>
            </Link>
          </div>
        </div>

        <Link style={linkStyle} to='/shop'> 
          <li style={navStyles}><a href="./Developer">
            <button style={contactButton}>CONTACT US</button></a></li>
      	</Link> 
      </ul> 	 
    </nav>
  );
}

export default Nav;