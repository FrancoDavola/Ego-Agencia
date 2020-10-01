import React, {Component} from 'react'
import Tarjetas from './tarjetas'

class titulo extends Component{
    render(){
        return(
            
            <div className="container">
               <div className="row">
                 <div className="col-lg-9 col-md-4 header">
                   <h2 className="Descubr-todos-los-m">Descubri todos los modelos</h2> 
                 </div>
               </div>
                   <Tarjetas />
            </div> 
        )
    }
}

export default titulo