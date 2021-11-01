import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import  Header from "./Header";
import Productos from "./nav/Productos";
import Contacto from "./nav/Contacto";
import Inicio from "./nav/Inicio";
import ArtSelec from "./ContenedorSelec";


const App = () =>{

    return(
      
        <Router>

        < Header/>
        <Switch>
       
       <Route path="/artSelec/:id">
           Holaaaaaaa
        <ArtSelec/>
       </Route>
        


        <Route path="/productos"><Productos/>
        </Route>
        <Route path="/contacto"> <Contacto/> </Route>
        <Route path="/inicio"><Inicio/></Route>
        
      
       </Switch>
       
      
        </Router>

        
        
    )
}

export default App