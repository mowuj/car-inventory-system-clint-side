import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCars from '../../../hooks/useCars';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import HomeInventory from '../HomeInventory/HomeInventory';
import Inventory from '../Inventory/Inventory'
import Inventorys from '../Inventorys/Inventorys';
import Mission from '../Mission/Mission';
// import HomeInventory from './HomeInventory/HomeInventory';

const Home = () => {
    const [inventories, setInventories] = useCars(); 
    // const { name, img, description, price, id } = hInventory;
    // console.log(hInventory);
    const navigate = useNavigate();
    const navigateToUpdate = id => {
        navigate(`/inventory/${id}`)
    }
    const handeNavigate= () => {
        navigate('/inventory')
    }
    return (
        <div>
            <Banner></Banner>
            <div id='inventory' className='container'>
            <div className="row">
                <h1 className='text-primary text-center mt-5'>Inventories</h1>
            <div className='inventory-container'>
                    {
                        inventories.slice(0, 6).map(inventory => <Inventory
                            key={inventory.id}
                            inventory={inventory}
                        ></Inventory>)
                        }
                        <button onClick={handeNavigate} className='btn-info ms-auto p-2'>Go to Inventory</button>

                </div>
                
            </div>
            
        </div>
            <Mission></Mission>
            <Footer></Footer>
        </div>
    );
};

export default Home;