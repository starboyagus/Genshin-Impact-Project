import { useState } from 'react'
import './Personaje.css'
import { Link } from 'react-router-dom'

function Personaje({nombre, elemento, nuevo, rareza}){
    const [isNew] = useState(nuevo)

    const text = isNew ? 'Nuevo' : 'No'

    const releasePersonaje = isNew
    ? 'release-personaje-new'
    : 'release-personaje-no'

    function elementogen(){
        if(elemento=='pyro'){
            const el = 'https://rerollcdn.com/GENSHIN/UI/element_pyro.png'
            return el
        }
        else if(elemento=='hydro'){
            const el = 'https://rerollcdn.com/GENSHIN/UI/element_hydro.png'
            return el
        }
        else if(elemento=='geo'){
            const el = 'https://rerollcdn.com/GENSHIN/UI/element_geo.png'
            return el
        }
        else if(elemento=='dendro'){
            const el = 'https://rerollcdn.com/GENSHIN/UI/element_dendro.png'
            return el
        }
        else if(elemento=='electro'){
            const el = 'https://rerollcdn.com/GENSHIN/UI/element_electro.png'
            return el
        }
        else if(elemento=='ice'){
            const el = 'https://rerollcdn.com/GENSHIN/UI/element_cryo.png'
            return el
        }
        else if(elemento=='anemo'){
            const el = 'https://rerollcdn.com/GENSHIN/UI/element_anemo.png'
            return el
        }
    };

    return(
        <section className=' px-3 rounded-lg mr-4 mt-3'>
            <Link to={nombre} className='flex flex-wrap '>
                <img src={'https://rerollcdn.com/GENSHIN/Characters/1/'+nombre+'.png'} className={rareza} />
                <div className=' text-'>
                    <span className='text-xl'> {nombre} </span>
                    <img src={elementogen()} alt={elemento} className=' w-6 h-6' />
                </div>
                <p className={releasePersonaje}>{text}</p>
            </Link>
        </section>
    )
};

export default Personaje