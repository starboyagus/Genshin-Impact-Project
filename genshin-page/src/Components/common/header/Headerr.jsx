import React, { useState } from "react";
import { Navbar } from '../../common';
import './Header.css'

function Header(){
    return(
        <section className="header">
            <section>
                <img className="logo"
                src="https://pbs.twimg.com/media/GJUlNbyaoAACeFI?format=jpg&name=4096x4096"
                alt="Logo" />
            </section>
            <section className="navbar">
                <Navbar />
            </section>
        </section>
    )
}

export default Header;