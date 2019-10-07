import React, { Component } from 'react'
import './App.css'
import {Container, Row, Col, Button } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { SignUpLink } from './SingUpForm'
import { auth } from '../firebase'
import * as routes from '../constants/routes'
import SingOutButton from './SingOut'
import SignInForm from './SignInForm'
import Logo from './assets/logo.svg'

const Langing = ({ history }) => {
   
   return(
      <div>
         <Container style={{ textAlign:"center" }} fluid={false}>
            <Row style={{ paddingTop:"10%" }}> 
               <Col md={12} xs={12}>
                 <img style={{ marginBottom:"2.5em" }} src={Logo}></img>
                 <h2 style={{ textAling:"center", color:"#BCBCBC" }}>Nodu</h2>
               <SignInForm/>
               </Col> 
            </Row>
         </Container>
      </div>
   )
}

 
 export default withRouter(Langing);
 

