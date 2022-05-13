import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useCarDetail from '../../../hooks/useCarDetails';
import useCars from '../../../hooks/useCars';

const UpdateInventory = (id) => {
    
    const { inventoryId } = useParams()
    const [car] = useCarDetail(inventoryId)
    // const [inventories,setInventories] =useCars()
    // const [quantity, setQuantity] = useState(0);

    const handleUpdateCar = car => {
        // event.preventDefault();
        // const quantity = event.target.name.value;
        // const newQuantity =  quantity ;
        //send data to the server
        const updateQuantity = car.quantity;
        console.log(updateQuantity);
        const url = `https://polar-wildwood-53235.herokuapp.com/cars${inventoryId}`
        
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(updateQuantity)
        })
        .then(res=>res.json())
            .then(data => {
                console.log('success', data);
                alert('Update Successfully');
                // event.target.reset();
        })
    }
    return (
        <div className='inventory'>
            <img className='inventory-img' src={car.img} alt="" />
            <h2>{car.name}</h2>
            <p>Price:{car.price}</p>
            <p>Quantity:{car.quantity}</p>
            
            <p><small>{car. description}</small> </p>
            <button onClick={()=>handleUpdateCar(car._id)} className='btn-primary'>Delivered</button>
            {/* <form action="" onSubmit={()=>updateQuantity(car._id)}>
                <input type="text" name="quantity" id="" placeholder='quantity' required/>
                
                <input type="submit" value="Update User" />

            </form> */}
        </div>
        
    );
    
};

export default UpdateInventory;