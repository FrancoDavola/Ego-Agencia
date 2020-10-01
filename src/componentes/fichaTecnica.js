import React, {Component}  from 'react'
import { withRouter } from "react-router";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../fichaTec.css'
import MenuBurger from './menuBurger'


class fichaTecnica extends Component{

    constructor(props){
        super(props)
        this.state = {
            fichaTec : [],
            modelHighlights : [],
            modelFeatures : []
        }   
    }

    
   
   
    apiCall(url , consecuencia){
        fetch(url)
        .then( response => response.json())
        .then( data => consecuencia(data))
        .catch( error => console.log(error))
    }






    componentDidMount() {
        const id = this.props.match.params.id;
        this.apiCall(`https://challenge.agenciaego.tech/models/${id}`, this.fichaCompleta)
    }


    fichaCompleta = (data) =>{
        this.setState({
           fichaTec : data,
           modelHighlights : data.model_highlights,
           modelFeatures : data.model_features
        })
    
    }










    render(){

        

        var tamanioVentana = 4.7
        if(window.innerWidth < 550){
        
         tamanioVentana = 1.10
        
        }
        
        if(window.innerWidth < 1024 &&  window.innerWidth > 551 ){
          tamanioVentana = 2
        }

        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: tamanioVentana,
            slidesToScroll: 1

          };
        
        return(

    <div>
               <div className="container">
                    <div className="row cabecera"> 
                       <div  className="col-lg-6 col-md-3 imgCabe">
                          <img className="image imageMobile3"  src={`https://challenge.agenciaego.tech${this.state.fichaTec.photo}`} ></img>
                       </div>
                       <div className="col-lg-6 col-md-3 textoCabe">
                          <h3>{this.state.fichaTec.title}</h3>
                          <p>{this.state.fichaTec.description}</p>
                       </div>
                   </div>              
               </div> 



        <Slider {...settings}>

                    {this.state.modelFeatures.map( (data , i) => 
   
               <div className="slider" key={i}>
                   <div className="card" style={{width: "18rem"}} >
                          <img className="card-img-top" src={`https://challenge.agenciaego.tech${data.photo}`} alt="Card image cap" />
                       <div className="card-body">
                          <h6 className="card-text">{data.name}</h6>
                          <p className="card-text">{data.description}</p>          
                       </div>
                   </div>
               </div>

                    )}
        </Slider>


        <div className="container esp">

              {this.state.modelHighlights.map( (data, i)=> 


                <div id={`row${i}`} className="row" key={i}>    
                   <div  className="col-lg-6 col-md-3 contImagen">
                        <img className={`image imageMobile${i}`}  src={`https://challenge.agenciaego.tech${data.image}`} ></img>                      
                   </div>
                   <div  className="col-lg-6 col-md-3 contTexto" id={`contTexto${i}`}>
                        <h6>{data.title}</h6>
                        <p>{data.content}</p>
                   </div>
                </div>

            )}
        </div>       

    </div>              
   
        )
    }
}
   

export default withRouter(fichaTecnica)