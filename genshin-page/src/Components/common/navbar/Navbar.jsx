import React from "react";
import './Navbar.css'

function Navbar(){
    return(
        <section className="navbar">
            <a href="/" className="navbar-item">Home</a>
            <a href="/tierlist" className="navbar-item">Tier List</a>
            <a href="/guia" className="navbar-item">Guia</a>
            <a href="/build" className="navbar-item">Build</a>
            <a href="/leaks" className="navbar-item">Leaks</a>
        </section>
    )
}

export default Navbar;