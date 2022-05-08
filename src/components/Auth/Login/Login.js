import React, { useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import './Login.css'
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation()
    let from =location.state?.from?.pathname ||"/"
    let errorElement;
    const [
            signInWithEmailAndPassword,
            user,
            loading,
            error,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    if (user) {
        navigate(from,{replace:true})
    }
    if (loading || googleLoading) {
    return <Loading></Loading>
    }
    if (error || googleError) {
        errorElement=<p className='text-danger'>Error: {error?.message}{googleError?.message }</p>
    
    }
    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email,password)
    }
    const navigateRegister = (event) => {
        navigate('/signup')
    }
    const resetPassword = async() => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('Please enter your email for Reset Password')
        }
    }
    return (
        
        <div className="login-container">
            <div className="login-title">LOGIN</div>
            <form className="login-form" onSubmit={handleSubmit}>
                {errorElement}
                <input ref={emailRef} type="email" placeholder="Your Email" />
                
                <input ref={passwordRef} type="password" placeholder="password" />
                
                <button>Login</button>

                {/* {error && <p className="error-message">{error}</p> } */}
                {/* {hookError && <p className="error-message">{hookError?.message}</p>} */}
                <ToastContainer />

                <p>Don't have an account? <Link to="/signup" onClick={navigateRegister}>Sign up first</Link> </p>
               <p>Forget Password? <a className='btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</a></p>
            </form>

            <button onClick={()=>signInWithGoogle()}>Google</button>
        </div>
    );
};

export default Login;