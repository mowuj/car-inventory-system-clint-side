import React, { useEffect, useState } from 'react';
import './Inventorys.css'
import useCars from '../../../hooks/useCars';
import Inventory from '../Home/Inventory/Inventory';
const Inventorys = () => {
    const [inventories, setInventories] = useCars(); 
    return (
        <div id='inventory' className='container'>
            <div className="row">
                <h1 className='text-primary text-center mt-5'>Inventories</h1>
            <div className='inventory-container'>
                    {
                        inventories.map(inventory => <Inventory
                            key={inventory.id}
                            inventory={inventory}
                        ></Inventory>)
                }
                    
            </div>
            </div>
        </div>
    );
};

export default Inventorys;