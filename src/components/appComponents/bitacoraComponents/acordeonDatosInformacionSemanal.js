
import React, { Component } from 'react'
import './../../App.css'
import {ButtonToolbar, ToggleButtonGroup, ToggleButton, Container, Row, Col, Card, Accordion, Badge} from 'react-bootstrap'
import {Check,X} from 'react-feather';
import './styleBitacoraComponents.css'

 const estadoInicial = {
   
}

class AcordeonInfomacionSemanal extends Component {
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
                <div style={{ margin:"0 auto", textAlign:"center", fontWeight: 'normal', paddingTop:"10px" ,}}>
                    <Badge style={{ margin:"5px", backgroundColor:"#1BC6F7" }} pill variant="primary">Riego</Badge>
                    <Badge style={{ margin:"5px", backgroundColor:"#753D0C" }} pill variant="primary">Fertilizaciones</Badge>
                    <Badge style={{ margin:"5px", backgroundColor:"#490781" }} pill variant="primary">Fumigaciones</Badge>
                    <Badge style={{ margin:"5px", backgroundColor:"#7ED321" }} pill variant="primary">Cultivo</Badge>
                </div>    
           
                <Accordion style={{marginTop:"20px" }} defaultActiveKey="">
                  <Card className="acordeonCard" >
                     <Accordion.Toggle className="acordeonCard" style={ { backgroundColor:"#7ED321"} } as={Card.Header} eventKey="0">Lunes</Accordion.Toggle>
                       <Accordion.Collapse eventKey="0">
                        <Card.Body className="contenidoAcordeon">
                            <Container style={{ padding:"0px" }}>
                                <Row style={{ borderBottom:"solid 1px #E1DFDF", marginTop:"10px" }}>
                                       
                                       <Col md={2} xs={2} style={{ textAlign:"center" }}> <div style={{ width:"20px", height:"20px", backgroundColor:"#7ED321", borderRadius:"100%" }}></div></Col>
                                       <Col  md={8} xs={8}>
                                       <h5 style={{ color:"#595656" }}>10:00 am</h5>
                                       <p className="textTarea"> Contenido y horario de la tarea</p></Col>
                                       <Col md={2} xs={2} style={{ textAlign:"center" }}> <X onClick={()=>this.props.activarModalConfirmacion(false)} style={{ color:"red"}}/> </Col>
                                
                                </Row>

                            </Container>
                        </Card.Body>
                       </Accordion.Collapse>
                 </Card>
  
                 <Card className="acordeonCard" >
                     <Accordion.Toggle className="acordeonCard" style={ { backgroundColor:"#5EB902"} } as={Card.Header} eventKey="1">Martes</Accordion.Toggle>
                       <Accordion.Collapse eventKey="1">
                        <Card.Body className="contenidoAcordeon" >Hello! I'm another body</Card.Body>
                       </Accordion.Collapse>
                 </Card>
                 
                 <Card className="acordeonCard" >
                    <Accordion.Toggle className="acordeonCard" style={ { backgroundColor:"#7ED321"} } as={Card.Header} eventKey="3">Miercoles</Accordion.Toggle>
                       <Accordion.Collapse eventKey="3">
                        <Card.Body className="contenidoAcordeon" >Hello! I'm another body</Card.Body>
                    </Accordion.Collapse>
                 </Card>
  
                 <Card className="acordeonCard" >
                     <Accordion.Toggle className="acordeonCard" style={ { backgroundColor:"#5EB902"} } as={Card.Header} eventKey="4">Jueves</Accordion.Toggle>
                      <Accordion.Collapse eventKey="4">
                       <Card.Body className="contenidoAcordeon" >Hello! I'm another body</Card.Body>
                     </Accordion.Collapse>
                 </Card>

                 <Card className="acordeonCard" >
                     <Accordion.Toggle className="acordeonCard" style={ { backgroundColor:"#7ED321"} } as={Card.Header} eventKey="5">Viernes</Accordion.Toggle>
                      <Accordion.Collapse eventKey="5">
                       <Card.Body className="contenidoAcordeon" >Hello! I'm another body</Card.Body>
                     </Accordion.Collapse>
                 </Card>

                 <Card className="acordeonCard" >
                     <Accordion.Toggle className="acordeonCard" style={ { backgroundColor:"#5EB902"} } as={Card.Header} eventKey="6">Sabado</Accordion.Toggle>
                      <Accordion.Collapse eventKey="6">
                       <Card.Body className="contenidoAcordeon" >Hello! I'm another body</Card.Body>
                     </Accordion.Collapse>
                 </Card>

                 <Card className="acordeonCard" >
                     <Accordion.Toggle className="acordeonCard" style={ { backgroundColor:"#7ED321"} } as={Card.Header} eventKey="7">Domingo</Accordion.Toggle>
                      <Accordion.Collapse eventKey="7">
                       <Card.Body className="contenidoAcordeon" >Hello! I'm another body</Card.Body>
                     </Accordion.Collapse>
                 </Card>
                </Accordion>
                </div>
            )
  }
}





export default AcordeonInfomacionSemanal;

