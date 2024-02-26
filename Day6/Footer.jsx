import "../../assets/css/style.css";

import { CiFacebook, CiTwitter, CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";


const Footer = () => {
  return (
    <footer className="bg-black text-white py-4 text-center">
      <div className="apps" style={{ display: 'flex', justifyContent: 'center' }}>
        <CiFacebook style={{fontSize:40}} />
        <CiTwitter style={{fontSize:40}} />
        <CiInstagram style={{fontSize:40}}/>
        <CiLinkedin style={{fontSize:40}}/>
      </div>

      <div className="footer-links mt-4">
        <a href="/about" className="mr-5 text-gray-400 hover:text-white">About</a>
        <a href="/help" className="mr-5 text-gray-400 hover:text-white">Need Help?</a>
        <a href="/privacy" className="mr-5 text-gray-400 hover:text-white">Privacy</a>
        <a href="/content-guide" className="mr-5 text-gray-400 hover:text-white">Content Guide</a>
        <a href="/terms-of-use" className="text-gray-400 hover:text-white">Terms of Use</a>
      </div>


      
    <div className="foot-content">
    
      <div className="footer-section">
            <h3 className="text-lg font-bold mb-4">Our Offerings</h3>
            <ul className="text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white">Mobile Recharge</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Prepaid Plans</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Postpaid Plans</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Data Packs</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3 className="text-lg font-bold mb-4">Support</h3>
            <ul className="text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white">FAQs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Customer Care</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3 className="text-lg font-bold mb-4">Quick Access</h3>
            <ul className="text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white">Recharge Now</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Check Balance</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Data Usage</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3 className="text-lg font-bold mb-4">About Airtel</h3>
            <ul className="text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Media Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Investors</a></li>
            </ul>
          </div>
          </div>

       
          <div className="container mx-auto mt-4">
          <center><p className="text-center">&copy; {new Date().getFullYear()} Netfi. All Rights Reserved.</p></center>
        </div>
        
    </footer>
  );
};

export default Footer;
