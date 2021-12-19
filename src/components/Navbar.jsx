import React from 'react';
import '../styles/Navbar.css';
import { useParams } from 'react-router-dom';
import { getNavData } from '../utils/getNavData';

// { title, tasks }
const Navbar = () => {
    // trying to make the navbar a reusable component...

    // this gets the day number from the URL
    let { dayId } = useParams();
    // console.log(dayId);
    const number = parseInt(dayId)

    const title = (getNavData[number - 1]?.title)
    const tasks = (getNavData[number - 1]?.tasks)


    const handleButtonClick = () => {
        alert(tasks)
    }
    return ( 
        <nav className="navbar">
            {
                title 
                ? (
                    <div className="navbar__topic">
                        <p>Day {dayId}</p> 
                        <p>{title}</p> 
                        <button className="navbar__button" onClick={handleButtonClick}>Tasks</button>
                    </div>
                ) 
                : (<p>We Love React JS  <span role="img" aria-label="accessible-emoji">⚛️</span></p>)
            }
         
        </nav>
     );
}
 
export default Navbar;