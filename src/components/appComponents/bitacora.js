import React, { Component } from 'react'
import './../App.css'
import {ButtonToolbar, ToggleButtonGroup, ToggleButton, Container, Row, Col, Card, Accordion} from 'react-bootstrap'
import BotonToggle from './bitacoraComponents/botonToggle'
import Acordeon from './bitacoraComponents/acordeonDatos'
import ModalConfirmacionTarea from './bitacoraComponents/modalConfirmacionTarea'
 const estadoInicial = {
   
}

class Bitacora extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...estadoInicial
    };
  }
  componentDidMount() { 
    
  }
  
  render() {
       return(      
          <div>
              <ModalConfirmacionTarea/>
              <Container>
                <Row>
                  <Col style={{ paddingTop:"20px" }} md={12} xs={12}>
                  <BotonToggle/>
                  </Col>
                </Row>
              </Container>
             <Acordeon/>
          </div>
            )
  }
}





export default Bitacora;

