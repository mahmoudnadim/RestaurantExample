import React from 'react'
import "./TestimonaltBox.css"
import CustomerPhoto from "../../assets/images/CustomerPhoto.png"

export default function TestimonaltBox() {
    return (
        <div className="testimonaltsBox d-flex flex-column">
            <p className="testimonaltText">
                Lorem Ipsum is simply dummy text of
                the printing and typesetting industry.
                Lorem Ipsum has been the industry s
                standard dummy text ever since the
                1500s, when an unknown printer took a
                galley of type and scrambled it to
                make a type specimen book.
            </p>
            <div className="testimonaltAbout_c d-flex align-items-center">
                <img src={CustomerPhoto} alt="" className="testimonaltPhoto" />
                <div className="testimonaltAbout d-flex flex-column">
                    <p className="testimonaltName">Lorem Ipsum</p>
                    <p className="testimonaltJob">Customer</p>
                </div>
            </div>
        </div>
    )
}
