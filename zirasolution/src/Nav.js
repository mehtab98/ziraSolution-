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

  return (
    <nav>

      <Link style={linkStyle} to='/'>   
      	<h3 style={navStyles} > Zira Solution </h3> 
      </Link> 

      <ul className = "nav-links">  
      	
      	<Link style={linkStyle} to='/about'>   
      		<li style={navStyles}>About</li>
      	</Link> 

        <Link style={linkStyle} to='/cloud'>
      		<li style={navStyles}>Cloud</li>
      	</Link>

        <Link style={linkStyle} to='/network'>
      		<li style={navStyles}>Network</li>
      	</Link>

        <Link style={linkStyle} to='/development'>
      		<li style={navStyles}>Development</li>
      	</Link>


      	<Link style={linkStyle} to='/shop'>
      		<li style={navStyles}>Contact US</li>
      	</Link>

      </ul> 	 
    </nav>
  );
}

export default Nav;