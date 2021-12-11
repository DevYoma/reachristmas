import React, { useState } from 'react';
import Navbar from '../Navbar';
import '../../styles/Daily/Day3.css';

const Day3 = () => {
    // app state
    const [isChristmas, setIsChristmas] = useState(false);
    const title = "Haloween to Christmas";
    const tasks = [
        "task 3"
    ]

    const handleChange = () => {
        setIsChristmas(prevIsChristmas => !prevIsChristmas);
        console.log(isChristmas)
    }

    return ( 
        <React.Fragment>
            <Navbar title={title} tasks={tasks}/> 
            <div className="day3">
                <main>
                    <div>
                        <span role="img" aria-label="accessible-emoji">🎃</span> 
                        <h1>Merry Christmas</h1>
                        <span role="img" aria-label="accessible-emoji">👻</span> 
                    </div>

                        <button className="day3__button" onClick={handleChange}>fix</button>
                </main>
            </div>  
        </React.Fragment>
     );
}
 
export default Day3;