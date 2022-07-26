import './price.css'
import { Link } from "react-router-dom";



function Price() {
    
    return (
        <div className="price-container">
            <div className="price-box">
                <h2 className="price-header">Basic</h2>
                <span className="list-itmes">
                    <p>1 page design</p>
                    <p>Web design customiztion</p>
                    <p>12 months free hosting</p>
                </span>    
                <p className="price"><span className='from'>From</span> $990</p>
                <Link to="/contactUs"><button className="price-button-basic">Contact</button></Link>
            </div>
            <div className="price-box-pro">
                <h2 className="price-header-pro">Pro</h2>
                <span className="list-pro">
                    <p>Unlimited pages</p>
                    <p>Web design customiztion</p>
                    <p>12 months free hosting</p>
                    <p>Free Domain</p>
                    <p>Automate website traffic</p>
                    <p>Automate LinkedIn messaging</p>
                    <p>Automate email campaigns</p>
                    <p>Lead list creation</p>
                    <p>Multipage website creation</p>
                 </span>   
                <p className="price-pro"><span className='from'>From</span> $8400</p>
                <Link to="/contactUs"><button className="button-pro">Contact</button></Link>

            </div>
             
            <div className="price-box-pro-mobile">
                <h2 className="price-header-pro">Websites</h2>
                <span className="list-pro">
                    <p>Unlimited pages</p>
                    <p>Web design customiztion</p>
                    <p>12 months free hosting</p>
                    <p>Free Domain</p>
                    <p>Automate website traffic</p>
                    <p>Automate LinkedIn messaging</p>
                    <p>Automate email campaigns</p>
                    <p>Lead list creation</p>
                    <p>Multipage website creation</p>
                 </span>   
                <p className="price-pro"><span className='from'>From</span> $990</p>
                <Link to="/contactUs"><button className="button-pro">Contact</button></Link>

            </div>
            <div className="price-box">
                <h2 className="price-header">Business</h2>
                <span className="list-itmes">
                    <p>Unlimited pages</p>
                    <p>Web design customiztion</p>
                    <p>12 months free hosting</p>
                    <p>Free Domain</p>
                    <p></p>
                </span>
                <p className="price"><span className='from'>From</span> $2600</p>
                <Link to="/contactUs"><button className="price-button-business">Contact</button></Link>
            </div>
            
        </div>
    )
}

export default Price