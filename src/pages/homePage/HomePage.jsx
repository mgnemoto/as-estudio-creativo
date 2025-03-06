import { Link } from 'react-router-dom';
import './homePage.css'

const HomePage = () =>{
    return (
        <div className="home-page">
            <Link to={"/gallery"}>
                <div className='home'>
                    <h2 className="home-title">AS Estudio Creativo</h2>
                    <p className='home-description'>¡Publicidad para tu empresa!</p>
                </div>
            </Link>
        </div>
    )
}

export default HomePage;