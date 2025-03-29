import React from 'react'
import { Nav,Footer } from '../../Components'
import { MainHero,MainBoxes,OurPhoto,Testimonalts} from '../../Sections'

export default function Home() {
    return (
        <>
            <Nav />
            <MainHero />
            <MainBoxes />
            <OurPhoto />
            <Testimonalts />
            <Footer />
        </>
    )
}
