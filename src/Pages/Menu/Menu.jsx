import React from 'react'
import "./Menu.css"
import { Nav,Box, Footer } from '../../Components'

export default function Menu() {
    return (
        <>
            <Nav />
            <div className="cP pageHero">
                <p className="pageHeroTitle">EATS</p>
                <div className="pageHeroLinks"> Home / Eats / <span style={{color:"#DB8726"}}>Humburgers</span></div>
            </div>
            <div className="cP menuMain d-flex">
                <div className="mainAside">
                    <p class="asideTitle">MENU</p>
                    <div class="asideLinks d-flex flex-column">
                        <p class="asideLink">Cheesecake</p>
                        <p class="asideLink asideLinkSelect">Humburgers</p>
                        <p class="asideLink">Milkshake</p>
                        <p class="asideLink">Chicken</p>
                    </div>
                </div>
                <div className="mainBoxes d-flex justify-content-between flex-wrap">
                    <Box />
                    <Box />
                    <Box />
                    <Box />
                    <Box />
                    <Box />
                    <Box />
                    <Box />
                    <Box />
                </div>
            </div>
            <Footer />
        </>
    )
}
