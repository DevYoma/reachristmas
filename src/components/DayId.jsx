import React from 'react';
import { useParams } from 'react-router-dom';
import { getDay } from '../utils/getDay';

const DayId = () => {
    let {dayId} = useParams();
    let numId = parseInt(dayId)

    return ( 
        <div className="dayId">
           {getDay(numId)}
        </div>
     );
}
 
export default DayId;