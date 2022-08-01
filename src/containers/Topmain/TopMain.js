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
         
            <h1 className="main-h1-two">I will build you a<br/>a qualified<br/>funnel</h1>
            <p className="main-p">I have been working in business development<br/> based roles for the past 12 years,
           selling complex<br/> executive level enterprise agreements within<br/> the Legal,
           construction, Automotive, education, <br/> travel and fitness industry. 
           I have personally generated<br/> over 7 million in sales, established
           complex<br/> outbound sales frameworks that have
           generated<br/>eager to buy leads.</p>   
            </div>    
       </div>

       <div className="top-main-container-one">
       <img src={attention} alt="computer" className="image-main"/> 
            <div className="top-main-one-white"> 
            <h1 className="main-h1-two get-attention">Get attention<br/>the right<br/>way</h1>
            <p className="main-p">Hiring the right salesperson internally can be<br/>
                challenging, and the wrong hire can have a negative<br/>
                impact on your brand. With over 10 years<br/> experience
                winning meaningful conversations with<br/> decision makers,
                I will deliver low risk, low cost<br/> transparent results.</p>   
            </div>
            <img src={attention} alt="computer" className="image-main speaker-image"/>  
       </div>
    </div>
    )
}

export default TopMain