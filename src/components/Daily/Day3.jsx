import React, { useState } from 'react';
import Navbar from '../Navbar';
import '../../styles/Daily/Day3.css';

const Day3 = () => {
    // app state
    const [isChristmas, setIsChristmas] = useState(false);

    const handleChange = () => {
        setIsChristmas(prevIsChristmas => !prevIsChristmas);
        // console.log(isChristmas)
    }

    return ( 
        <React.Fragment>
            <Navbar /> 
            <div className="day3">
                <main className="day3__main">
                    <div>
                        <span role="img" aria-label="accessible-emoji">{isChristmas ? "☃️" : "🎃"}</span> 
                        <h1 className={isChristmas ? "christmas" : "haloween"}>Merry Christmas</h1>
                        <span role="img" aria-label="accessible-emoji">{isChristmas ? "🎁" : "👻"}</span> 
                    </div>

                        <button className="day3__button" onClick={handleChange}>{isChristmas ? "Reset" : "fix"}</button>
                </main>
            </div>  
        </React.Fragment>
     );
}
 
export default Day3;