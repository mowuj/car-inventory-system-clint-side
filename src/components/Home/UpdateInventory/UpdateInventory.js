import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useCarDetail from '../../../hooks/useCarDetails';
import useCars from '../../../hooks/useCars';

const UpdateInventory = () => {
    const { inventoryId } = useParams()
    const [car] = useCarDetail(inventoryId)
    
    const [inventories,setInventories] =useCars()



    
    const [quantity, setQuantity] = useState(0);
    const updateQuantity = (event,id) => {
        // const newQuantity = event.target.name.value;
        const oldQ=inventories.quantity
        setQuantity= oldQ+1
        console.log(quantity);
    }
    const handleUpdateUser = car => {
        // event.preventDefault();
        // const quantity = event.target.name.value;
        // const newQuantity =  quantity ;
        //send data to the server
        const updateQuantity = car.quantity - 1;
        console.log(JSON.stringify(car.quantity-1));
        const url = `http://localhost:5000/cars/${inventoryId}`
        console.log(url);
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
                alert('Users added Successfully');
                // event.target.reset();
        })
    }
    return (
        <div className='inventory'>
            <img className='inventory-img' src={car.img} alt="" />
            <h2>{car.name}</h2>
            <p>Price:{car.price}</p>
            <p>Quantity:{car.quantity}</p>
            <p>Quantity:{quantity}</p>
            <p><small>{car. description}</small> </p>
            <button onClick={()=>handleUpdateUser(car._id)} className='btn-primary'>Update</button>
            <form action="" onSubmit={()=>updateQuantity(car._id)}>
                <input type="text" name="quantity" id="" placeholder='quantity' required/>
                
                <input type="submit" value="Update User" />

            </form>
        </div>
    );
    
};

export default UpdateInventory;