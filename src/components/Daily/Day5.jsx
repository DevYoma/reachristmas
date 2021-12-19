import React from 'react';
import '../../styles/Daily/Day5.css';
import Navbar from '../Navbar';

const Day5 = () => {

    // app state
    const greetings = [
        "Santa Claus is coming to town!",
        "We wish you a Merry Christmas!",
        "Happy holidays!",
        "Ho, ho, ho! Merry Christmas!",
        "Jingle all the way!",
    ]
    const randomGreeting = (Math.floor(Math.random() * greetings.length))

    const handleButtonClick = () => {
        window.location.reload();
    }

    
    return ( 
        <React.Fragment>
            <Navbar />
            <div className="day5">
                <div className="day5__main">
                    <h2>{greetings[randomGreeting]}</h2>
                </div>

                <button 
                    onClick={handleButtonClick}
                    className="day5__button"
                >
                    Write Card
                </button>
            </div>
        </React.Fragment>
     );
}
 
export default Day5;