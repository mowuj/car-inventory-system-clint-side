import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { Table } from 'react-bootstrap';
const MyItems = () => {
    const [user] = useAuthState(auth);
    const [myItems, setMyItems] = useState([]);
    
    const navigate = useNavigate();
    useEffect(() => {

        const getItems = async () => {
            const email = user?.email;
            const url=`https://polar-wildwood-53235.herokuapp.com/cars?email=${email}`
            try {
                const { data } = await axios.get(url, {
                headers: {
                    authorization:`Bearer ${localStorage.getItem('accessToken')}`
                }
            });
                setMyItems(data)
                
            }
            catch (error) {
                console.log(error.message);
                if (error.response.status === 403 || error.response.status === 401) {
                    signOut(auth);
                    navigate('/login')
                }
            }
        }
        getItems();
    },[user])
    return (
        <div className='w-50 mx-auto'>
            <h2>My Items:{myItems.length}</h2>
            
            {
                myItems.map(item => <div key={item._id}>
                    
                <Table striped bordered hover size="sm">
  <tbody>
    <tr>
      
      <td>{item.name}</td>
      <td>{item.quantity}</td>
      
    </tr>
   
  </tbody>
</Table>
                </div>)
            }
        </div>
    );
};

export default MyItems;