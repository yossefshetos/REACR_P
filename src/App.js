import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Navbar from './components/Navbar/index';
import Index from './components/Index/Index';
import Contact from './components/Contact/index';

class App extends Component {
  render() {

    return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Route exact path="/" component={Index} />
          <Route path="/contact" component={Contact} />
        </BrowserRouter>
      </div>
    );

  }
}

export default App;
