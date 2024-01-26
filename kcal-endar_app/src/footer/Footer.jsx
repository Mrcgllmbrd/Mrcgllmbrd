import React from "react";
import "./Footer.css";
import footerLogo from "../-assets/logo/footerLogo.png"
import facebookLogo from "../-assets/logo/facebookLogo.png"
import instagramLogo from "../-assets/logo/instagramLogo.png";
import twitterLogo from "../-assets/logo/twitterLogo.png";

export function Footer() {
  return (
    <footer className="footer">
      <div className="logo-footer">
        <img src={footerLogo} className="footer-image-logo" />
      </div>
      <div className="content-container">
        <div className="footer-content">
          <div className="footer-content-item">ABOUT US</div>
          <div className="footer-content-item">FAQ</div>
          <div className="footer-content-item">BLOG</div>
          <div className="footer-content-item">COMMUNITY</div>
          <div className="footer-content-item">TERMS</div>
        </div>
        <div className="copyright-info">
          <p>Copyright © 2023 KCALendar. All rights reserved. </p>
          <span>
            {" "}
            <a href="#">Contatti</a> | <a href="#">Informativa sulla privacy</a>{" "}
            | <a href="#">Cookie Policy</a>
          </span>
        </div>
      </div>
      <div className="socialIcons-footer">
        <img src={facebookLogo} className="footer-icon-social" />
        <img src={instagramLogo} className="footer-icon-social" />
        <img src={twitterLogo} className="footer-icon-social" />
      </div>
    </footer>
  );
}
