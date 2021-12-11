import React, {  } from 'react';
import Navbar from '../Navbar';
// import { useParams } from 'react-router';
import styles from  '../../styles/Daily/Day1.module.css';

const Day1 = () => {
    // const { dayId } = useParams();
    const title = "Countdown to Christmas🎄";
    const tasks = [
        "Get today's date", 
        "Calculate remaining days", 
        "Display remaining days in countdownDisplay"
    ]
    const christmasDate = 25;
    const currentDate = new Date().getDate();
    const remainingDays = christmasDate - currentDate
    return ( 
        <React.Fragment>
            <Navbar title={title} tasks={tasks}/>
            <div className={styles.day1}>
                <h2>Christmas CountDown <span role="img" aria-label="accessible-emoji">🎄</span></h2>
                <div className={styles.box}>
                    <h1>{remainingDays}</h1>

                    <p>Days 'til Christmas</p>
                </div>
                {/* <button className="day1__codeButton">
                    View Code
                </button> */}
            </div>
        </React.Fragment>
     );
}
 
export default Day1;