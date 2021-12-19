import React from 'react';
import Day1 from '../components/Daily/Day1';
import Day2 from '../components/Daily/Day2';
import Day3 from '../components/Daily/Day3';
import Day4 from '../components/Daily/Day4';
import Day5 from '../components/Daily/Day5';
import Day6 from '../components/Daily/Day6';
import Day7 from '../components/Daily/Day7';
// import Day8 from '../components/Daily/Day8';
import Day9 from '../components/Daily/Day9';
import Day10 from '../components/Daily/Day10';
import Day11 from '../components/Daily/Day11';
import NotAvailable from '../components/NotAvailable';

export const getDay = (dayId) =>  {
    if(dayId === 1){
        return (
            <Day1 />
        )
    }
    else if(dayId === 2){
        return (
            <Day2 />
        )
    }
    else if(dayId === 3){
        return (
            <Day3 />
        )
    }
    else if(dayId === 4){
        return (
            <Day4 />
        )
    }
    else if(dayId === 5){
        return (
            <Day5 />
        )
    }
    else if(dayId === 6){
        return (
            <Day6 />
        )
    }
    else if(dayId === 7){
        return (
            <Day7 />
        )
    }
    else if(dayId === 8){
        return (
            <NotAvailable />
            // <Day8 />
        )
    }
    else if(dayId === 9){
        return (
            <Day9 />
        )
    }
    else if(dayId === 10){
        return (
            <Day10 />
        )
    }
    else if(dayId === 11){
        return (
            <Day11 />
        )
    }
    else if(dayId === 12){
        return (
            <h2>Day 12</h2>
        )
    }
    else if(dayId === 13){
        return (
            <h2>Day 13</h2>
        )
    }
    else if(dayId === 14){
        return (
            <h2>Day 14</h2>
        )
    }
    else if(dayId === 15){
        return (
            <h2>Day 15</h2>
        )
    }
    else if(dayId === 16){
        return (
            <h2>Day 16</h2>
        )
    }
    else if(dayId === 17){
        return (
            <h2>Day 17</h2>
        )
    }
    else if(dayId === 18){
        return (
            <h2>Day 18</h2>
        )
    }
    else if(dayId === 19){
        return (
            <h2>Day 19</h2>
        )
    }
    else if(dayId === 20){
        return (
            <h2>Day 20</h2>
        )
    }
    else if(dayId === 21){
        return (
            <h2>Day 21</h2>
        )
    }
    else if(dayId === 22){
        return (
            <h2>Day 22</h2>
        )
    }
    else if(dayId === 23){
        return (
            <h2>Day 23</h2>
        )
    }
    else if(dayId === 24){
        return (
            <h2>Day 24</h2>
        )
    }
 
    else{
        return(
            <h2>Error</h2>
        )
    }
}