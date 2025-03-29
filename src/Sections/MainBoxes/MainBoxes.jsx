import React from 'react'
import "./MainBoxes.css" 
import { Box } from '../../Components'


export default function MainBoxes() {
  return (
    <div className="c homeBoxes_c d-flex">
        <p className="homeBoxesTitle">OUR FEATURED FAST FOODS</p>
        <div className="homeBoxesCategories d-flex">
            <button className="btn homeBoxesCategory">Drinks</button>
            <button className="btn homeBoxesCategory">Hot Drinks</button>
            <button className="btn homeBoxesCategory">Eats</button>
            <button className="btn homeBoxesCategory">Burgers</button>
        </div>
        <div className="homeBoxes d-flex">
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
        </div>
    </div>
  )
}
