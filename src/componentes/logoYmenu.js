import React, {Component} from 'react'
import MenuBurger from './menuBurger'
import {NavLink} from "react-router-dom";
import logo from '../logo.png'
class logoYmenu extends Component{
    render(){
        return(
           
           
           <div className="d-flex justify-content-between linea">
               <div className="logo"><NavLink to="/"><img src={logo} /></NavLink></div>
                 <MenuBurger />
           </div>
        )
    }
}

export default logoYmenu