import React, { Component } from 'react'
import './../App.css'

 const estadoInicial = {
   
}

class Escuela extends Component {
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
          <h1>Dentro de Escuela</h1>
          </div>
            )
  }
}





export default Escuela;

