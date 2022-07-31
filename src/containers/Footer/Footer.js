import './footer.css'
import banner from "../../assets/home/desktop/footerbanner.png"
import footer from "../../assets/home/desktop/footer.png"
import { AiFillFacebook} from 'react-icons/ai';
import { AiFillLinkedin} from 'react-icons/ai';
import { Link } from "react-router-dom";



function Footer() {
    
    return (
        <div className="footer">
           <div className="banner-container">
            <img src={footer} alt="mountains" className="banner-footer" />
            <div class="top-left">Australian trusted <br/>
            and experienced sales<br/>professionals</div>
            </div>  
         <div className="Bottom-footer">
         <div className="logo-icons">
                <a href="https://www.facebook.com/slvdevelopments" style={{textDecoration: 'none', color: '#FFFFFF'}}><AiFillFacebook size={62}/></a>
                <a href="https://www.linkedin.com/in/shaun-van-amersfoort-80b7b7194/" style={{textDecoration: 'none', color: '#FFFFFF'}}><AiFillLinkedin size={62}/></a>
            </div>
          <Link style={{textDecoration: 'none', color: '#FFFFFF'}} to="/contactUs"><p className="sales-machine">I need a 24/7 sales machine</p></Link>
          
            </div>
        </div>
    )
}

export default Footer