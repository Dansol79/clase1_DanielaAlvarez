import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import  Header from "./components/Header";
import Productos from "./NavBar/Productos";
import Contacto from "./NavBar/Contacto";
import Inicio from "./NavBar/Inicio";
import Main from "./components/Main";
import ItemDateil from "./components/ItemD";


const App = () =>{

    return(
      
        <Router>

        < Header/>
        <Switch>
        <Route path="/" exact><Main/></Route>
        <Route path="/productos"><Productos/></Route>
        <Route path="/inicio"><Inicio/></Route>
        <Route path="/contacto"> <Contacto/> </Route>
       </Switch>

      <Route path="/artSelec/:id">
        <ItemDateil/>
       </Route> 
      
        </Router>

        
        
    )
}

export default App