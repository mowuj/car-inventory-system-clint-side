import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Inventory.css'

const Inventory = ({inventory}) => {
    const { name, img, description, price,quantity, _id } = inventory;
    const navigate = useNavigate();
    const navigateToUpdate = id => {
        navigate(`/inventory/${id}`)
    }
    return (
        <div className='inventory'>
            <img className='inventory-img' src={img} alt="" />
            <h2>{name}</h2>
            <p>Price:{price}</p>
            <p>Quantity:{quantity}</p>
            <p><small>{ description}</small> </p>
            <button onClick={()=>navigateToUpdate(_id)} className='btn-primary'>Update:{ name}</button>
        </div>
    );
};

export default Inventory;