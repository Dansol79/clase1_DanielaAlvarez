import "./styloContacto.css";
import contacto from "../../images/contacto4.jpg";
import { useState } from "react";
import firebase from "firebase/app"
import { firestore } from '../../firebase/firebase'


const Contacto = () => {
  const [formulario, setFormulario] = useState({
    nombre: "",
    email: "",
    telefono: "",
    comentario: "",

  });

  const [error, setError] = useState(false);
  const [id, setId] = useState("");

  const actualizarState = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  }

  const { nombre, email, telefono, comentario } = formulario;

  const enviarEmail = (e) => {

    e.preventDefault();

    if (
      nombre.trim() === "" || email.trim() === "" || comentario.trim() === "") {

      setError(true);
      return;

    } else {
      setError(false);
    }

    const datos = {
      nombre: formulario.nombre,
      email: formulario.email,
      telefono: formulario.telefono,
      comentario: formulario.comentario,
    }
    const mensaje = {
      contacto: datos,
      date: firebase.firestore.Timestamp.now(),

    }

    const db = firestore
    const collection = db.collection('mensajes')
    const query = collection.add(mensaje)

    query
      .then((resultado) => {

        setId(resultado.id)
      })
      .catch((error) => {
        console.log("Error adding document: ", error);
      })

    setTimeout(() => {
      setFormulario({
        nombre: "",
        email: "",
        telefono: "",
        comentario: "",
      })
    }, 1000)


  }

  if (id) {
    return (
      <>
        <h2 className="titulo_principal">Dolce Ragazza</h2>
        <div className="contenedor_id">
          <h3 className="titulo_contacto">Tu mensaje fue enviado con exito</h3>
          <p className="paragraph_contacto">En breve uno de nuestros representantes se estara comunicando con usted</p>
          <p className="paragraph_contacto">Gracias por elegirnos!!!</p>
        </div>
      </>

    )

  } else {

    return (
      <>
        <h2 className="titulo_principal">Dolce Ragazza</h2>
        <di>
          <di className="div_contacto">
            <p className="paragraph_contacto">
              Atención al cliente DOLCE RAGAZZA a su servicio Ninguna pregunta es
              demasiado insignificante y ninguna petición es demasiado grande para
              los expertos de atención al cliente de Tiffany. Estamos siempre a su
              servicio para lo que necesite, desde elegir un anillo de compromiso
              o un regalo, hasta pedir cita para una consulta virtual o en la
              tienda
            </p>
          </di>

          <div className="div_contenedor">
            <img src={contacto} alt={contacto} className="imagen_contacto"></img>
          </div>
        </di>
        <div >
          <h2 className="titulo_contacto">Contacte con nosotros</h2>
          <p className="paragraph_contacto">Atencion al cliente</p>
          <div className="div_icons">
            <div className="divIcons_paragraph">
              <p className="material-icons stylo_icons">whatsapp</p>
              <p className="paragraph_icons"> 654 732 728</p>
            </div>
            <div className="divIcons_paragraph">
              <p class="material-icons stylo_icons">diamond</p>
              <p className="paragraph_icons">Consulte con expertos en oro y diamantes</p>
            </div>
          </div>
          <div className="divIcons_paragraph">
            <p className="paragraph_contacto">Nuestros horario de atencion:</p>
            <p className="paragraph_icons">Lunes-Sabados de 8:00 a 19:00 Hs. </p>
            <p className="paragraph_icons">Dic: Lavalle 357 CABA</p>
          </div>
        </div>
        <div>
          <form className="form_contacto" onSubmit={enviarEmail}>
            <div className="info_contendor">
              <h2 className="titulo_contacto">Envianos un mensaje</h2>
              <p className="paragraph_icons"> Dejanos tu opinión, consulta, o simplemente un saludo :)</p>
            </div>
            <div className="contenedor_inputs">
              <div className="div_inputs">
                <input type="text"
                  name="nombre"
                  className="input_contacto"
                  placeholder=" Nombre"
                  onChange={actualizarState}
                  value={nombre}
                ></input>
              </div>
              <div className="div_inputs">
                <input type="email"
                  name="email"
                  placeholder=" Correo@correo"
                  className="input_contacto"
                  onChange={actualizarState}
                  value={email}></input>
                <input type="text"
                  name="telefono"
                  placeholder=" Telefono(opcional)"
                  className="input_contacto"
                  onChange={actualizarState}
                  value={telefono}></input>
              </div>
              <div className="div_inputs">
                <input type="text"
                  name="comentario"
                  placeholder=" Mensaje"
                  className="input_contacto"
                  onChange={actualizarState}
                  value={comentario}></input>
                {error ? <p className="error">Todos los campos son obligatorios</p> : null}
              </div>
              <button className="btn_contacto">Enviar</button>
            </div>
            <div>
            </div>
          </form>
        </div>
        <div>
        </div>
      </>
    );
  }
}



export default Contacto;
