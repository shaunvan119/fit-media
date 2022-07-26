import './count.css'
import React, { useState, useEffect } from 'react';


const CountLines = () => {
    const [currentCount, setCount] = useState(0);
    const timer = () => setCount(currentCount + 100);

    useEffect(
        () => {
            if (currentCount >= 100000) {
                return;
            }
            const id = setInterval(timer, 0);
            return () => clearInterval(id);
        },
        
    );

    return (
        <div className='count-box'>
                <h1 className="main-h1-count">Lines of code<br/>written<br/></h1>
                <span className='count-component'>{currentCount}</span> 
                </div>
       
    )
};




export default CountLines