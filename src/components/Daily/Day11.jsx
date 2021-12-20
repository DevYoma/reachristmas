import React from 'react';
import Navbar from '../Navbar';
import '../../styles/Daily/Day11.css';

const Day11 = () => {
    return ( 
        <React.Fragment>
            <Navbar />
            <div className="day11">
                <h1>Christmas Carousel</h1>
                <main>
                    <button>Forward</button>
                    <div></div>
                    <button>Backward</button>
                </main>
            </div>
        </React.Fragment>
     );
}
 
export default Day11;