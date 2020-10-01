import React from 'react';
import logo from './logo.svg';
import './cssBootstrap.css'
import './pagPrincipal.css'
import './fonts.css'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import FichaTecnica from './componentes/fichaTecnica'
import Nav from './componentes/nav'
import Titulo from './componentes/titulo'
import LogoYMenu from './componentes/logoYmenu'




function App() {

  
    
  return (
<Router>
  <div className="App">
       <LogoYMenu />
       <Nav />
  
    <Switch>

       <Route path="/challengeego" exact>
          <Titulo />
       </Route>   

       <Route path="/ficha/:id" exact>
          <FichaTecnica />
       </Route>
       
    </Switch>
    
  </div>
</Router>
  );
}

export default App;
