import React, { Component } from 'react'
import './../App.css'
import {ButtonToolbar, ToggleButtonGroup, ToggleButton, Container, Row, Col, Card, Accordion} from 'react-bootstrap'
import BotonToggle from './bitacoraComponents/botonToggle'
import AcordeonInfomacionDiaria from './bitacoraComponents/acordeonDatosInfomacionDiaria'
import AcordeonInfomacionSemanal from './bitacoraComponents/acordeonDatosInformacionSemanal'
import ModalConfirmacionTarea from './bitacoraComponents/modalConfirmacionTarea'
 const estadoInicial = {
   modalDeConfirmacionActivada:false,
   modalTareaCompletada:false,
   modalTareaEliminada:false,
   vistaDeDiaActivada:true
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
      modalTareaEliminada:false
     
    })}

  desactivarModal = () =>{this.setState({modalDeConfirmacionActivada:false})}

  cambiarVistaEnBitacora = (vistaActivada) =>{
    this.setState({ 
      vistaDeDiaActivada:vistaActivada
    })
  }
  
  render() {
       return(      
          <div>
             {
               this.state.modalDeConfirmacionActivada === true
               ?<ModalConfirmacionTarea 
               desactivarModal={()=>this.desactivarModal()}
               confirmacionCompletada={this.state.modalTareaCompletada}
               confirmacionEliminada={this.state.modalTareaEliminada}
               />
               :null
             }
              
              <Container>
                <Row>
                  <Col style={{ paddingTop:"20px" }} md={12} xs={12}>
                  <BotonToggle cambiarVistaEnBitacora={ (vistaActivada)=>this.cambiarVistaEnBitacora(vistaActivada) }/>
                  </Col>
                </Row>
              </Container>

              {
                this.state.vistaDeDiaActivada === true
                ?<AcordeonInfomacionDiaria  confirmacionCompletada={this.state.modalTareaCompletada} activarModalConfirmacion={(completada)=>this.activarModal(completada)}/>
                :<AcordeonInfomacionSemanal  confirmacionCompletada={this.state.modalTareaCompletada} activarModalConfirmacion={(completada)=>this.activarModal(completada)}/>
              }
             
          </div>
            )
  }
}





export default Bitacora;

