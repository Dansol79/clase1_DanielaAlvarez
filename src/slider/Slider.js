import slider from '../images/slider.png'
import slider1 from '../images/slider1.png'
import slider2 from '../images/slider2.png'
import slider3 from '../images/slider3.png'
import { useRef, useEffect } from 'react'
import "./styloSlider.css"


const Slider = () => {

    const Slider = useRef(null)

    const sigueinte = () => {
        if (Slider.current.children.length > 0) {
            const primerElemento = Slider.current.children[0]
            Slider.current.style.transition = `300ms ease-in-out`

            Slider.current.style.transform = `translateX(-${primerElemento.clientWidth}px)`
            Slider.current.appendChild(primerElemento)
        }
    }
    const anterior = () => {
        console.log(Slider.current)
        if (Slider.current.children.length > 0) {
            const ultimoElemento = Slider.current.children[Slider.current.children.length - 1]
            Slider.current.style.transition = `300ms ease-in-out`

            Slider.current.style.transform = `translateX(0)`
            Slider.current.insertBefore(ultimoElemento, Slider.current.children[0])
        }
    }

    useEffect(() => {
        const intervalo = setInterval(sigueinte, 3000)
        return () => {
            clearInterval(intervalo)
        }
    }, [])

    return (
        <>

            <main className="contenedor_main">
                <div className="contenedor_principal">
                    <div className="contenedor_slideShow" ref={Slider}>
                        <div className="contenedor_slide">
                            <img src={slider} alt="{slider}" className="slide_img" />
                            <div>
                                <p className="paragraph_slide">¡¡No te pierdas nuestras ofertas navideñas!!</p>
                            </div>
                        </div>
                        <div className="contenedor_slide">
                            <img src={slider1} alt="{slider}" className="slide_img" />
                            <div>
                                <p className="paragraph_slide">10 % de Descuento pago con tarjeta</p>
                            </div>
                        </div>
                        <div className="contenedor_slide">
                            <img src={slider2} alt="{slider}" className="slide_img" />
                            <div>
                                <p className="paragraph_slide">15 % de Descuento pago en efectivo</p>
                            </div>
                        </div>
                        <div className="contenedor_slide">
                            <img src={slider3} alt="{slider}" className="slide_img" />
                            <div>
                                <p className="paragraph_slide">Cuotas Fijas</p>
                            </div>
                        </div>
                    </div>
                    <div className="controles">
                        <button onClick={anterior} className="boton">
                            <i className="fas fa-angle-left  btn_izquierdo" ></i>
                        </button>
                        <button onClick={sigueinte} className="boton">
                            <i className="fas fa-angle-right  btn_derecho"></i>
                        </button>
                    </div>
                </div>
                <h2 className="titulo_principal">Dolce Ragazza</h2>
            </main>
        </>
    )
}

export default Slider;