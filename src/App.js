import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import  Header from "./Header";
import Productos from "./NavBar/Productos";
import Contacto from "./NavBar/Contacto";
import Inicio from "./NavBar/Inicio";
import ArtSelec from "./ContenedorSelec";


const App = () =>{

    return(
      
        <Router>

        < Header/>
        <Switch>
        <Route path="/productos"><Productos/>
        </Route>
        <Route path="/contacto"> <Contacto/> </Route>
        <Route path="/inicio"><Inicio/></Route>
      
       </Switch>

      <Route path="/artSelec/:id">
           Holaaaaaaa
        <ArtSelec/>
       </Route> 
      
        </Router>

        
        
    )
}

export default App