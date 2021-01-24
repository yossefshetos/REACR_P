import React, { Component } from 'react';
import Home from './../Home/index';
import About from './../About/index';
import Contact from './../Contact/index';
import Profile from './../Profile/index';
import Portfolio from './../Portfolio/index';
import SocialMedia from './../SocialMedia/index';
import Work from './../Work/index';
import Footer from './../Footer/index';

class Index extends Component {
  render() {

    return (
      <div className="Index">
        <Home />
        <Work />
        <Portfolio />
        <Profile />
        <About />
        <SocialMedia />
        <Footer />
      </div>
    );

  }
}

export default Index;
