import React, { Component } from 'react'
import './../../App.css'
import {Card, Button} from 'react-bootstrap'
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
            <Card  style={{ width:"80%", margin:"0 auto", marginTop:"50%" }} className="text-center">
              <Card.Body>
               <Card.Title>Special title treatment</Card.Title>
               <Card.Text style={{ color:"black" }}>
                 {
                   this.props.confirmacionCompletada === true
                   ?<div>
                      <h5>¿Seguro que completaste esta tarea?</h5>
                      <p>Se enviara una notificación al creador de esta tarea</p>
                   </div>
                   :<div>
                      <h5>nada</h5>
                     
                   </div>
                 }
                </Card.Text>
              </Card.Body>
               <Card.Footer className="text-muted">
               <Button style={{marginRight:"5px"}}  variant="outline-secondary" onClick={ ()=>this.props.desactivarModal() }>Cancelar</Button>
               <Button style={{marginLeft:"5px"}} variant="success" onClick={ ()=>this.props.desactivarModal() }>Confirmar</Button>
               </Card.Footer>
            </Card>
       
          </div>
            )
  }
}





export default ModalConfirmacionTarea;

