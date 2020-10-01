import React, { Component } from 'react'
import {NavLink} from "react-router-dom";

import '../menuContent.css'

class MenuContent extends Component {
  constructor(props) {
    super(props)

    this.items =  ["Modelos", "Servicios y accesorios" , "Financiacion" , "Reviews y Comunidad"]
    this.items2 = ["Toyota Mobility Service", "Toyota Gazoo Racing" , "Toyota Híbridos" ]
    this.items3 = ["Concesionarios", "Test Drive" , "Contacto" ]
    this.items4 = ["Actividades", "Servicios al Cliente" , "Ventas Especiales" , "Innovación" ,"Prensa", "Acerca de..."]
   
  }

  render() {
    return (
      <div className="menu">
        <a className="botonCerrar" onClick={this.props.closeCallback}>Cerrar <p className="cruz"><i className="fas fa-times"></i></p></a>

            {/* Primera seccion del menu */}

        {this.items.map(i => <div className="menu-item" key={i}>
           <NavLink to="/" onClick={this.props.closeCallback}>{i}</NavLink>
         </div>)}

         <div className="separador"></div>

            {/* Segunda seccion del menu */}

        {this.items2.map(i => <div className="menu-item" key={i}>
           <NavLink to="#" onClick={this.props.closeCallback}>{i}</NavLink>
         </div>)}

         <div className="separador"></div>

             {/* Tercera seccion del menu */}

        {this.items3.map(i => <div className="menu-item" key={i}>
          <NavLink to="#" onClick={this.props.closeCallback}>{i}</NavLink>
         </div>)}

        <div className="separador3"></div>

                 {/* Cuarta  seccion del menu */}

        {this.items4.map(i => <div className="menu-itemOscuro" key={i}>
          <NavLink to="#" onClick={this.props.closeCallback}>{i}</NavLink>
         </div>)}

        <div className="separador4"></div>
       

        
      </div>
    )
  }
}

/* MenuContent.propTypes = {
  closeCallback: React.PropTypes.func.isRequired
} */

export default MenuContent