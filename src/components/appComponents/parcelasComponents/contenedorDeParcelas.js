import React, { Component } from 'react'
import {ButtonToolbar, ToggleButtonGroup, ToggleButton, Container, Row, Col, Card, Accordion} from 'react-bootstrap'
import "./parcelasStyles.css"
import { ChevronRight} from 'react-feather';

  const estadoInicial = {
   
}

class ContenedorDeParcelas extends Component {
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

    const nombreParcela1 = "Lote Apolonio Compean"
    const nombreParcela2 = "Lote Don Checo"

       return(      
          <div>
              <Container>
                <Row>
               
                  <Col style={{ padding:"30px" }} md={12} xs={12}>
                         
                            <Row onClick={ ()=> this.props.abrirParcela(nombreParcela1) } className="cardParcelas">
                               
                                <Col style={{ padding:"0px" }} md={3} xs={3}> <img style={{ width:"100%", height:"100%" }} src="http://lorempixel.com/500/500/"></img>  </Col>
                                <Col  md={7} xs={7}>
                                <p className="parrafoNombre">Lote Apolonio Compean</p>
                                <p className="subParrafoPrincipal">Sorgo de 27 Semanas</p>
                                <p className="subParrafos" >Lat: 09 2930239 00</p>
                                <p className="subParrafos" >Lon: 023 452930239 00</p>
                                </Col>
                                <Col  md={2} xs={2}> <ChevronRight style={{ marginTop:"38px" }}/> </Col>
                              
                            </Row>
                            <Row onClick={ ()=> this.props.abrirParcela(nombreParcela2)} className="cardParcelas">
                               
                                <Col style={{ padding:"0px" }} md={3} xs={3}> <img style={{ width:"100%", height:"100%" }} src="http://lorempixel.com/500/500/"></img>  </Col>
                                <Col  md={7} xs={7}>
                                <p className="parrafoNombre">Lote Apolonio Compean</p>
                                <p className="subParrafoPrincipal">Sorgo de 27 Semanas</p>
                                <p className="subParrafos" >Lat: 09 2930239 00</p>
                                <p className="subParrafos" >Lon: 023 452930239 00</p>
                                </Col>
                                <Col  md={2} xs={2}> <ChevronRight style={{ marginTop:"38px" }}/> </Col>
                              
                            </Row>
                            
                            
                      
                     
                  </Col>
                 
                </Row>
              </Container>
          </div>
            )
  }
}

export default ContenedorDeParcelas;

