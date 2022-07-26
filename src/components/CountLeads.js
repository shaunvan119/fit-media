import './count.css'
import React, { useState, useEffect } from 'react';


const CountLeads = () => {
    const [currentCount, setCount] = useState(0);
    const timer = () => setCount(currentCount + 20);

    useEffect(
        () => {
            if (currentCount >= 16800) {
                return;
            }
            const id = setInterval(timer, 0);
            return () => clearInterval(id);
        },
        
    );

    return (
        <div className='count-box'>
                <h1 className="main-h1-count">Leads<br/>Generated<br/></h1>
                <span className='count-component'>{currentCount}</span> 
                </div>
       
    )
};


export default CountLeads