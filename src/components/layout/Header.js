import React from 'react';

function Header () {
  return (
    <header style={headerStyle}>Nikhil Todo list</header>
  )
}

const headerStyle = {
  background: '#333',
  color: '#ff5',
  textAlign: 'Center',
  padding: '10px 5px'
}

export default Header;
