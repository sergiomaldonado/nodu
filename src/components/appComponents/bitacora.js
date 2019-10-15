import React, { Component } from 'react'
import './../App.css'
import {ButtonToolbar, ToggleButtonGroup, ToggleButton, Container, Row, Col, Card, Accordion} from 'react-bootstrap'
import BotonToggle from './bitacoraComponents/botonToggle'
import Acordeon from './bitacoraComponents/acordeonDatos'
import ModalConfirmacionTarea from './bitacoraComponents/modalConfirmacionTarea'
 const estadoInicial = {
   modalDeConfirmacionActivada:false,
   modalTareaCompletada:false,
   modalTareaEliminada:false
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

  activarModal = (completada, eliminada) => {
    this.setState({
      modalDeConfirmacionActivada:true, 
      modalTareaCompletada:completada,
      modalTareaEliminada:eliminada
     
    })}

  desactivarModal = () =>{this.setState({modalDeConfirmacionActivada:false})}
  
  render() {
       return(      
          <div>
             {
               this.state.modalDeConfirmacionActivada === true
               ?<ModalConfirmacionTarea 
               desactivarModal={(completada, eliminada)=>this.desactivarModal(completada, eliminada)}
               confirmacionCompletada={this.state.modalTareaCompletada}
               confirmacionEliminada={this.state.modalTareaEliminada}
               />
               :null
             }
              
              <Container>
                <Row>
                  <Col style={{ paddingTop:"20px" }} md={12} xs={12}>
                  <BotonToggle/>
                  </Col>
                </Row>
              </Container>
             <Acordeon activarModalConfirmacion={()=>this.activarModal()}/>
          </div>
            )
  }
}





export default Bitacora;

