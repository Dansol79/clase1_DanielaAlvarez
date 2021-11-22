import contacto from "../images/contacto4.jpg";

const Contacto = () => {
  return (
    <>
      <h2 className="dol">Dolce Ragazza</h2>
      <di>
      <di className="divContacto3">
          <p className="paragraph_contacto">
            Atención al cliente DOLCE RAGAZZA a su servicio Ninguna pregunta es
            demasiado insignificante y ninguna petición es demasiado grande para
            los expertos de atención al cliente de Tiffany. Estamos siempre a su
            servicio para lo que necesite, desde elegir un anillo de compromiso
            o un regalo, hasta pedir cita para una consulta virtual o en la
            tienda
          </p>
        </di>

        <div className="divContacto">
          <img src={contacto} alt={contacto} className="imgContacto"></img>
        </div>
      </di>
      <div className="divContacto2">
        <h2 className="pL">Contacte con nosotros</h2>
        <p className="pLL">Atencion al cliente</p>
    <div className="divIcons">
        <div className="divIcons_paragraph">
            <p className="material-icons p_icons">whatsapp</p>
            <p className="paragraph_icons"> 654 732 728</p>
            </div>
        <div className="divIcons_paragraph">
            <p class="material-icons p_icons">diamond</p>
            <p className="paragraph_icons">Consulte con expertos en oro y diamantes</p>
         </div>
    </div>
    <div className="divIcons_paragraph">
        <p className="pLL">Nuestros horario de atencion:</p>
        <p className="paragraph_icons">Lunes-Sabados de 8:00 a 19:00 Hs. </p>
        <p className="paragraph_icons">Dic: Lavalle 357 CABA</p>
    </div>
    </div>
    </>
  );
};

export default Contacto;
