import { Carousel } from 'bootstrap';
import React from 'react';
import { Table } from 'react-bootstrap';
import useCars from '../../../hooks/useCars';

const ManageInventory = () => {
    const [inventories, setInventories] = useCars();
    const handleDelete = id => {
        const proceed =window.confirm('Are You sure?')
        if (proceed) {
            const url =`http://localhost:5000/cars/${id}`

            fetch(url, {
                method:'DELETE'
            })
                .then(res => res.json())
                .then(data=>console.log(data))
                const remaining=inventories.filter(inventory=>inventory._id!==id)
                setInventories(remaining)
        }
    }

    return (
        <div className='container col-md-6'>
            <h2>Manage inventories</h2>
{
        inventories.map(inventory => <div key={inventory._id}>
        <Table striped bordered hover size="sm">
  {/* <thead>
    <tr>
      
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead> */}
  <tbody >
    <tr>
      
      <td>{ inventory.name}</td>
      <td>{ inventory.price}</td>
                        <td>{inventory.quantity}</td>
      
      <td><button onClick={()=>handleDelete(inventory._id)}>X</button></td>
      
    </tr>
  </tbody>
</Table>
    </div>)
    }
        </div>
    );
};

export default ManageInventory;