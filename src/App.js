
import { ToastContainer } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Auth/Login/Login';
import RequireAuth from './components/Auth/RequireAuth/RequireAuth';
import Signup from './components/Auth/Signup/Signup';
import About from './components/Home/About/About';
import AddNew from './components/Home/AddNew/AddNew';
import Footer from './components/Home/Footer/Footer';
import Header from './components/Home/Header/Header';
import Home from './components/Home/Home/Home';
import Inventory from './components/Home/Inventorys/Inventorys';
import ManageInventory from './components/Home/ManageInventory/ManageInventory';
import UpdateInventory from './components/Home/UpdateInventory/UpdateInventory';
import NotFound from './components/Shared/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>        
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>        
        <Route path='/inventory/:inventoryId' element={<UpdateInventory></UpdateInventory>}></Route>        
        <Route path='about' element={<About></About>}></Route> 
        <Route path='/addnewitem' element={
          <RequireAuth>
                <AddNew></AddNew>
        </RequireAuth>}>
        </Route>
        <Route path='/manageinventory' element={
          <RequireAuth>
                <ManageInventory></ManageInventory>
        </RequireAuth>}>
        </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      
      <ToastContainer />
    </div>
  );
}

export default App;
