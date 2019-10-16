import React, { Component } from 'react'
import './../App.css'
import {Navbar,Nav, Image } from 'react-bootstrap'
import { ChevronLeft, Edit } from 'react-feather';

 const estadoInicial = {
   
}

class NavBar extends Component {
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

               {
                  this.props.homeNavContent === true 
                  ?  <Navbar style={{backgroundColor:"#0A369C"}} variant="dark">
                     <Navbar.Brand href="#home">Cultiva</Navbar.Brand>
                     <Nav className="mr-auto"></Nav>
                     <Image style={{ width:"40px" }} src="http://lorempixel.com/200/200/" roundedCircle />
                     </Navbar>   
                  :null
               }
               {
                  this.props.bitacoraNavContent === true
                  ?  <Navbar style={{backgroundColor:"#0A369C"}} variant="dark">
                     <Navbar.Brand href="#home"> <ChevronLeft onClick={()=>this.props.volverAlHome()} size={25}/> Bitacora</Navbar.Brand>
                     <Nav className="mr-auto"></Nav>
                     <Edit onClick={()=>this.props.activarModalCreacionTarea(true)} style={{ color:"white" }}/>
                     </Navbar>   
                  :null
               }

               {
                  this.props.misParcelasNavContent === true
                  ?  <Navbar style={{backgroundColor:"#0A369C"}} variant="dark">
                     <Navbar.Brand href="#home"> <ChevronLeft onClick={()=>this.props.volverAlHome()} size={25}/> Mis Parcelas</Navbar.Brand>
                     <Nav className="mr-auto"></Nav>
                     </Navbar>   
                  :null
               }
               {
                  this.props.miInventarioNavContent === true
                  ?  <Navbar style={{backgroundColor:"#0A369C"}} variant="dark">
                     <Navbar.Brand href="#home"> <ChevronLeft onClick={()=>this.props.volverAlHome()} size={25}/> Mi Inventario</Navbar.Brand>
                     <Nav className="mr-auto"></Nav>
                     </Navbar>   
                  :null
               }
               {
                  this.props.tiendaNavContent === true
                  ?  <Navbar style={{backgroundColor:"#0A369C"}} variant="dark">
                     <Navbar.Brand href="#home"> <ChevronLeft onClick={()=>this.props.volverAlHome()} size={25}/> Tienda</Navbar.Brand>
                     <Nav className="mr-auto"></Nav>
                     </Navbar>   
                  :null
               }
               {
                  this.props.escuelaNavContent === true
                  ?  <Navbar style={{backgroundColor:"#0A369C"}} variant="dark">
                     <Navbar.Brand href="#home"> <ChevronLeft onClick={()=>this.props.volverAlHome()} size={25}/> Escuela</Navbar.Brand>
                     <Nav className="mr-auto"></Nav>
                     </Navbar>   
                  :null
               }

               {/*this.props.regresarIcon == true ?<ChevronLeft/>:null <SingOutButton></SingOutButton>*/}

          </div>
            )
  }
}





export default NavBar;

