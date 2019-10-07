import React, { Component } from 'react'
import './../App.css'
import {Container, Row, Col, Button } from 'react-bootstrap'
import { auth } from '../../firebase'

import SingOutButton from './../SingOut'


const NavBar = () => {
   
   return(
      <div>
        <SingOutButton></SingOutButton>
      </div>
   )
}

 
 export default NavBar
 

