import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className="footerL">
            <img id="footerLogo" src="assets/images/official_crevion_logo-removebg-preview.png" alt="crevion logo" />
        </div>
        <div className="labelContain">
            <h1 id="label">CREVION FORGE</h1>
        </div>
        <div className="footerS2">
            <div className="ep">
            <div className="email">
                <p id="emailC">Email</p>
                <a id="eaddressC" href="mailto:crevionforge@gmail.com?subject=Hello&body=I%20wanted%20to%20ask%20about...">
                crevionforge@gmail.com
                </a>
            </div>
            <div>
                <p id="number">Phone Number</p>
                <a id="numberC" href="tel:+63 927 757 3211">+63 927 757 3211</a>
            </div>
            </div>
            <div className="icons">
            <a href="mailto:crevionforge@gmail.com?subject=Hello&body=I%20wanted%20to%20ask%20about...">
                <img className="iconF" src="assets/images/google_icon.png" alt="google_icon" />
            </a>
            <a href="https://www.facebook.com/people/Crevion-Forge/61574778015654/">
                <img className="iconF" src="assets/images/facebook_icon.png" alt="facebook" />
            </a>
            <a href="https://www.instagram.com/crevionforge/">
                <img className="iconF" src="assets/images/instagram_icon.png" alt="instagram" />
            </a>
            <a href="https://www.tiktok.com/@crevionforge">
                <img className="iconF" src="assets/images/tiktok_icon.png" alt="tiktok" />
            </a>
            <a href="https://www.youtube.com/@CrevionForge">
                <img className="iconF" src="assets/images/youtube_icon.png" alt="youtube" />
            </a>
            </div>
        </div>
        <div id="lineB"></div>
        <div className="final">
            <p>© 2025 Crevion Forge. All rights reserved. </p>
            <p id="s2">Built with purpose. Designed for growth. Need help? Contact Us | Privacy Policy</p>
        </div>
    </footer>

  )
}

export default Footer