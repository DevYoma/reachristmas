import React, { useState } from 'react';
import Navbar from '../Navbar';
import '../../styles/Daily/Day4.css';

const Day4 = () => {
    const title = "Shopping List";
    const tasks = [
        "task 4"
    ]

    // app state
    const[shoppingList, setShoppingList] = useState([
        {id: 1, todo: "Candles", completed: false},
        {id: 2, todo: "Decoration", completed: false},
        {id: 3, todo: "Chocolate", completed: false}
    ]);
    const [inputValue, setInputValue] = useState("");
    // const [isChecked, setIsChecked] = useState(false);

    const onInputChange = (event) => {
        setInputValue(event.target.value)
    }
    
    const handleButtonClick = (event) => {
        event.preventDefault();
        if(inputValue === ""){
            return alert("Form field cannot be empty");
        }
        setShoppingList(prevShoppingList => [...prevShoppingList, {id: shoppingList.length + 1, todo: inputValue, completed: false}])
        setInputValue("")
    }

    // const handleCheckBox = () => {
    //     setIsChecked(prevChecked => !prevChecked);
    // }

    // const handleDelete = ({id}) => {
    //     setShoppingList(prevShoppingList => prevShoppingList.filter((item) => item.id !== id))
    // }
  
    const mappedShoppingList = shoppingList.map(item => (
        <div  key={item.id} className="day4__listContainer">
            {/* <input type="checkbox" name="" id="" onClick={handleCheckBox} checked={isChecked}/> */}
            <li className="day4__li">{item.todo}</li>
            {/* (id) => handleDelete(todo) */}
            {/* <button onClick={() => handleDelete(shoppingList)}>Delete</button> */}
        </div>
    ))
    return ( 
        <React.Fragment>
            <Navbar title={title} tasks={tasks}/>
            <div className="day4">
                <h1>Christmas Shopping List</h1>

                <div>
                    <form>
                        <input 
                            required    
                            type="text" 
                            value={inputValue} 
                            onChange={onInputChange}
                            placeholder="Enter ShoppingList"
                        />
                        <button onClick={handleButtonClick}>Add</button>
                    </form>
                    {mappedShoppingList}
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default Day4;