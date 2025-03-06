import './home.css'

const Home = ({titulo,img,description}) =>{
    return(
        <div className='inner'>
            <div className='front'>
                <img className='home-img' src={img} alt={titulo}/>
            </div>
            <div className="back">
                <p className='titulo'>{titulo}</p>
                <p className='description'>{description}</p>
            </div>
        </div>
    )
}

export default Home;