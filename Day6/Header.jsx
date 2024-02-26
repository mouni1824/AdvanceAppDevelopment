import { Link } from "react-router-dom";
import "../../assets/css/style.css";
import logo from '../../assets/Images/logo.png';

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <div className="logo">
        <img src={logo} style={{borderRadius:10}} ></img>
        </div>
      </div>
      <div className="header-right">
        <Link to ="/home/login" className="header-link">Login</Link>
        <Link to ="/home/register" className="header-link">Sign Up</Link>

      </div>
    </header>
  );
}

export default Header;
