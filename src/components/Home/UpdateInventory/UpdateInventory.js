import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useCarDetail from '../../../hooks/useCarDetails';

const UpdateInventory = () => {
    const { inventoryId } = useParams()
    
    // const [car] = useCarDetail(inventoryId)
    // console.log(car);
    const [inventory, setInventory] = useState({});
    
    useEffect(() => {
        const url = `http://localhost:5000/cars/${inventoryId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data))
    }, [inventoryId]);

    return (
        <div>
            <h2>You are about to book:{inventory.id }</h2>
            <div className='text-center'>
                
            </div>
        </div>
    );
};

export default UpdateInventory;