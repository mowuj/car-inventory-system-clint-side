
import React, { useState } from 'react';
import { ToastContainer } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const Signup = () => {
    
    const navigate = useNavigate();
    const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
    ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
    let errorElement;
    const navigateLogin = () => {
        navigate('/home')
    }
    if (loading) {
        return <Loading></Loading>
    }
    if (user) {
        
    }
    if (error) {
        errorElement=<p className='text-danger'>Error: {error?.message}</p>
    }
    const handleSignUp = async (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPass = event.target.confirmPass.value;
        
            await createUserWithEmailAndPassword(email, password)
            navigate('/home')
        
        
        
    }
    return (
        <div className="login-container">
            <div className="login-title">Sign up</div>
            {errorElement}
            <form className="login-form" onSubmit={handleSignUp}>
                <input name="email" type="text" placeholder="Your Email" />
                
                <div className="relative">
                    <input name='password' type="password" placeholder="password"  />
                
                </div>
                
                <input
                    name='confirmPass'
                    type="password"
                    placeholder="confirm password"
                />
                <p>Already Have an account? <Link to='/login' className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Login</Link></p>
                <button>Sign up</button>

                
                <ToastContainer />
            </form>
        </div>
    );
};

export default Signup;