import React, { Component } from 'react';
import { BrowserRouter, Route} from "react-router-dom";
// import NavBar from './components/navbar';
import './css/style.css'
import TabList from './components/tablist'
import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

class App extends Component {
  constructor(){
    super();
    this.state= {
      activeTab: 1
    }
  }

  render() {
    const tabs = [
      {id: 1, title: "Home"},
      {id: 2, title: "Images"},
      {id: 3, title: "Media"},
      {id: 4, title: "Projects"}
    ]
    return (
      <div>
        <div>
          <TabList tabs={tabs}/>
        </div>

        <div>

        </div>
        {/* <BrowserRouter>
          <div>
            {/*<NavBar/>
            {/* <Route exact path='/' component={}/>
            <Route exact path="/images" component={} />
            <Route exact path="/media" component={} />
            <Route exact path="/projects" component = {} />

        </BrowserRouter> */}

      </div>
    )
  }
}

export default App;
