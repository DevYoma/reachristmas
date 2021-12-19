import React, { useState } from 'react';
import Navbar from '../Navbar';
import '../../styles/Daily/Day2.css';
import Switch from "react-switch";

const Day2 = () => {

    // app State
    const [isChecked, setIsChecked] = useState(true)

    const backgroundStyles = {
        background: isChecked ? "#C7375F" : "#E6E6E6"
    }

    const mainStyles = {
        background: isChecked ? "#F0F4F7" : "#344D2F",
        fontFamily: isChecked ? "cursive" : 'cursive',
        color: isChecked ? "black" : "white"
    }
    
    function handleChange(){
        setIsChecked(prevIsChecked => !prevIsChecked)
        // console.log(isChecked);
    }
    
    // console.log(isChecked);
    const christmasIcon = "🎅"
    const snowIcon = "☃️"

    return ( 
        <React.Fragment>
            <Navbar /> 
            <div style={backgroundStyles} className="day2">
                <main className="day2__main" style={mainStyles}>
                    <div className="day2__mainDiv">
                        {<span role="img" aria-label="accessible-emoji">{isChecked ? ("🎅") : ("☃️")}</span> }
                        {isChecked ? (<h1 >Merry Christmas</h1>) : (<h1>Let it Snow !</h1>)}
                    </div>
                    <div>
                        <label>
                            <Switch
                                onChange={handleChange}
                                checked={isChecked}
                                uncheckedIcon={false}
                                checkedIcon={false}
                                checkedHandleIcon={christmasIcon}
                                uncheckedHandleIcon={snowIcon}
                            />
                        </label>
                    </div>
                </main>
            </div>
        </React.Fragment>
     );
}
 
export default Day2;