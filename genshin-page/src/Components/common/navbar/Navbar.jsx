import React from "react";
import './Navbar.css'

function Navbar(){
    return(
        <section className="flex  justify-center">
            <div className=" text-xl text-white -translate-y-7">
            <a href="/" className="mx-9 hover:text-gray-900 ease-in-out duration-200">Home</a>
            <a href="/tierlist" className="mx-9 hover:text-gray-900 ease-in-out duration-200">Tier List</a>
            <a href="/guia" className="mx-9 hover:text-gray-900 ease-in-out duration-200">Guia</a>
            <a href="/build" className="mx-9 hover:text-gray-900 ease-in-out duration-200">Build</a>
            <a href="/leaks" className="mx-9 hover:text-gray-900 ease-in-out duration-200">Leaks</a>
            </div>
        </section>
    )
}

export default Navbar;