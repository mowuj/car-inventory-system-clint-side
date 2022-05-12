import React from 'react';
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
    return (
        <div>
            <Banner></Banner>
            <div id='inventory' className='container'>
            <div className="row">
                <h1 className='text-primary text-center mt-5'>Inventories</h1>
            <div className='inventory-container'>
                    {
                        inventories.slice(0, 3).map(inventory => <Inventory
                            key={inventory.id}
                            inventory={inventory}
                        ></Inventory>)
                }
                </div>
                
            </div>
            
        </div>
            <Mission></Mission>
            <Footer></Footer>
        </div>
    );
};

export default Home;