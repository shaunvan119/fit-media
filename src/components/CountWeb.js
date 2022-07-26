import './count.css'
import React, { useState, useEffect } from 'react';


const CountWeb = () => {
    const [currentCount, setCount] = useState(0);
    const timer = () => setCount(currentCount + 1);

    useEffect(
        () => {
            if (currentCount >= 200) {
                return;
            }
            const id = setInterval(timer, 2);
            return () => clearInterval(id);
        },
        
    );

    return (
        <div className='count-box'>
                <h1 className="main-h1-count">Websites<br/>saved<br/></h1>
                <span className='count-component'>{currentCount}</span> 
                </div>
       
    )
};

export default CountWeb