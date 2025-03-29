import React from 'react'
import "./Footer.css"
import logo from "../../assets/images/logo.svg"

export default function Footer() {
    return (
        <div className="c footer_c d-flex align-items-center">
            <div className="footerMain d-flex flex-column">
                <div className="footerLogo"><img src={logo} alt="" /></div>
                <p className="footerDesc">
                    Lorem Ipsum is simply dummy text of
                    the printing and typesetting industry.
                    Lorem Ipsum has been the industry's
                    standard dummy
                </p>
                <div className="footerSub d-flex flex-column">
                    <p className="footerSubsText">Subscribe Our Newletter</p>
                    <div className="footerSubsInputs d-flex align-items-center">
                        <input type="text" placeholder='Enter Your Email'/>
                        <button className='btn footerBtn'>Send</button>
                    </div>
                </div>
            </div>
            <div className="footerList">
                <p className="footerListTitle">Home</p>
                <div className="footerLinks d-flex flex-column">
                    <a className='footerLink' href="/">Testimonatls</a>
                    <a className='footerLink' href="/">Cookie settings</a>
                    <a className='footerLink' href="/">Testimonatls</a>
                    <a className='footerLink' href="/">Testimonatls</a>
                </div>
            </div>
            <div className="footerList">
                <p className="footerListTitle">Menu</p>
                <div className="footerLinks d-flex flex-column">
                    <a className='footerLink' href="/">Testimonatls</a>
                    <a className='footerLink' href="/">Cookie settings</a>
                    <a className='footerLink' href="/">Testimonatls</a>
                    <a className='footerLink' href="/">Testimonatls</a>
                </div>
            </div>
            <div className="footerList">
                <p className="footerListTitle">About Us</p>
                <div className="footerLinks d-flex flex-column">
                    <a className='footerLink' href="/">Testimonatls</a>
                    <a className='footerLink' href="/">Cookie settings</a>
                    <a className='footerLink' href="/">Testimonatls</a>
                    <a className='footerLink' href="/">Testimonatls</a>
                </div>
            </div>
        </div>
    )
}
