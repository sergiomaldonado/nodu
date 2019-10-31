import React, { Component } from 'react'
import {ButtonToolbar, ToggleButtonGroup, ToggleButton, Container, Row, Col, Card, Accordion, Button} from 'react-bootstrap'
import "./parcelasStyles.css"
import { ChevronRight} from 'react-feather';

  const estadoInicial = {
   
}

class MostradorDeParcela extends Component {
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
        <Container style={{ padding:"0px 0px 0px", }}>
            <Row>
                <Col md={12} xs={12}>
                  <Card style={{ width: '100%',border:"0px", borderRadius:"0px" }}>
                    <Card.Img variant="top" src="http://lorempixel.com/400/200/" />
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                          <Card.Text>
                              Some quick example text to build on the card title and make up the bulk of
                               the card's content.
                        </Card.Text>
                          <Button variant="primary">Go somewhere</Button>
                     </Card.Body>
                 </Card>
                </Col>
            </Row>
        </Container>
        
          </div>
            )
  }
}

export default MostradorDeParcela;

