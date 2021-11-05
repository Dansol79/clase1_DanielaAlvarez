import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Productos from "./NavBar/Productos";
import Contacto from "./NavBar/Contacto";
import Inicio from "./NavBar/Inicio";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailConteiner from "./components/ItemDetailContainer";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <ItemListContainer />
        </Route>
        <Route path="/productos">
          <Productos />
        </Route>
        <Route path="/inicio">
          <Inicio />
        </Route>
        <Route path="/contacto">
          <Contacto />
        </Route>
      </Switch>

      <Route path="/articulo_Selec/:id">
        <ItemDetailConteiner />
      </Route>
    </Router>
  );
};

export default App;
