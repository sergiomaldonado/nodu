import React, { Component } from 'react'
import './../App.css'

 const estadoInicial = {
   
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
  
  render() {
       return(      
          <div>
          <h1>Dentro de Mis Parcelas</h1>
          </div>
            )
  }
}





export default MisParcelas;

