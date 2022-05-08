
import { ToastContainer } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Auth/Login/Login';
import About from './components/Home/About/About';
import Footer from './components/Home/Footer/Footer';
import Header from './components/Home/Header/Header';
import Home from './components/Home/Home/Home';
import NotFound from './components/Shared/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>        
        <Route path='about' element={<About></About>}></Route>        
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      
      <ToastContainer />
    </div>
  );
}

export default App;
