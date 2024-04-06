import React from "react";  
import './Principal.css'
import Personaje from "../personajes";




function Principal (){
    return(
        <>
                <div class='character-list'>
                <Personaje rareza='legendary'elemento='pyro' nuevo={false} nombre='Diluc' />
                <Personaje rareza='legendary'  elemento='anemo' nuevo={false} nombre='Venti' />
                <Personaje rareza='legendary' elemento='dendro' nuevo={false} nombre='Baizhu' />            
                <Personaje rareza='legendary' elemento='electro' nuevo={false} nombre='Raiden'/>
                <Personaje rareza='legendary' elemento='electro' nuevo={false} nombre='Cyno'/>
                <Personaje rareza='normal' elemento='anemo' nuevo={false} nombre='Faruzan' />
                <Personaje rareza='normal' elemento='anemo' nuevo={false} nombre='Faruzan' />
                <Personaje rareza='normal' elemento='anemo' nuevo={false} nombre='Faruzan' />
                <Personaje rareza='normal' elemento='anemo' nuevo={false} nombre='Faruzan' />
                <Personaje rareza='legendary' elemento='geo' nuevo={true} nombre='Chiori' />
                <Personaje rareza='legendary' elemento='ice' nuevo={false} nombre='Wriothesley' />
                <Personaje rareza='legendary' elemento='electro' nuevo={false} nombre='Cyno' />
                <Personaje rareza='legendary' elemento='electro' nuevo={false} nombre='Cyno' />
                <Personaje rareza='legendary' elemento='electro' nuevo={false} nombre='Cyno' />
                <Personaje rareza='legendary' elemento='electro' nuevo={false} nombre='Cyno' />
                <Personaje rareza='legendary' elemento='electro' nuevo={false} nombre='Cyno' />
                <Personaje rareza='legendary' elemento='electro' nuevo={false} nombre='Cyno' />
                <Personaje rareza='legendary' elemento='electro' nuevo={false} nombre='Cyno' />
                <Personaje rareza='legendary' elemento='electro' nuevo={false} nombre='Cyno' />
                <Personaje rareza='legendary' elemento='electro' nuevo={false} nombre='Cyno' />
                <Personaje rareza='legendary' elemento='electro' nuevo={false} nombre='Cyno' />
                </div>
        </>
    )
}

export default Principal;