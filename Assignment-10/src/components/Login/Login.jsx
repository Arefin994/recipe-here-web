import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import app from '../../firebase/firebase.config';

const auth = getAuth(app);

const Login = () => {

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('')
    const handleSubmit = (event) => {
        setSuccess('');
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                setError('')
                event.target.reset();
                setSuccess('SuccessFull ^__^')
            })
            .catch(error =>{
                console.error(error)
                setError(error.message);   
            })
    }

    return (
        <div className='text-center'>
            <h3>Please Login</h3>
            <form onSubmit={handleSubmit}>
                <input required type="email" id="email" placeholder="Your email" />
                <br />
                <input required type="password" id="password" placeholder="Your password" />
                <br />
                <input type="submit" value="Register" />
            </form>
            <p className='text-danger'>{error}</p>
            <p className='text-success'>{success}</p>
        </div>
    );
};

export default Login;