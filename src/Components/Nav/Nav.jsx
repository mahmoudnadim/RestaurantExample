import React from 'react'
import logo from "../../assets/images/logo.svg"
import "./Nav.css"

export default function Nav() {
    return (
        <nav className='nav_c d-flex justify-content-between'>
            <a href='/' className="NavImg_c"><img src={logo} alt="" /></a>
            <div className="navList d-flex align-items-center">
                <a className="navLink" href="/">Home</a>
                <a className="navLink" href="/menu">Menu</a>
                <a className="navLink" href="/contact">Contact</a>
                <a href="/"><button className='btn o-btn'> Order Now</button></a>
            </div>
        </nav>
    )
}
