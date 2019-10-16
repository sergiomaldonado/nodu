import React, { Component } from 'react'
import './../../App.css'
import {Card, Button, Container, Row, Col, Form} from 'react-bootstrap'
import {X} from 'react-feather';
import './styleBitacoraComponents.css'
const estadoInicial = {
   
}
class ModalCreacionDeTarea extends Component {
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
          <div className="modalCreacionDeTarea">
            <Container style={{ padding:"20px" }}>
              <Row>
                      <Col md={10} xs={10}> <h3>Crear Tarea</h3></Col>
                      <Col md={2} xs={2}><X onClick={ ()=>this.props.cerrarModalCrearTarea(false) } size={30} style={{ marginTop:"5px", marginLeft:"-5px" }}/></Col>
              <Col style={{ paddingTop:"20px" }} md={12} xs={12}>
               <Form>
                 <Container>
                   <Row>
                     <Col md={12} xs={12}>
                     <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>¿Para que parcela es esta tarea?</Form.Label>
                    <Form.Control as="select">
                      <option>Lote Apolonio Compean</option>
                      <option>Lote Numero 2</option>
                    </Form.Control>
                 </Form.Group>
                     </Col>
                     <Col md={12} xs={12}>
                     <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Elige una categoria</Form.Label>
                    <Form.Control as="select">
                      <option>Riego</option>
                      <option>Fertilizacion</option>
                      <option>Fumigacion</option>
                      <option>Cultivo</option>
                    </Form.Control>
                 </Form.Group>

                     </Col>
                     <Col md={6} xs={6}>
                 <Form.Group controlId="exampleForm.ControlSelect1">
                 
                    <Form.Control as="select">
                      <option>Riego</option>
                      <option>Fertilizacion</option>
                      <option>Fumigacion</option>
                      <option>Cultivo</option>
                    </Form.Control>
                 </Form.Group>
                 </Col>
                 <Col md={6} xs={6}>
                 <Form.Group controlId="exampleForm.ControlSelect1">
                    
                    <Form.Control as="select">
                      <option>Riego</option>
                      <option>Fertilizacion</option>
                      <option>Fumigacion</option>
                      <option>Cultivo</option>
                    </Form.Control>
                 </Form.Group>
                 </Col>
                 
                 
                 <Col md={12} xs={12}>
                 <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Example textarea</Form.Label>
    <Form.Control as="textarea" rows="3" />
  </Form.Group>
                 </Col>
                 <Col md={12} xs={12}>
                     <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>¿Para que parcela es esta tarea?</Form.Label>
                    <Form.Control as="select">
                      <option>Lote Apolonio Compean</option>
                      <option>Lote Numero 2</option>
                    </Form.Control>
                 </Form.Group>
                     </Col>
                 
                
                   </Row>
                 </Container>
                 <Col md={12} xs={12}>
                 <Button variant="outline-success" size="lg" block> Guardar Tarea </Button>
                 </Col>

                
                
                 
                </Form>
              </Col>
            </Row>
          </Container>             
          </div>
            )
  }
}





export default ModalCreacionDeTarea;

