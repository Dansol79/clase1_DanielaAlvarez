import "./login.css"
import { useState } from "react"
import { useContext } from "react";
import { contexto } from "../../context/cartContext";
import firebase from "firebase/app"
import {firestore} from '../../firebase/firebase'



const Login = () => {

    const {cart} = useContext(contexto);
    const {clear}=useContext(contexto);
    const[id, setId] =useState('')
    const [compra, setCompra] = useState({
        nombre: "",
        apellido: "",
        email: "",

    })

    const [error, setError] = useState(false)

    const actualizarState =(e) =>{
        setCompra({
            ...compra,
            [e.target.name]: e.target.value
        })

       
    }
    
   
    
    const {nombre, apellido, email} = compra

    const eventCita = e=>{

        e.preventDefault()  

       

        if(nombre.trim() === "" || apellido.trim() === "" || email.trim() === ""){
            
            setError(true)

            return;

        }else{
            setError(false)
            setTimeout(()=>{
                clear()
            }, 1000) 
        }
        const datos={
            nombre: compra.nombre,
            apellido: compra.apellido,
        }
        const orden={
            buyer: datos,
            items:cart,
            total:cart.reduce((acc, item) => acc + item.articulo.price * item.cantidad, 0),
            date: firebase.firestore.Timestamp.now(),
        }
        
        const db = firestore
        const collection = db.collection('ordenes')
        const query = collection.add(orden)
 
        query
        .then((resultado) => {
 
              setId(resultado.id)
        })
          .catch((error) => {
               console.log("Error adding document: ", error);
          })

     }

     if (id){
       
        return(
          
            <>
            <h2 className="dol">Dolde Ragazza</h2>
            <div className="div_ticket">            
                <h1 className="pL">Tu compra se realizo con exito</h1>
                <p className="pLL"> {nombre} - {apellido}</p>
                <p className="pLL">Orden de compra: # {id} </p>
                <p className="pLL">Gracias por su compra</p>
            </div>
            </>
        )
        
        
        }else{    
           return (
        <>
            <form onSubmit={eventCita} className="login-container" id="comprar">
                <div className="login-input">
                    <label className="label_login">Nombre</label>
                    <input type="text"
                           name="nombre"
                           className="input_login"
                           placeholder="Ingresar Nombres"
                           onChange={actualizarState}
                           value={nombre}
                        />
                </div>

                <div className="login-input">
                    <label htmlFor="apellido" className="label_login">Apellido</label>
                    <input type="texto"
                     name="apellido" 
                     id="password" 
                     placeholder="Ingresar Apellido"
                     className="input_login"
                     onChange={actualizarState}
                     value={apellido}
                      />
                </div>

                <div className="login-input">
                    <label htmlFor="password" 
                    className="label_login">Email</label>
                    <input type="email" 
                    name="email"
                     id="password"
                     placeholder="Ej: correo@correo"
                     className="input_login"
                     onChange={actualizarState}
                     value={email}
                      />
                </div>
                {error ? <p className="error">Todos los campos son obligatorios</p> : null}

             
                <div className="login-button">
                    <button className="btn_login" type="submit">Enviar</button>
                </div>
            </form>

        </>
              )
            }
    }


export default Login