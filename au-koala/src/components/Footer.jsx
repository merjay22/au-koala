// src/components/Footer.jsx
import React from "react";
import "./Footer.css";


function Footer() {
  return (
    <footer className="koala-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h2>kóala</h2>
          <p>
            In the spirit of reconciliation, Koala acknowledges the Traditional Custodians of Country throughout Australia and their connections to land, sea and community.
          </p>
          <p>
            We pay our respect to their Elders past and present and extend that respect to all Aboriginal and Torres Strait Islander peoples today.
          </p>
          
          <div className="footer-social">
            <a href="#" className="fa fa-facebook" alt="11"></a>
            <a href="#" className="fa fa-instagram" alt="12"></a>
          </div>
          <div className="footer-certifications">
            <img src="//au.koala.com/cdn/shop/files/Award_Logos_ebe797aa-0a11-41cc-9ad6-ab446eefc622.png?v=1725507274&width=228 228w, //au.koala.com/cdn/shop/files/Award_Logos_ebe797aa-0a11-41cc-9ad6-ab446eefc622.png?v=1725507274&width=456 456w, //au.koala.com/cdn/shop/files/Award_Logos_ebe797aa-0a11-41cc-9ad6-ab446eefc622.png?v=1725507274&width=684 684w" />
            
          </div>
        </div>

        <div className="footer-columns">
          <div>
            <h4>Help</h4>
            <a href="#">Request Delivery Change</a>
            <a href="#">Contact & FAQs</a>
            <a href="#">Finance Options</a>
            <a href="#">My Account</a>
          </div>
          <div>
            <h4>About</h4>
            <a href="#">About Us</a>
            <a href="#">Our Impact</a>
            <a href="#">Trade & Commercial</a>
            <a href="#">Koala Second Home</a>
            <a href="#">Koala Showroom</a>
            <a href="#">Careers</a>
            <a href="mailto:press@koala.com">press@koala.com</a>
          </div>
          <div>
            <h4>Resources</h4>
            <a href="#">Delivery</a>
            <a href="#">120-night trial</a>
            <a href="#">Warranty</a>
            <a href="#">Treetops Blog</a>
            <a href="#">Refer a Friend</a>
          </div>
          <div>
            <h4>Shop</h4>
            <a href="#">Mattresses</a>
            <a href="#">Sofa Beds</a>
            <a href="#">Sofas</a>
            <a href="#">Bedroom</a>
            <a href="#">Living Room</a>
            <a href="#">Outdoor</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Koala</p>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Website Terms</a>
          <a href="#">Terms of Service</a>
          <a href="#">Promotion Terms</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
