import { BrowserRouter, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./NavBar/Nav";
import Productos from "./NavBar/Productos";
import Contacto from "./NavBar/Contacto";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailConteiner from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import { CustomProvider } from "./context/cartContext";
import Login from "./components/form/Login";




const App = () => {
  return (

  

    <BrowserRouter>
    <CustomProvider>
   
      <Nav/>
      <Switch>
        <Route path="/" exact>  <ItemListContainer /> </Route>
        
        <Route path="/productos"> <Productos /> </Route>
        
        <Route path="/contacto"> <Contacto /> </Route>
       
        <Route path="/cart" component={Cart}></Route>
        <Route path="/login" ><Login/> </Route>
      </Switch>
     
      <Route path="/articulo_Selec/:id"> <ItemDetailConteiner />  </Route>
  
    </CustomProvider>
    </BrowserRouter>
  );
};

export default App;
