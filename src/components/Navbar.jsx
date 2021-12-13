import React from 'react';
import '../styles/Navbar.css';
import { useParams } from 'react-router-dom';
// import { getNavData } from '../utils/getNavData';

const Navbar = ({ title, tasks }) => {
    // trying to make the navbar a reusable component...
    // console.log(getNavData);


    // this gets the day number from the URL
    let { dayId } = useParams();
   
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