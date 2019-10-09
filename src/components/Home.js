import React, { Component } from 'react'
import withAutorization from './withAutorization'
import { db, auth, storage } from '../firebase/firebase'
import { Container, Row, Col, Navbar, Card, Form, Button, ProgressBar, FormControl, Tabs, Tab, ListGroup} from 'react-bootstrap';
import { Home, Bell, User, Droplet, Trash, Gitlab, Truck, ChevronLeft, Image, MoreVertical, ChevronRight} from 'react-feather';

import moment from 'moment'
import DatePicker from 'react-date-picker'
import { relative } from 'path'
import SingOutButton from './SingOut'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from './appComponents/navBar.js'
import MenuPrincipalHome from './appComponents/menuPrincipalHome.js'
import BottomNavBar from './appComponents/bottomNavBar.js';




const estadoInicial = {
  
}

class HomePage extends Component {
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
           <NavBar/>
           <MenuPrincipalHome/>
           <BottomNavBar/>
           
          </div>
            )
  }
}



const authCondition = (authUser) => !!authUser;

export default withAutorization(authCondition)(HomePage);

