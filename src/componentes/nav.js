import React, {Component} from 'react'
import {  NavLink } from "react-router-dom"


class nav extends Component{


submit = (e) => {
    e.preventDefault()
}

  render(){
     return (
               <div className="container header2">
                 <div className="row solapa">
                   <header className="col-lg-6 col-md-3 header">
                     <nav className="navBar">
                        <NavLink to="/" exact className="btn btn-dark modelo" activeClassName = "active"  >Modelo</NavLink>
                        <NavLink to="/ficha" onClick={this.submit}   className="btn btn-dark" activeClassName = "active">Detalle del modelo</NavLink>
                     </nav>             
                   </header>
                 </div>
               </div>
            )
          }
}

export default nav