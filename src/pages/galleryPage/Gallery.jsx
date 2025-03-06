import Home from "../../componentes/home/Home";
import vidriera from '../../assets/vidriera.png'
import stand from '../../assets/stand.png'
import evento from '../../assets/evento.png'
import mobiliario from '../../assets/mobiliario.png'
import ploteo from '../../assets/impresiones.png'
import logistica from '../../assets/logistica.png'

import './gallery.css'
import Navbar from "../../componentes/navbar/Navbar";
import Footer from "../../componentes/footer/Footer";

const Gallery = () =>{
    return(
        <>
        <Navbar/>
        <h1>Servicios</h1>    
        
        <div className="gallery-page">
            <Home titulo="Vidrieras" img={vidriera} description="Diseño y producción de vidrieras adaptadas y exclusivas"/>
            <Home titulo="Stands" img={stand} description="Diseño y producción de stands de áreas promocionales y áreas de trabajo"/>
        </div>
        <div className="gallery-page">
            <Home titulo="Eventos" img={evento} description="Ambientación de eventos corporativos, stands y sociales"/>
            <Home titulo="Mobiliario y equipos" img={mobiliario} description="Alquiler de sillas, sillones, mesas, pantallas, sonido e iluminación"/>
        </div>
        <div className="gallery-page">
        <Home titulo="Impresiones y ploteos" img={ploteo} description="Gigantografías, pisos laminados y vinilos de corte"/>
        <Home titulo="Logistica" img={logistica} description="Logistica, coordinación e implementación en hoteles, shopping y PDVs"/>
        </div>
        <Footer/>
        </>
    )
}

export default Gallery;