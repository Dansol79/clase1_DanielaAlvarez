import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import  Header from "./Header";
import Productos from "./NavBar/Productos";
import Contacto from "./NavBar/Contacto";
import Inicio from "./NavBar/Inicio";
import ImprDateil from "./ItemD";
import ItemList from "./ItemList";


const App = () =>{

    return(
      
        <Router>

        < Header/>
        <Switch>
        <Route path="/" exact><ItemList/></Route>
        <Route path="/productos"><Productos/></Route>
        <Route path="/inicio"><Inicio/></Route>
        <Route path="/contacto"> <Contacto/> </Route>
       </Switch>

      <Route path="/artSelec/:id">
        <ImprDateil/>
       </Route> 
      
        </Router>

        
        
    )
}

export default App