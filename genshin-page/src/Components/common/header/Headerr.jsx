import React, { useState } from "react";
import { Navbar } from '../../common';
import './Header.css'

function Header(){
    return(
        <section className=" bg-gray-900">
            <section>
                <img className=" w-16 h-16  translate-x-5 translate-y-3 "
                src="https://pbs.twimg.com/media/GJUlNbyaoAACeFI?format=jpg&name=4096x4096"
                alt="Logo" />
            </section>
            <section className="">
                <Navbar />
            </section>
        </section>
    )
}

export default Header;