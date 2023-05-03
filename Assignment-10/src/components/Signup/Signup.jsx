import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../../firebase/firebase.config';
import Footer from '../Footer/Footer';
import './Signup.css'

const auth = getAuth(app);

const Signup = () => {

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('')
    const showToast = (message) => {
        const toast = document.createElement('div');
        toast.classList.add('toast');
        toast.textContent = message;
        document.body.appendChild(toast);
        setTimeout(() => {
            toast.classList.add('show');
            setTimeout(() => {
                toast.remove();
            }, 3000);
        }, 100); 
    }
    const handleSubmit = (event) => {
        setSuccess('');
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const photoURL = event.target.photoURL.value;
        console.log(name, email, password, photoURL);
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                setError('')
                event.target.reset();
                setSuccess('SuccessFull ^__^')
                window.location.href = '/home'; // Redirect to home page
            })
            .catch(error =>{
                console.error(error)
                setError(error.message);
                if (error.code === 'auth/email-already-in-use') {
                    showToast('Email already exists');
                }
            })
    }



    return (
        <div className='text-center'>
            <h3 className='py-5'>Please Signup</h3>
            <form className='mt-5' onSubmit={handleSubmit}>
                <input required type="text" id="name" placeholder="Your name" />
                <br />
                <input required type="email" id="email" placeholder="Your email" />
                <br />
                <input required type="password" id="password" placeholder="Your password" />
                <br />
                <input type="url" id="photoURL" placeholder="Your photo URL" />
                <br />
                <input type="submit" value="Register" />
            </form>
            <p className='text-danger'>{error}</p>
            <p className='text-success'>{success}</p>
            <Footer></Footer>
        </div>
    );
};

export default Signup;