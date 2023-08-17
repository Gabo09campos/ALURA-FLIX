import './Banner.css'

const Banner = () => {
    return <div className='banner'>
        <div className='tituloBanner'>
            <p className='tituloFront'>Front End </p>
            <p className='subtituloFront'>Challege React</p>
            <p className='textoFront'>Este challege es una forma de aprendizaje. Es un mecanismo donde podras compromenterte en la resolucon de un problema para poder aplicar todos los conocimientos en la formacion React.</p>
        </div>
        <div>
            < img src='/img/imageBanner.png' />
        </div>
    </div>
}

export default Banner