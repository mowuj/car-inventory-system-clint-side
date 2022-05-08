import React from 'react';
import useCars from '../../../../hooks/useCars';

const Inventory = () => {
        const [cars, setcars] = useCars();  
    return (
        <div id='services' className='container'>
            <div className="row">
                <h1 className='text-primary text-center mt-5'>Our Services</h1>
            <div className='inventory-container'>
                
            </div>
            </div>
        </div>
    );
};

export default Inventory;