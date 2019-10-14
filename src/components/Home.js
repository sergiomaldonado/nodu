import React, { Component } from 'react'
import withAutorization from './withAutorization'
import 'react-toastify/dist/ReactToastify.css';
import NavBar from './appComponents/navBar.js'
import MenuPrincipalHome from './appComponents/menuPrincipalHome.js'
import BottomNavBar from './appComponents/bottomNavBar.js';
import Notifiaciones from './appComponents/notificaciones'
import Bitacora from './appComponents/bitacora'
import MisParcelas from './appComponents/misParcelas'
import MiInventario from './appComponents/miInventario'
import Tienda from './appComponents/tienda'
import Escuela from './appComponents/escuela'

const estadoInicial = {
  contenidoNav:"nod",
  perfilActivado:false,
  notificacionesActivadas:false,

   /** nombreDelComponente + Activado: Gestiona si el componente se muestra o no en el home
     * nombreDelComponente + NavContent: Cambia lo que se muestra en la barra de navegación superior 
     * */
  homeNavContent:true,
  homeActivado:true,
  bitacoraActivado:false,
  bitacoraNavContent:false,
  misParcelasActivado:false,
  misParcelasNavContent:false,
  miInventarioActivado:false,
  miInventarioNavContent:false,
  tiendaActivado:false,
  tiendaNavContent:false,
  escuelaActivado:false,
  escuelaNavContent:false

}

/*** Esta constante resetea el estado de los componente para dar el efecto de volver al home en la flecha de regreso en 
   * en la barra dentro de cada componente
   */
const estadoInicialDeLasVistas = {
  homeActivado:true,
  homeNavContent:true,
  bitacoraActivado:false,
  bitacoraNavContent:false,
  misParcelasActivado:false,
  misParcelasNavContent:false,
  miInventarioActivado:false,
  miInventarioNavContent:false,
  tiendaActivado:false,
  tiendaNavContent:false,
  escuelaActivado:false,
  escuelaNavContent:false
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

  cambiarDeVistaHome = (stateHome, stateNotificacion, statePerfil) =>{
    this.setState({
      ...estadoInicialDeLasVistas
    })
   this.setState({
     homeActivado:stateHome,
     perfilActivado:statePerfil,
     notificacionesActivadas:stateNotificacion
   })
  }

  activarVistaDeBitacora = () =>{
    this.setState({
      homeActivado:false,
      bitacoraActivado:true,
      bitacoraNavContent:true,
      homeNavContent:false
    })
  }
  activarVistaDeMisParcelas = () =>{
    this.setState({
      homeActivado:false,
      misParcelasActivado:true,
      misParcelasNavContent:true,
      homeNavContent:false
    })
  }
  activarVistaDeMiInventario = () =>{
    this.setState({
      homeActivado:false,
      homeNavContent:false,
      miInventarioActivado:true,
      miInventarioNavContent:true,
    })
  }
  activarVistaDeTienda = () =>{
    this.setState({
      homeActivado:false,
      homeNavContent:false,
      tiendaActivado:true,
      tiendaNavContent:true,
    })
  }
  activarVistaDeEscuela = () =>{
    this.setState({
      homeActivado:false,
      homeNavContent:false,
      escuelaActivado:true,
      escuelaNavContent:true,
    })
  }

  volverAlHome = () =>{
    this.setState({
      ...estadoInicialDeLasVistas
    })
  }

  render() {
       return(
          <div>
              
            {
              
              /** Aqui se gestiona el contenido de la barra de navegacion superior, el contenido cambia segun
              la vista que esta activada, se para por propiedades los parametros al componente hijo */
              
              <NavBar Contenido={this.state.contenidoNav}
              /** Pasa al componente el contenido que tiene que mostrar en la nav */
              homeNavContent={this.state.homeNavContent}
              bitacoraNavContent={this.state.bitacoraNavContent}
              misParcelasNavContent={this.state.misParcelasNavContent}
              miInventarioNavContent={this.state.miInventarioNavContent}
              tiendaNavContent={this.state.tiendaNavContent}
              escuelaNavContent={this.state.escuelaNavContent}
              volverAlHome={()=>this.volverAlHome()}
              />
            }
              
              
            { 
              /*** Aquí se gestiona el contenido que se muestra en pantalla el home, las notificaciones o el 
              perfil de usuario, dentro del home se muestra el menu y todas las vistas de las funcionalidades principales */

              this.state.homeActivado === true
              ?<div>
              <MenuPrincipalHome 
              /** Se reciben los parametros de los botones del menu principal para activar el componente que el usuario elija */
              activarBitacora={()=>this.activarVistaDeBitacora()}
              activarMisParcelas={()=>this.activarVistaDeMisParcelas()}
              activarMiInventario={()=>this.activarVistaDeMiInventario()}
              activarTienda={()=>this.activarVistaDeTienda()}
              activarEscuela={()=>this.activarVistaDeEscuela()}
              />
              </div>
              :this.state.perfilActivado === true && this.state.bitacoraActivado === false
              ?<h1>Perfil</h1>
              :this.state.notificacionesActivadas === true && this.state.bitacoraActivado === false
              ?<Notifiaciones/>
              :null
            }

          
            {
              /*** Esta sección gestiona las vistas de las principales funciones de la app */

              /** Activa la vista Bitacora */
              this.state.bitacoraActivado === true && this.state.homeActivado === false
              ?<Bitacora/>
              /** Activa la vista Mis Parcelas */
              :this.state.misParcelasActivado === true && this.state.homeActivado === false
              ?<MisParcelas/>
              /** Activa la vista Mi Inventario */
              :this.state.miInventarioActivado === true && this.state.homeActivado === false
              ?<MiInventario/>
              /** Activa la vista Tienda */
              :this.state.tiendaActivado === true && this.state.homeActivado === false
              ?<Tienda/>
              /** Activa la vista Escuela */
              :this.state.escuelaActivado === true && this.state.homeActivado === false
              ?<Escuela/>
              :null
            }
            {
              /** Este componente gestiona la navegacion inferior, controla las principales 3 vistas de la app */
              <BottomNavBar cambiarDeVistaHome={(stateHome, stateNotificacion, statePerfil)=>this.cambiarDeVistaHome(stateHome, stateNotificacion, statePerfil)}/>
            }
             
           
          </div>
            )
  }
}



const authCondition = (authUser) => !!authUser;

export default withAutorization(authCondition)(HomePage);

