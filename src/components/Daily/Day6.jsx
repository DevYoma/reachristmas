import React, { useState } from 'react';
import Navbar from '../Navbar';
import '../../styles/Daily/Day6.css';

const Day6 = () => {
    const title = "Text Chrismassifier"
    const tasks = [
        "task 6"
    ]

    // app state
    const [christmassified, setChristmassified] = useState(false)

    const handleButtonClick = () => {
        setChristmassified(prevChrismassified => !prevChrismassified)
    }

    return (
        <React.Fragment>
            <Navbar title={title} tasks={tasks} />
            <div className="day6">
                <main className="day6__main">
                    <h1 className={christmassified ? "chrismassfiy" : null}>
                        {christmassified && (<span role="img" aria-label="accessible-emoji">🎅</span>)}
                        Merry Christmas!
                        {christmassified && (<span role="img" aria-label="accessible-emoji">☃️</span>)}
                    </h1>

                    {/* Button below is inheriting styles from Day3 Button */}
                    <button onClick={handleButtonClick}>Christmassify</button>  
                </main>
            </div>

        </React.Fragment> 
     );
}
 
export default Day6;