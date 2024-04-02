import { useState } from 'react'
import './Personaje.css'

function Personaje({nombre, foto, elemento, nuevo, rareza}){
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
        <section className='personaje'>
            <a href={nombre} className='referencia'>
            <img src={foto} className={rareza}/>
            <div className='Textos'>
            <span className='nombre-personaje'> {nombre} </span>
            <img src={elementogen()} alt={elemento} className='elem' />
            </div>
            <p className={releasePersonaje}>{text}</p>
            </a>
        </section>
    )
};

export default Personaje