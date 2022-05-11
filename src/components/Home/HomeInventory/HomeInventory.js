import React from 'react';

const HomeInventory = ({hInventory}) => {
        const { name, img, description, price, id } = hInventory;

    return (
        <div>
            <div className='inventory'>
            <img className='' src={img} alt="" />
            <h2>{name}</h2>
            <p>Price:{price}</p>
            <p><small>{ description}</small> </p>
            {/* <button onClick={()=>navigateToServiceDetail(id)} className='btn-primary'>Book:{ name}</button> */}
        </div>
        </div>
    );
};

export default HomeInventory;