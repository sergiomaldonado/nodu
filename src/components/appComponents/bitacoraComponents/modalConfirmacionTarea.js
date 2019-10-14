import React, { Component } from 'react'
import './../../App.css'
import {ButtonToolbar, ToggleButtonGroup, ToggleButton, Container, Row, Col, Card, Accordion} from 'react-bootstrap'
import './styleBitacoraComponents.css'
const estadoInicial = {
   
}

class ModalConfirmacionTarea extends Component {
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
          <div className="modalConfirmacion">
              <h1>confirmar</h1>
          </div>
            )
  }
}





export default ModalConfirmacionTarea;

