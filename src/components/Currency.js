import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext'; 
const Currency = () => {
    const { currency,dispatch } = useContext(AppContext);

    const changeCurrency = (val)=>{
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val,
        })
}

    return (        
        <div className='alert alert-secondary'>                
            <select className="custom-select" id="inputGroupSelect02" style={{backgroundColor:"lime",border: "none", color:"white"}} onChange={event=>changeCurrency(event.target.value)}>                
                    <option value="Currency" name="Currency" disabled selected hidden>Currency ({currency} Pound)</option>
                    <option value="$" name="Dollar" style={{color:"black"}}>$ Dollar</option>
                    <option defaultValue value="£" name="Pound" style={{color:"black"}}>£ Pound</option>
                    <option value="€" name="Euro" style={{color:"black"}}>€ Euro</option>
                    <option value="₹" name="Ruppee" style={{color:"black"}}>₹ Ruppee</option>                    
            </select>
        </div>
    );
};
export default Currency;

