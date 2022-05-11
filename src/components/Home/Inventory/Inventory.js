import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Inventory.css'

const Inventory = ({inventory}) => {
    const { name, img, description, price, id } = inventory;
    // const navigate = useNavigate();
    // const navigateToServiceDetail = id => {
    //     navigate(`/service/${id}`)
    // }
    return (
        <div className='inventory'>
            <img className='' src={img} alt="" />
            <h2>{name}</h2>
            <p>Price:{price}</p>
            <p><small>{ description}</small> </p>
            {/* <button onClick={()=>navigateToServiceDetail(id)} className='btn-primary'>Book:{ name}</button> */}
        </div>
    );
};

export default Inventory;