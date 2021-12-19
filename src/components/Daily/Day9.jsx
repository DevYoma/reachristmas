import React, { useState } from 'react';
import Navbar from '../Navbar';
import '../../styles/Daily/Day9.css';
import Switch from 'react-switch'
import Emoji from '../Emoji';

const Day9 = () => {
    const title="🤴Turn on the Decorations"
    const tasks = [
        "task 9"
    ]
    // app state
    const [isChecked, setIsChecked] = useState(false)

    const handleChange = () => {
        setIsChecked(prevIsChecked => !prevIsChecked)
    }

    return ( 
        <React.Fragment>
            <Navbar title={title} tasks={tasks}/>
            <div className="day9">
                <main>
                    <div>
                        { isChecked && (<span><Emoji emoji="🎅"/></span>)}
                        🏡
                        { isChecked && (<span><Emoji emoji="💡"/></span>)}    
                    </div>

                    <div>
                        <label>
                            <Switch
                                onChange={handleChange}
                                checked={isChecked}
                                uncheckedIcon={false}
                                checkedIcon={false}
                            />
                        </label>
                    </div>
                </main>
            </div>
        </React.Fragment>
     );
}
 
export default Day9;