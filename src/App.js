import { BrowserRouter, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./NavBar/Nav";
import Productos from "./NavBar/Productos";
import Contacto from "./NavBar/Contacto";
import ItemListContainer from "./components/items/ItemListContainer";
import ItemDetailConteiner from "./components/detail/ItemDetailContainer";
import Footer from "./footer/Footer";
import Cart from "./components/Cart";
import { CustomProvider } from "./context/cartContext";




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
      </Switch>
     
      <Route path="/articulo_Selec/:id"> <ItemDetailConteiner />  </Route>
    
      <Footer/>
    
    </CustomProvider>
    </BrowserRouter>
  );
};

export default App;
