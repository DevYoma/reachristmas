import React from 'react';
import Navbar from '../../components/Navbar';
import './Days.css';
import { Link } from 'react-router-dom';

const Days = () => {
    const decemberDays = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]

    const mappedDecemberDays = decemberDays.map((decDays) => (
        <Link to={`/days/${decDays}`} key={decDays} className="day">Day {decDays} 🎄🎅</Link>
    ))
    // let navigate = useNavigate()
    
    return ( 
        <React.Fragment>
            <Navbar />
                <div className="days">
                    {mappedDecemberDays}
                </div>
        </React.Fragment>
     );
}
 
export default Days;