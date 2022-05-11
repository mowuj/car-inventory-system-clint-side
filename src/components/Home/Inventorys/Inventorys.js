import React, { useEffect, useState } from 'react';
import './Inventorys.css'
import useCars from '../../../hooks/useCars';
import Inventory from '../Inventory/Inventory'
import Home from '../Home/Home';
import HomeInventory from '../HomeInventory/HomeInventory'
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
                    {
                        inventories.slice(0,1).map(hInventory => <Home
                            key={hInventory.id}
                            hInventory={hInventory}
                        ></Home>)
                }
                    
            </div>
            </div>
        </div>
    );
};

export default Inventorys;