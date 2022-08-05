import './price.css'
import { Link } from "react-router-dom";




function Price() {
    
    return (
        <div className="price-container">
            <div className="price-box">
                <h2 className="price-header">Month to month</h2>
                <p className="price__description">Rolling month to month,<br/> low risk, cancel at annytime</p>
                <span className="list-itmes">
                    <p>Cold calling</p>
                    <p>Appointment setting</p>
                    <p>Lead automation</p>
                    <p>script creation</p>
                    <p>Lead list creation</p>
                </span>    
                <p className="price"><span className='from'>From</span> $3400</p>
                <Link to="/contactUs"><button className="price-button-basic">Contact</button></Link>
            </div>
            <div className="price-box-pro">
                <h2 className="price-header-pro">8 weeks</h2>
                <p className="price__description description__p">Rolling month to month,<br/> low risk, cancel at annytime</p>
                <span className="list-pro">
                    <p>Cold calling</p>
                    <p>Appointment setting</p>
                    <p>Lead automation</p>
                    <p>script creation</p>
                    <p>Lead list creation</p>
                 </span>   
                <p className="price-pro"><span className='from'>From</span> $6400</p>
                <Link to="/contactUs"><button className="button-pro">Contact</button></Link>

            </div>
             
            <div className="price-box-pro-mobile">
                <h2 className="price-header-pro">Month to month</h2>
                <p className="price__description  description__p">Rolling month to month,<br/> low risk, cancel at annytime</p>
                <span className="list-pro">
                    <p>Cold calling</p>
                    <p>Appointment setting</p>
                    <p>Lead automation</p>
                    <p>script creation</p>
                    <p>Lead list creation</p>
                 </span>   
                <p className="price-pro"><span className='from'>From</span> $3400</p>
                <Link to="/contactUs"><button className="button-pro">Contact</button></Link>

            </div>
            <div className="price-box">
                <h2 className="price-header">12 weeks</h2>
                <p className="price__description">Rolling month to month,<br/> low risk, cancel at annytime</p>
                <span className="list-itmes">
                    <p>Cold calling</p>
                    <p>Appointment setting</p>
                    <p>Lead automation</p>
                    <p>script creation</p>
                    <p>Lead list creation</p>
                </span>
                <p className="price"><span className='from'>From</span> $9000</p>
                <Link to="/contactUs"><button className="price-button-business">Contact</button></Link>
            </div>
            
        </div>
    )
}

export default Price