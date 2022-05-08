import React from 'react';
import './Footer.css'
import logo3 from '../../../images/logo3.png'
const Footer = () => {
    const today = new Date();
    return (
        <div className='footer-container'>
            <div className='footer'>
                <div className='footer-text ms-md-5'>
                    <h2> <img src={logo3} alt="" />
                        Fitness Studio</h2>
                    <p>Level-3,Ahsan Manzil,Khilkhet</p>
                    <p>Web:Ahsan@habib.com</p>
                    <p>Contact us:01939141710</p>
                    <p> <small>Available:Sat-Thu,09:00 AM to 7:00 PM</small> </p>
                </div>
                <div className='me-5'>
                    <input className='form-control' type="text" name="search" id="" placeholder='Search Here'/>
                    <button className='btn btn-light my-3'>Search</button>
                </div>
                <div className='footer-text ms-md-5'>
                    <p>About us</p>
                    <p>Packages</p>
                    <p>Services</p>
                    <p>Terms and Conditions</p>
                    <p>Privacy Policy</p>
                </div>
            </div>
            <p className='text-md-center text-white' style={{fontSize:'20px'}}>Copyright &copy; {today.getFullYear()} Ahsan Habib</p>
        </div>
    );
};

export default Footer;