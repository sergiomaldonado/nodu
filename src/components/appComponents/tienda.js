import React, { Component } from 'react'
import './../App.css'

 const estadoInicial = {
   
}

class Tienda extends Component {
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
          <h1>Dentro de Tienda</h1>
          </div>
            )
  }
}





export default Tienda;

