import React, { Component } from 'react'
import './../App.css'
import {Container, Row, Col, Button,Navbar,Nav,Form,FormControl, Image } from 'react-bootstrap'
import { auth } from '../../firebase'

import SingOutButton from './../SingOut'


const BottomNavBar = () => {
   
   return(
      <div>
      <Navbar fixed="bottom" style={{backgroundColor:"white"}} variant="dark">
        <Navbar.Brand href="#home">Nodu</Navbar.Brand>
         <Nav className="mr-auto"> 
         </Nav>
          <Image style={{ width:"40px" }} src="http://lorempixel.com/200/200/" roundedCircle />
          {/**<SingOutButton></SingOutButton>**/}
      </Navbar> 
      </div>
   )
}

 
 export default BottomNavBar
 

