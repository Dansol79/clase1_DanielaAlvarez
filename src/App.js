import { BrowserRouter, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Productos from "./NavBar/Productos";
import Contacto from "./NavBar/Contacto";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailConteiner from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import { CustomProvider } from "./context/cartContext";



const App = () => {
  return (
    <BrowserRouter>
    <CustomProvider>
   
      <Header />
      <Switch>
        <Route path="/" exact>  <ItemListContainer /> </Route>
       
        <Route path="/productos"> <Productos /> </Route>
        
        <Route path="/contacto"> <Contacto /> </Route>
       
        <Route path="/cart" component={Cart}></Route>
      </Switch>
     
      <Route path="/articulo_Selec/:id"> <ItemDetailConteiner />  </Route>
  
    </CustomProvider>
    </BrowserRouter>
  );
};

export default App;
