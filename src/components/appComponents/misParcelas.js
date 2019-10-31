import React, { Component } from 'react'
import './../App.css'
import BotonToggle from './parcelasComponents/bottonToggle'
import ContenedorDeParcelas from './parcelasComponents/contenedorDeParcelas'
import {ButtonToolbar, ToggleButtonGroup, ToggleButton, Container, Row, Col, Card, Accordion} from 'react-bootstrap'
import MostradorDeParcela from './parcelasComponents/mostradorDeParcela'


  const estadoInicial = {
   modalDeConfirmacionActivada:false,
   modalTareaCompletada:false,
   modalTareaEliminada:false,
   vistaDeDiaActivada:true,
   dentroDeParcela:false
}

class MisParcelas extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...estadoInicial
    };
  }
  componentDidMount() { 
    
  }

  abrirParcela = (nombreParcela, abierto) =>{
    this.props.activarParcela(nombreParcela, abierto)
    this.setState({
      dentroDeParcela:true
    })

   
     
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
              this.props.vistaParcelaActivada === true
              ?<Container>
                <Row>
                  <Col style={{ paddingTop:"20px" }} md={12} xs={12}>
                  <BotonToggle cambiarVistaEnBitacora={ (vistaActivada)=>this.cambiarVistaEnBitacora(vistaActivada) }/>
                  </Col>
                </Row>
              </Container>
              :null 
            }
              

              {
                this.state.vistaDeDiaActivada === true
                ?<div>
                  {
                    this.props.vistaParcelaActivada === true
                    ?<ContenedorDeParcelas  abrirParcela={(nombreParcela)=>this.abrirParcela(nombreParcela, true)}/>
                    :<MostradorDeParcela/>
                  }
                
                </div>
                :<h2>2</h2>
              }
             
          </div>
            )
  }
}

export default MisParcelas;

