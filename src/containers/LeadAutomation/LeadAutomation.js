import './lead.css'
import { GiArchiveResearch } from 'react-icons/gi';
import { FaFunnelDollar } from 'react-icons/fa';
import { TbSettingsAutomation } from 'react-icons/tb';
import { MdCampaign } from 'react-icons/md';
import { MdMarkEmailRead } from 'react-icons/md';
import { MdOutlineMessage } from 'react-icons/md';
import background from "../../assets/home/desktop/background.png"
import skills from "../../assets/home/desktop/skills.png"





function LeadAutomation() {
    
    return (
       
         
        <div className="top-main-container-one">
        <img src={skills} alt="computer" className="image-main graphic"/> 
            <div className="top-main-one"> 
            <div className="info-bar-bottom data-list">
                <h2 className="lead-heading yarris">Yarris Technologies</h2>
                <p className="bottom-p">Helped establish a complex effective sales,<br/>
                   process, and an international sales strategy<br/>
                   to grow in the US and Singapore.</p>
                     
            </div>
            <div className="info-bar-bottom lead-funnel">
               
                <h2 className="lead-heading">Worldstrides</h2>
                <p className="bottom-p">Built a cold sale funnel to a
                pipeline of<br/> 2.9 million  dollars,
                in sales, across a<br/> 10 month period.</p>
                  
            </div>
            <div className="info-bar-bottom">
                <h2 className="lead-heading">AIPT</h2>
                <p className="bottom-p bottom-aipt">I built a lead generating network from the<br/> ground up, which
                   has resulted in achieving<br/>  2.5 million in sales revenue.</p>
                    
            </div>

            
            </div>
            
       </div>

  
        
    )
}

export default LeadAutomation
