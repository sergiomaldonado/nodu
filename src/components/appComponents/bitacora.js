import React, { Component } from 'react'
import './../App.css'

 const estadoInicial = {
   
}

class Bitacora extends Component {
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
          <h1>Dentro de la Bitacora</h1>
          </div>
            )
  }
}





export default Bitacora;

