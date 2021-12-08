import React, { } from 'react';
import Navbar from '../Navbar';
import { useParams } from 'react-router';

const Day1 = () => {
    const {dayId} = useParams();
    const title = "Countdown to Christmas🎄";
    const tasks = [
        "Task 2"
    ]
    return ( 
        <React.Fragment>
            <Navbar title={title} tasks={tasks}/>
            <div className="">
                <h1> Task {dayId} </h1>
            </div>
        </React.Fragment>
     );
}
 
export default Day1;