import React from 'react';
import Navbar from '../Navbar';
import '../../styles/Daily/Day10.css';
import Emoji from '../Emoji';

const Day10 = () => {
    const title = "Festivity Loader";
    const tasks = [
        "task 10"
    ]

    const currentDate = new Date().getDate();
    const christmasDate = 25

    const widthProgress = (currentDate / christmasDate ) * 100

    const widthStyle = {
        width: `${widthProgress}%`
    }

    return (
        <React.Fragment>
            <Navbar title={title} tasks={tasks}/>
            <div className="day10">
                <div className="loader">
                    <div className="loader__progressBar" style={widthStyle}></div>
                </div>

                <div>{widthProgress}% To Christmas<Emoji emoji="🎅"/></div>
            </div>
        </React.Fragment> 
     );
}
 
export default Day10;