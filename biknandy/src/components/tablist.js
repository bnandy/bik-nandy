import React, {Component} from 'react';
import {Navbar, Nav} from 'react-bootstrap';

import "../css/navbar.css"

export default class TabList extends Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg= "dark" variant="dark">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              {
                this.props.tabs.map((tab)=>(
                  <Nav.Link>{tab.title}</Nav.Link>
                ))
              }
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}
