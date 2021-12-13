import React from 'react';
import Navbar from '../Navbar';
import '../../styles/Daily/Day4.css';

const Day4 = () => {
    const title = "Shopping List";
    const tasks = [
        "task 4"
    ]
    return ( 
        <React.Fragment>
            <Navbar title={title} tasks={tasks}/>
            <div className="day4">
                I am the day 4 component
            </div>
        </React.Fragment>
     );
}
 
export default Day4;