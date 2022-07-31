import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './progressbar.css'


const percentage = 100;
const percentageLeadList = 95;

function ProgressBar() {
    
    return (
        <>
         <h1 className='Capabilities'>Capabilities</h1>
       
         <div className="circle-wrapper-bar" style={{ width: 800, height: 200 }}>
         
         <div className="progesscricle">
            <h2>Cold<br/>calling</h2>
            <CircularProgressbar value={percentage} text={`${percentage}%`} styles={buildStyles({
                                // Rotation of path and trail, in number of turns (0-1)
                                rotation: 0.25,
                                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                // Text size
                                textSize: '16px',
                                // How long animation takes to go from one percentage to another, in seconds
                                pathTransitionDuration: 0.5,
                                // Can specify path transition in more detail, or remove it entirely
                                // pathTransition: 'none',
                                // Colors
                                pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
                                textColor: '#f88',
                                trailColor: '#d6d6d6',
                                backgroundColor: '#3e98c7',
                            })} />
         </div>   
         <div className="progesscricle">
            <h2>Appointment setting</h2>
            <CircularProgressbar value={percentage} text={`${percentage}%`} styles={buildStyles({
                                rotation: 0.25,
                                textSize: '16px',
                                pathTransitionDuration: 0.5,
                                // Can specify path transition in more detail, or remove it entirely
                                // pathTransition: 'none',
                                // Colors
                                pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
                                textColor: '#f88',
                                trailColor: '#d6d6d6',
                                backgroundColor: '#3e98c7',
                            })} />
         </div> 
         <div className="progesscricle">
            <h2>Lead<br/>automation</h2>
            <CircularProgressbar value={percentage} text={`${percentage}%`} styles={buildStyles({
                                rotation: 0.25,
                                textSize: '16px',
                                pathTransitionDuration: 0.5,
                                pathColor: `rgba(62, 152, 199, ${percentageLeadList / 100})`,
                                textColor: '#f88',
                                trailColor: '#d6d6d6',
                                backgroundColor: '#3e98c7',
                            })} />
         </div> 
         <div className="progesscricle">
            <h2>Lead list<br/> creation</h2>
            <CircularProgressbar value={percentageLeadList} text={`${percentageLeadList}%`} styles={buildStyles({
                                rotation: 0.25,
                                textSize: '16px',
                                pathTransitionDuration: 0.5,
                                pathColor: `rgba(62, 152, 199, ${percentageLeadList / 100})`,
                                textColor: '#f88',
                                trailColor: '#d6d6d6',
                                backgroundColor: '#3e98c7',
                            })} />
         </div> 
        
          
        </div>
</>
  
        
    )
}

export default ProgressBar