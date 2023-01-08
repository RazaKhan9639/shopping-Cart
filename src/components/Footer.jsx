import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer">
          <div className="footer__left">
            <h3>Get to Know Us</h3>
            <p>Careers</p>
            <p>Blog</p>
            <p>About Amazon</p>
            <p>Investor Relations</p>
            <p>Amazon Devices</p>
            <p>Amazon Tours</p>
          </div>
          <div className="footer__center">
            <h3>Make Money with Us</h3>
            <p>Sell products on Amazon</p>
            <p>Sell apps on Amazon</p>
            <p>Become an Affiliate</p>
            <p>Advertise Your Products</p>
            <p>Self-Publish with Us</p>
            <p>Host an Amazon Hub</p>
          </div>
          <div className="footer__right">
            <h3>Amazon Payment Products</h3>
            <p>Amazon Business Card</p>
            <p>Shop with Points</p>
            <p>Reload Your Balance</p>
            <p>Amazon Currency Converter</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer