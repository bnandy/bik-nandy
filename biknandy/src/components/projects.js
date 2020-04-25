import React, { Component } from 'react';
import {Container, Row, Col, ListGroup} from 'react-bootstrap';
import icon from '../images/icon.png';

export default class Projects extends Component {
  render(){
    return(
      <div>
        <Container fluid>
          <div>
            <h1 className = "ml-3 mt-3"> Projects </h1>
          </div>
          <Row className = "pt-3 pl-3">
            <Col lg={8} sm={12} md={12} className = "px-4">
              <ListGroup>
                <ListGroup.Item action href = "https://github.com/andrewdoanutz/No-Cap-Stone">
                  <div className = "flex-display">
                    <div className = "mr-4">
                      <img height = "100" width = "100" src={icon} alt="icon" />
                    </div>
                    <div>
                      <h3> BestFaceForward: UCSB CS Capstone 2nd Place </h3>
                    </div>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
          <Row>

          </Row>
        </Container>
      </div>
    )
  }
}
