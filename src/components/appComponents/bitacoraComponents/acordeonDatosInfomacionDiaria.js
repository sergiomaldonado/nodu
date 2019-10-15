
import React, { Component } from 'react'
import './../../App.css'
import {ButtonToolbar, ToggleButtonGroup, ToggleButton, Container, Row, Col, Card, Accordion} from 'react-bootstrap'
import {Check,X} from 'react-feather';
import './styleBitacoraComponents.css'

 const estadoInicial = {
   
}

class AcordeonInfomacionDiaria extends Component {
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
                <Accordion style={{marginTop:"20px" }} defaultActiveKey="">
                  <Card className="acordeonCard" >
                     <Accordion.Toggle className="acordeonCard" style={ { backgroundColor:"#1BC6F7"} } as={Card.Header} eventKey="0">Riegos</Accordion.Toggle>
                       <Accordion.Collapse eventKey="0">
                        <Card.Body className="contenidoAcordeon">
                            <Container style={{ padding:"0px" }}>
                                <Row style={{ borderBottom:"solid 1px #E1DFDF", marginTop:"10px" }}>
                                  
                                       <Col  md={8} xs={8}>
                                       <h5 style={{ color:"#595656" }}>10:00 am</h5>
                                       <p className="textTarea">Contenido y horario de la tarea</p></Col>
                                       <Col md={4} xs={4} style={{ textAlign:"center" }}> <Check onClick={()=>this.props.activarModalConfirmacion(true)} style={{ color:"green" }}/> <X onClick={()=>this.props.activarModalConfirmacion(false)} style={{ color:"red", marginLeft:"20px", }}/> </Col>
                                
                                </Row>
                                
                               
                                
                               
                            </Container>
                        </Card.Body>
                       </Accordion.Collapse>
                 </Card>
  
                 <Card className="acordeonCard" >
                     <Accordion.Toggle className="acordeonCard" style={ { backgroundColor:"#753D0C"} } as={Card.Header} eventKey="1">Fertilizaciones</Accordion.Toggle>
                       <Accordion.Collapse eventKey="1">
                        <Card.Body className="contenidoAcordeon" >Hello! I'm another body</Card.Body>
                       </Accordion.Collapse>
                 </Card>
                 
                 <Card className="acordeonCard" >
                    <Accordion.Toggle className="acordeonCard" style={ { backgroundColor:"#490781"} } as={Card.Header} eventKey="3">Fumigaciones</Accordion.Toggle>
                       <Accordion.Collapse eventKey="3">
                        <Card.Body className="contenidoAcordeon" >Hello! I'm another body</Card.Body>
                    </Accordion.Collapse>
                 </Card>
  
                 <Card className="acordeonCard" >
                     <Accordion.Toggle className="acordeonCard" style={ { backgroundColor:"#7ED321"} } as={Card.Header} eventKey="4">Cultivo</Accordion.Toggle>
                      <Accordion.Collapse eventKey="4">
                       <Card.Body className="contenidoAcordeon" >Hello! I'm another body</Card.Body>
                     </Accordion.Collapse>
                 </Card>
                </Accordion>
            )
  }
}





export default AcordeonInfomacionDiaria;

