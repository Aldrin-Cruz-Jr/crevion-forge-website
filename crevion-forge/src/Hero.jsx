import React from 'react'
import {Link} from 'react-router-dom'
import './Hero.css'
import crevionBg from './assets/images/CREVION.png'
import layout_asset from './assets/images/layout.png'
import phone_asset from './assets/images/phone (1).png'
import phone_laptop from './assets/images/phone_laptop_asset.png'
import service from './assets/images/rating.png'
import phone from './assets/images/phone_asset.png'
import laptop from './assets/images/laptop_asset.png'
import zen from './assets/images/zenPic.png'
import aldrin from './assets/images/aldrinPic.png'
import logo from './assets/images/official_crevion_logo-removebg-preview.png'
const Hero = () => {
  return (
    <>
    
        <div className="bg">
            <img src={crevionBg} alt="Crevion" id="bgImg" />
            <div className="value">
                <h1>Build Better.</h1>
                <h1>Launch Faster.</h1>
                <h2>We turn your vision into a real product — fast and flawlessly.</h2>
                <a href="https://www.facebook.com/people/Crevion-Forge/61574778015654/"><button id="valBtn">Contact Us</button></a>
            </div>
            <div className="offersContain" id='offersContainID'>
                <div className="card">
                <div className="containImgOffer">
                    <img src={layout_asset} alt="layout" className="cardImg" />
                </div>
                <h2 className="offerTitle">Templates</h2>
                <p className="cardDes">
                    We provide customizable, ready-made templates for business operations and project management.
                </p>
                <a href="#contactID"><button className="offerBtn">Learn more</button></a>
                </div>
                <div className="card">
                <img src={phone_asset} alt="device" className="cardImg" />
                <h2 className="offerTitle">App Development</h2>
                <p className="cardDes">
                    We offer custom app development and consulting to solve unique business challenges.
                </p>
                <a href="#contactID"><button className="offerBtn">Learn more</button></a>
                </div>
                <div className="card">
                <img src={service} alt="service" className="cardImg" />
                <h2 className="offerTitle">Productized Services</h2>
                <p className="cardDes">
                    Pre-built, easy-to-implement solutions designed to streamline business operations.
                </p>
                <a href="#contactID"><button className="offerBtn">Learn more</button></a>
                </div>
            </div>
            <div className="feat" id='featID'>
                <div className="containBenOne">
                <img src={phone_laptop} alt="phone and laptop" className="imgBen" />
                </div>
                <div>
                <h2 className="titleBen">Simplify Business</h2>
                <p className="pBen">
                    Customizable, scalable mobile and desktop applications that simplify business operations like
                    project management, cost estimation, and resource planning.
                </p>
                </div>
            </div>
            <div className="featTwo">
                <div>
                <h2 className="titleBenRight">Efficient Solutions</h2>
                <p className="pBenRight">
                    Our tools help businesses streamline processes, improve productivity, reduce costs, and
                    minimize human error, with a focus on ease of use and affordability.
                </p>
                </div>
                <div className="containBenTwo">
                <img src={phone} alt="phone" className="imgBenRight" />
                </div>
            </div>
            <div className="featThree">
                <div className="containBenTwo">
                <img src={laptop} alt="laptop" className="imgBen" />
                </div>
                <div>
                <h2 className="titleBen">Scalable Focus</h2>
                <p className="pBen">To serve a wide range of industries through versatile software solutions.</p>
                </div>
            </div>
        </div>
        <div className="teamContain" id='teamID'>
            <h1 id="meetTitle">MEET THE DEVELOPERS</h1>
            <p className="meetP">
                Get to know the passionate minds behind Crevion Forge — a team of creators, problem-solvers, and innovators dedicated to building smart, practical solutions for real-world business needs.
            </p>
            <div className="containMem">
                <div className="pfp">
                <img className="pf" src={zen} alt="Zendrex Adversalo" />
                <a href="https://github.com/zendrex0880">
                    <h2 className="name">Zendrex Adversalo</h2>
                </a>
                <p className="desP">Co-Chief Executive Officer</p>
                </div>
                <div className="pfp">
                <img className="pf" src={aldrin} alt="Aldrin Cruz Jr." />
                <a href="https://github.com/Aldrin-Cruz-Jr">
                    <h2 className="name">Aldrin Cruz Jr.</h2>
                </a>
                <p className="desP">Co-Chief Executive Officer</p>
                </div>
            </div>
            </div>
            <div className="lastContact" id='contactID'>
            <div className="inside1">
                <h1 id="contactL1">KEEP IN TOUCH WITH</h1>
                <h1 id="contactL2">CREVION!</h1>
                <p className="contactP">
                Ready to simplify your business? Let’s build something great together — get started today! Don’t forget to follow us on{" "}
                <a className="contactLinks" href="https://www.instagram.com/crevionforge/">Instagram</a>,{" "}
                <a className="contactLinks" href="https://www.facebook.com/people/Crevion-Forge/61574778015654/">Facebook</a>,{" "}
                <a className="contactLinks" href="https://www.tiktok.com/@crevionforge">TikTok</a>,{" "}
                <a className="contactLinks" href="https://www.youtube.com/@CrevionForge">YouTube</a>
                </p>
                <a href="https://www.facebook.com/people/Crevion-Forge/61574778015654/"><button id="lastCBtn">CONTACT US</button></a>
            </div>
            <div className="lastCLogo">
                <img id="cLogo" src={logo} alt="crevion forge logo" />
            </div>
        </div>

    </>

  )
}

export default Hero