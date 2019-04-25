import React from 'react'
import NavBar from './navbar'

export default (props) => {
  return (
    <div className="main">
      <NavBar/>
      {props.children}
    </div>
  );
};