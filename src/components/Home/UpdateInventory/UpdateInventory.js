import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useCarDetail from '../../../hooks/useCarDetails';

const UpdateInventory = () => {
    const { inventoryId } = useParams()
    const [car] = useCarDetail(inventoryId)
    const [quantity, setQuantity] = useState(0);
    let oldQuantity;
    const updateQuantity = id => {
    setQuantity= oldQuantity + 1
    
    }
    
    return (
        <div className='inventory'>
            <img className='inventory-img' src={car.img} alt="" />
            <h2>{car.name}</h2>
            <p>Price:{car.price}</p>
            <p>Quantity:{car.quantity}</p>
            <p>Quantity:{quantity}</p>
            <p><small>{car. description}</small> </p>
            <button onClick={()=>updateQuantity(car._id)} className='btn-primary'>Update</button>
        </div>
    );
    
};

export default UpdateInventory;