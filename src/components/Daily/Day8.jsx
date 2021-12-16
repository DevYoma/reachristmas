import React ,{ useState } from 'react';
import Navbar from '../Navbar';
import Emoji from '../Emoji';
import '../../styles/Daily/Day8.css';
import Music from '../../assets/Music/Jingle-Bells.mp3';

const Day8 = () => {
    const title = "Bell Animator"
    const tasks = ["Task 8"]

    // app state
    const audio = new Audio(Music)
    const [isPlaying, setIsPlaying] = useState(false)

    const handlePlay = () => {
        // setIsPlaying(prevIsPlaying => !prevIsPlaying)
        audio.play();
        console.log(audio.play);
    }     
    
    const handlePause = () => {
        // setIsPlaying(prevIsPlaying => !prevIsPlaying)
        audio.pause();
    }

    const handleStop = () => {
        // setIsPlaying(prevIsPlaying => !prevIsPlaying)
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
                        <Emoji emoji="🔔" isPlaying={isPlaying} setIsPlaying={setIsPlaying}/>
                    </div>

                    <div className="day7__mainDiv2">
                        {mappedButtonArray}
                    </div>
                </main>
            </div>
        </React.Fragment>
     );
}
 
export default Day8;