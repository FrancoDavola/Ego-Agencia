import React, {Component} from 'react'
import {Link , NavLink} from 'react-router-dom'
import NumberFormat from 'react-number-format';


class tarjetas extends Component{

constructor(props){
    super(props)
    this.state = {
        todos : [],
        autos : [],
        comerciales : [],
        crossovers : [],
        elegido : [],
        color : "#f7f7f7",
        otro : "white",
        index : 0 ,
        selec : 0
        
        
      }
}

apiCall(url , consecuencia){
    fetch(url)
    .then( response => response.json())
    .then( data => consecuencia(data))
    .catch( error => console.log(error))
}


componentDidMount(){   
    this.apiCall("https://challenge.agenciaego.tech/models" , this.datosAutos) 
}





datosAutos = (data) => {

  let filtroAutos =   data.filter(auto => auto.segment == "Autos")
  let filtroComerciales =  data.filter(auto => auto.segment == "Pickups y Comerciales")
  let filtroCrossovers = data.filter(auto => auto.segment == "SUVs y Crossovers")


    this.setState({
        todos : data,
        autos : filtroAutos,
        comerciales : filtroComerciales,
        crossovers : filtroCrossovers,
        elegido : data,
        
    })   
}


todos() {   
      this.setState({
        elegido : this.state.todos,
        index : 0
      })
  
}

autos() {
     this.setState({
        elegido : this.state.autos,
        index : 2
      })
}

comerciales() {
      this.setState({
        elegido : this.state.comerciales,
        index : 3
      })
}

crossovers() {
      this.setState({
        elegido : this.state.crossovers,
        index : 4
      })
}




menorAMayor (pr){
  
if(pr == "price"){
  var menAMay =   this.state.elegido.sort((a, b,) => (a.price > b.price ? 1 : a.price < b.price ? -1 : 0))
  var selec = 1
 } else {
  var menAMay =   this.state.elegido.sort((a, b,) => (a.year > b.year ? 1 : a.year < b.year ? -1 : 0))
  var selec = 4
 }
   this.setState({
       elegido : menAMay,
       selec : selec
      })

}

mayorAMenor (pr){

if(pr == "price"){
  var mayAMen =   this.state.elegido.sort((a, b) => (a.price < b.price ? 1 : a.price > b.price ? -1 : 0))
  var selec = 2
 } else {
  var mayAMen =   this.state.elegido.sort((a, b) => (a.year < b.year ? 1 : a.year > b.year ? -1 : 0))
  var selec = 3
 }
   this.setState({
        elegido : mayAMen,
        selec : selec
      })
}

    render(){
        return(


<>
    <div className="row rowHome">
          <div className="col-lg-7 col-md-3 nav linea">
                <a id="filtrarPor">Filtrar por </a> 
                
                <a className="filtrosNav todos" style={ this.state.index == 0 ? { background: this.state.color} : { background: this.state.otro }} onClick={() => this.todos()}>Todos </a>
                <a className="filtrosNav autos" style={ this.state.index == 2 ? { background: this.state.color} : { background: this.state.otro }} onClick={() => this.autos()}>Autos </a> 
                <a className="filtrosNav pick"  style={ this.state.index == 3 ? { background: this.state.color} : { background: this.state.otro }} onClick={() => this.comerciales()}>Pickups y Comerciales </a>
                <a className="filtrosNav suv"   style={ this.state.index == 4 ? { background: this.state.color} : { background: this.state.otro }} onClick={() => this.crossovers()}>SUVs y Crossovers </a>
          </div>


          <div className="col-lg-7 col-md-3 col-6 dropEscondido linea">
             <div className="dropdown">
                 <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Filtrar por</button>
             
               <div className="dropdown-menu uno" aria-labelledby="dropdownMenuButton">
                   <a style={ this.state.index == 0 ? { background: this.state.color} : { background: this.state.otro }}   onClick={() => this.todos()} className="dropdown-item" href="#">Todos </a>
                   <a style={ this.state.index == 2 ? { background: this.state.color} : { background: this.state.otro }}  onClick={() => this.autos()} className="dropdown-item" href="#">Autos </a> 
                   <a style={ this.state.index == 3 ? { background: this.state.color} : { background: this.state.otro }}  onClick={() => this.comerciales()} className="dropdown-item" href="#">Pickups y Comerciales </a>
                   <a style={ this.state.index == 4 ? { background: this.state.color} : { background: this.state.otro }}  onClick={() => this.crossovers()} className="dropdown-item" href="#">SUVs y Crossovers </a>
               </div>
             </div>
          </div>

          <div className="col-lg-5 col-md-3 col-6 jo linea">
            <div className="dropdown d-flex justify-content-end ">
               <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Ordenar por</button>
  
             <div className="dropdown-menu dos" aria-labelledby="dropdownMenuButton">
                 <a style={ this.state.selec == 0 ? { background: this.state.color} : { background: this.state.otro }}  className="dropdown-item" > Nada</a>
                 <a style={ this.state.selec == 1 ? { background: this.state.color} : { background: this.state.otro }} onClick={() => this.menorAMayor("price")} className="dropdown-item" > <b>Menor</b> a <b>mayor</b> precio</a>
                 <a style={ this.state.selec == 2 ? { background: this.state.color} : { background: this.state.otro }} onClick={() => this.mayorAMenor("price")} className="dropdown-item" > <b>Mayor</b> a <b>menor</b> precio</a>
                 <a style={ this.state.selec == 3 ? { background: this.state.color} : { background: this.state.otro }} onClick={() => this.mayorAMenor()} className="dropdown-item" >Más <b>nuevo</b> primero</a>
                 <a style={ this.state.selec == 4 ? { background: this.state.color} : { background: this.state.otro }} onClick={() => this.menorAMayor()} className="dropdown-item sinBorde" >Más <b>viejo</b> primero</a>  
             </div>
           </div>
          </div>


          {this.state.elegido.map((auto, i) => 
    

            <div className="col-lg-3 col-md-6  " key={i}>
                <Link className="links" to={`/ficha/${auto.id}`} >
                     <div className="card modelosMobile">
                       <div className="card-body">
                            <h2 className="card-title centrado">{auto.name}</h2>
                            <p className="card-text centrado">{`${auto.year} | `}<NumberFormat className="number" value={auto.price} displayType={'text'} thousandSeparator={true} decimalSeparator={","} thousandSeparator={"."} prefix={'   $ '} /></p> 
                       </div>
                            <img src={`https://challenge.agenciaego.tech${auto.photo}`} className="card-img-bottom" alt="..."/>
                     </div>
                </Link>
            </div>
 
          )}
    </div>

</>
         )
       }
}

export default tarjetas