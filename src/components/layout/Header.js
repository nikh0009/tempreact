import React from 'react';
import {Link} from 'react-router-dom';

function Header () {
  return (
    <header style={headerStyle}>
    <h1>"Nikhil's Todo list"</h1>
    <Link style={linkStyle} to='/'>Home</Link> |
    <Link style={linkStyle} to='/about'>About</Link>
    </header>
  )
}

const headerStyle = {
  background: '#333',
  color: '#ff5',
  textAlign: 'Center',
  padding: '10px 5px'
}

const linkStyle ={
  color: "#ff5",
  textDecoration: 'none'
}

export default Header;
