import React from 'react';
import Navbar from '../Navbar';
import Emoji from '../Emoji';
import '../../styles/Daily/Day7.css';
import Music from '../../assets/Music/Jingle-Bells.mp3';

const Day7 = () => {
    const title = "Play a Christmas Song"
    const tasks = ["Task 7"]

    // app state
    const audio = new Audio(Music)

    const handlePlay = () => {
        audio.play()
    }    
    
    const handlePause = () => {
        audio.pause()
    }

    const handleStop = () => {
        audio.pause();
        audio.currentTime = 0;
    }
  
    const buttonArray = [
        {
            id: 1,
            color: "#344D2F",
            control: "Play",
            onClick: handlePlay
        },
        {
            id: 2,
            color: "#FAC57D",
            control: "Pause",
            onClick: handlePause
        },
        {
            id: 3,
            color: "#C7375F",
            control: "Stop",
            onClick: handleStop
        }
    ]

  

    const mappedButtonArray = buttonArray.map(item => (
        <button 
            key={item.id} 
            style={{background: item.color}}
            className="day7__button" 
            onClick={item.onClick}
        >
            {item.control}
        </button>
    ))

    return ( 
        <React.Fragment>
            <Navbar title={title} tasks={tasks}/>
            <div className="day7">
                <main className="day7__main">
                    <div className="day7__mainDiv1">
                        <Emoji emoji="🎄"/>
                        <p>Jingle all the way!</p>
                        <Emoji emoji="🔔"/>
                    </div>

                    <div className="day7__mainDiv2">
                        {mappedButtonArray}
                    </div>
                </main>
            </div>
        </React.Fragment>
     );
}
 
export default Day7;