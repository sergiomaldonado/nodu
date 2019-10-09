import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import {ChevronRight,Book,Map,Box,ShoppingCart,BookOpen} from 'react-feather';
import 'react-toastify/dist/ReactToastify.css';
import './stylesAppComponents/menuPrincipalStyle.css'

const estadoInicial = {
  
}

class MenuPrincipalHome extends Component {
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
          <div style={{ marginTop:"15px" }}>
            <Button className="botonMenuPrincipalHome" size="lg" block>
              <span className="itemMenuPrincipal"><Book size="20" /> &nbsp; Bitacora</span>
              <span style={{ float:"right", marginTop:"-2px" }}> <ChevronRight/> </span>
            </Button>
            <hr style={{ width:"87%", borderBottom:"solid #E1DFDF 0.5px", float:"right",  }}/>
            <Button className="botonMenuPrincipalHome" size="lg" block>
              <span className="itemMenuPrincipal" > <Map size="20" />  &nbsp; Mis Parcelas</span>
              <span style={{ float:"right", marginTop:"-2px" }}> <ChevronRight/> </span>
            </Button>
            <hr style={{ width:"87%", borderBottom:"solid #E1DFDF 0.5px", float:"right",  }}/>
            <Button className="botonMenuPrincipalHome" size="lg" block>
              <span className="itemMenuPrincipal" ><Box size="20" />  &nbsp; Mis Inventario</span>
              <span style={{ float:"right", marginTop:"-2px" }}> <ChevronRight/> </span>
            </Button>
            <hr style={{ width:"87%", borderBottom:"solid #E1DFDF 0.5px", float:"right",  }}/>
            <Button className="botonMenuPrincipalHome" size="lg" block>
              <span className="itemMenuPrincipal" ><ShoppingCart size="20" />  &nbsp; Tienda</span>
              <span style={{ float:"right", marginTop:"-2px" }}> <ChevronRight/> </span>
            </Button>
            <hr style={{ width:"87%", borderBottom:"solid #E1DFDF 0.5px", float:"right",  }}/>
            <Button className="botonMenuPrincipalHome" size="lg" block>
              <span className="itemMenuPrincipal" ><BookOpen size="20" />  &nbsp; Escuela</span>
              <span style={{ float:"right", marginTop:"-2px" }}> <ChevronRight/> </span>
            </Button>
            <hr style={{ width:"87%", borderBottom:"solid #E1DFDF 0.5px", float:"right",  }}/>
           

          
          </div>
            )
  }
}

export default MenuPrincipalHome;



