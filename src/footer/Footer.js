import "./styloFooter.css"

const Footer = () => {

    return (

        <div className="contenedor_footer">
            <div className="contenedor_icons">

                <div>
                    <a href="https://www.instagram.com/?hl=es" target="_blak"><i className="fab fa-instagram  icons"></i> </a>
                </div>

                <div>
                    <a href="https://ar.pinterest.com/" target="_blak"> <i class="fab fa-pinterest  icons"></i> </a>
                </div>
                <div>
                    <a href="https://es-la.facebook.com/login/device-based/regular/login/" target="_blak" > <i class="fab fa-facebook  icons"></i> </a>
                </div>
            </div>
            <div className="footer_info">
                <div >
                    <i className="fas fa-truck  icons_info"></i>
                    <p className="footer_paragraph">Envíos a todo el pais!!</p>
                </div>
                <div >
                    <i class="fas fa-lock  icons_info"></i>
                    <p className="footer_paragraph">Nuestro sitio es 100 % seguro</p>
                    <p className="footer_paragraph">Protegemos tus datos</p>
                </div>
                <div className="contenedor_info">
                    <h3 className="footer_titulo">Datos de contacto</h3>
                    <p className="footer_paragraph">Solo Whatsapp:</p>
                    <p className="footer_paragraph">654 732 728</p>
                    <p className="footer_paragraph"> Lavalle 357 CABA</p>
                </div>
            </div>

            <div className="footer_legales">
                <p className="footer_paragraphh"> &copy; Derechos Reservados Daniela Alvarez</p>
            </div>

        </div>

    )
}

export default Footer;