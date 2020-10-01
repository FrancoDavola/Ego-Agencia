import React, { Component } from 'react'
import CheeseburgerMenu from 'cheeseburger-menu'
import MenuContent from './menuContent'


class menuBurguer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false,
    }
  }

  openMenu() {
    this.setState({ menuOpen: true })
  }

  closeMenu() {
    this.setState({ menuOpen: false })
  }

  render() {
    return <div>
      <CheeseburgerMenu
         isOpen={this.state.menuOpen}
         closeCallback={this.closeMenu.bind(this)}>
          <MenuContent closeCallback={this.closeMenu.bind(this)}/>
      </CheeseburgerMenu>


      <div  className="movete">
       
       <div 
         isOpen={this.state.menuOpen}
         onClick={this.openMenu.bind(this)}
         width={34}
         left={24}
         strokeWidth={3}
         rotate={0}
         color='black'       
        > 
          <div className="Men">Menu <i className="fas fa-bars Gray"></i></div>
          <div className="MenuMobile"><i className="fas fa-bars Gray"></i></div>
       
        </div>
      </div>
      
     
    </div>

  }
}

export default menuBurguer