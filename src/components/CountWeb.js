import './count.css'
import React, { useState, useEffect } from 'react';


const CountWeb = () => {
    const [currentCount, setCount] = useState(0);
    const timer = () => setCount(currentCount + 1000);

    useEffect(
        () => {
            if (currentCount >= 700000) {
                return;
            }
            const id = setInterval(timer, 0);
            return () => clearInterval(id);
        },
        
    );

    return (
        <div className='count-box'>
                <h1 className="main-h1-count">Revenue<br/>Generated<br/></h1>
                <span className='count-component'>{currentCount}</span> 
                </div>
       
    )
};

export default CountWeb