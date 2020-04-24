import React, { Component } from 'react';
import { BrowserRouter, Route} from "react-router-dom";
import NavBar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

class App extends Component {

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <NavBar/>
            {/* <Route exact path='/' component={}/>
            <Route exact path="/images" component={} />
            <Route exact path="/media" component={} />
            <Route exact path="/projects" component = {} /> */}
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
