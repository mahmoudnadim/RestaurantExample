import React from 'react'
import "./Box.css"
import boxImg from "../../assets/images/boxImg.jpg"
import { FaStar } from "react-icons/fa";

export default function Box() {
    return (
        <div className="box homeBox d-flex flex-column">
            <img src={boxImg} alt="" />
            <div className="boxContent d-flex flex-column">
                <div className="boxTop d-flex justify-content-between align-items-center">
                    <p className="boxHour">10hr 35m</p>
                    <p className="boxRate d-flex align-items-center">
                        <FaStar /> <span>5.0</span>
                    </p>
                </div>
                <a href='/menu/burger' className="boxTitle">Cheese Burger</a>
                <div className="boxDown d-flex justify-content-between align-items-center">
                    <p className="boxPrice">$11,25 USD</p>
                    <button className="btn boxBtn o-btn">Buy Now</button>
                </div>
            </div>
        </div>
    )
}
