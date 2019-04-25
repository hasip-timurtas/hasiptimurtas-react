import React, { Component } from 'react';
import Layout from './layout'
import Pics from './pics'
import Contact from './contact'

export default class Home extends Component {
 
  render() {
    // return 
    return (
      <Layout className="home"> 
          <Pics />
          <div className="container">
            <Contact />
          </div>
      </Layout>
        
    );
  }
}