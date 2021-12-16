import React from 'react';
import '../styles/Emoji.css';

const Emoji = ({emoji, isPlaying, setIsPlaying}) => {
    return ( 
        <span className={isPlaying ? "playing" : "notPlaying"}>
            {emoji}
        </span>
     );
}
 
export default Emoji;