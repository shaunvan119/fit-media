import './topMain.css'
import Count from '../../components/CountWeb'
import CountLeads from '../../components/CountLeads'
import CountLines from '../../components/CountLines'
import attention from "../../assets/home/desktop/attention.png"
import websitetile from "../../assets/home/desktop/websitetile.png"
import salesfunnel from "../../assets/home/desktop/salesfunnel.png"


function TopMain() {
    
    return (
        <div className="top-wrapper">
        <div className="top-main-container-one container_count">
            <div className="top-main-one count-section"> 
            <CountLeads/>
            <CountLines/>
            <Count/>
            </div>
            <img src={websitetile} alt="computer" className="image-main graphic"/>  
       </div>

       <div className="top-main-container-one funnel-background">
            <img src={salesfunnel} alt="computer" className="image-main"/>  
            <div className="top-main-two"> 
         
            <h1 className="main-h1-two">Qualified<br/>lead funnel</h1>
            <p className="main-p">I have been working in business development<br/> based roles for the past 12 years,
           selling complex<br/> executive level enterprise agreements within<br/> the Legal,
           construction, Automotive, education, <br/> travel and fitness industry. 
           I have personally generated<br/> over 7 million in sales, established
           complex<br/> outbound sales frameworks that have
           generated<br/>eager to buy leads.</p>   
           <p className="main-p-mobile">I have been working in business development based roles for the past 12 years,
           selling complex executive level enterprise agreements within the Legal,
           construction, Automotive, education,  travel and fitness industry. 
           I have personally generated over 7 million in sales, established
           complex outbound sales frameworks that have
           generated eager to buy leads.</p>   
           
            </div>    
       </div>

       
    </div>
    )
}

export default TopMain