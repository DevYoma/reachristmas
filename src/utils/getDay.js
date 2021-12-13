import React from 'react';
import Day1 from '../components/Daily/Day1';
import Day2 from '../components/Daily/Day2';
import Day3 from '../components/Daily/Day3';
import Day4 from '../components/Daily/Day4';
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
            // <NotAvailable />
            <Day3 />
        )
    }
    else if(dayId === 4){
        return (
            // <NotAvailable />
            <Day4 />
        )
    }
    else if(dayId === 5){
        return (
            <NotAvailable />
        )
    }
    else if(dayId === 6){
        return (
            <NotAvailable />
        )
    }
    else if(dayId === 7){
        return (
            <NotAvailable />
        )
    }
    else if(dayId === 8){
        return (
            <NotAvailable />
        )
    }
    else if(dayId === 9){
        return (
            <NotAvailable />
        )
    }
    else if(dayId === 10){
        return (
            <NotAvailable />
        )
    }
    else if(dayId === 11){
        return (
            <h2>Day 11</h2>
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