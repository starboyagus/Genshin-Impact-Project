import './Error.css'
import { Link } from 'react-router-dom'
import error from './../../../assets/Error.png'

function Error(){
    return(
        <section className='Error'>
            <img src={error} className='frieren404'/>
            <h1 className='text'> Hemos encontrado un error! </h1>
            <Link to="/" className='boton'>Home</Link>
            <div className='divider'>divider</div>

        </section>
    )
}

export default Error