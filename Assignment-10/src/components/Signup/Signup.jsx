import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';
import app from '../../firebase/firebase.config';
import Footer from '../Footer/Footer';
import './Signup.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const Signup = () => {

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('')

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
                window.location.href = '/home';
            })
            .catch(error =>{
                console.error(error)
                setError(error.message);
                if (error.code === 'auth/email-already-in-use') {
                    toast.error('Email Already Exist');
                }
            })
    }

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(() => {
                window.location.href = '/home';
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };

    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
            .then(() => {
                window.location.href = '/home';
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };

    return (
        <div className='text-center'>
            <ToastContainer />
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
            <div className='mt-3'>
                <button type="button" className="btn btn-danger" onClick={handleGoogleSignIn}>Sign up with Google</button>
                <button type="button" className="btn btn-dark ms-2" onClick={handleGithubSignIn}>Sign up with GitHub</button>
            </div>
            <Footer></Footer>
        </div>
    );

};

export default Signup;