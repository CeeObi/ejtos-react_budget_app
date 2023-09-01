import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const {expenses} = useContext(AppContext);      
    const [budgt,setbudgt] = useState('');

    const changeEvent = (event) => {   
        const totalExpenses = expenses.reduce((total, item) => {
            return (total = total + item.cost);
        }, 0);
               

        if(budgt >= 20000) {
            alert(`The value cannot exceed budget funds:  £${budgt}`);
            setbudgt("");
            }
        else if (budgt < totalExpenses){
            setbudgt(totalExpenses);
            alert("You cannot reduce the budget value lower than the spending");
            
        }
        else{
            setbudgt(event.target.value)
        }
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: £
                <input
                    required='required'
                    type='number'
                    id='budget'
                    value={budgt}
                    style={{ size: 10, width: 200 }}
                    onChange={changeEvent}
                    min="10" 
                    
                    step="10">
                </input>
            </span>
           
        </div>
    );
};
export default Budget;