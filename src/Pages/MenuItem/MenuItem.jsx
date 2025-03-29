import React from 'react'
import "./MenuItem.css"
import { Nav, Footer } from '../../Components'
import img from "../../assets/images/boxImg.jpg"

export default function MenuItem() {

    const menuItems = [
        { name: "potato", price: "2,30$" },
        { name: "drink", price: "1,50$" },
        { name: "sauce", price: "2,30$" },
        { name: "ketchup", price: "1,50$" },
        { name: "mayonnaise", price: "2,30$" },
        { name: "hot sauce", price: "1,50$" }
    ]
    const getMenuItems = menuItems.map((item) => {
        return (
            <div className="menuItemCheckBox d-flex align-items-center justify-content-between">
                <div className='d-flex align-items-center' style={{ gap: ".5rem" }}>
                    <input type="checkbox" name="" id="" />
                    <span>{item.name}</span>
                </div>
                <p>{item.price}</p>
            </div>
        )
    })
    return (
        <>
            <Nav />
            <div className="cP ManuItem_c d-flex">
                <div className="img_c menuItemLeft">
                    <img src={img} alt="" />
                </div>
                <div className="menuItemRight d-flex flex-column">
                    <div className="menuItemTitle">Cheese Burger</div>
                    <div className="menuItemTime">10hr 35m</div>
                    <div className="menuItemCheckBoxes d-flex flex-column">
                        {getMenuItems}
                    </div>
                    <p className="menuItemTotal">$11,25 USD</p>
                    <button className="btn menuTotalBtn o-btn w-100">Buy Now</button>
                </div>

            </div>
            <Footer />
        </>
    )
}
