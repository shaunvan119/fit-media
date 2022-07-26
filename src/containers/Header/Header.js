import './Header.css'
import logo from "../../assets/home/desktop/SVLblack.svg"
import { Link } from "react-router-dom";

function Header() {
    
    return (
        <header className="top-header">
            <img src={logo} alt="Logo" className="logo" />
            <Link to="/contactUs"><button className="contact-button button-contact-form">Contact</button></Link>
            
              
        </header>
    )
}

export default Header