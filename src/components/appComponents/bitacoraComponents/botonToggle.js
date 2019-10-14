
import React, { Component } from 'react'
import './../../App.css'
import {ButtonToolbar, ToggleButtonGroup, ToggleButton, Container, Row, Col, Card, Accordion} from 'react-bootstrap'

 const estadoInicial = {
   
}

class BotonToggle extends Component {
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
          <ButtonToolbar style={{ margin:"0 auto !Important" }}>
          <ToggleButtonGroup   type="radio" name="options" defaultValue={1}>
          <ToggleButton value={1}> Hoy </ToggleButton>
          <ToggleButton value={2}> Semana</ToggleButton>
          </ToggleButtonGroup>
          </ButtonToolbar>
            )
  }
}





export default BotonToggle;

