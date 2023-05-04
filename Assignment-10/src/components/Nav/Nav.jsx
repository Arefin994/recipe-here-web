import { Link, Outlet, useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import app from '../../firebase/firebase.config';
import { useState, useEffect } from 'react';

const auth = getAuth(app);

const Nav = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });
    }, []);

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                setUser(null);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Recipe<span className='thm-clr'>Here</span></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul className="navbar-nav flex-grow-1">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/recipes">Recipes</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/chefs">Chefs</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/blog'>Blog</Link>
                            </li>
                        </ul>
                        <div className="ms-auto">
                            {user ? (
                                <ul className="navbar-nav">
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <img src={user.photoURL} alt={user.displayName} className="rounded-circle me-2" style={{ width: '40px', height: '40px' }} />
                                            {user.email}
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><button className="dropdown-item" onClick={handleSignOut}>Log out</button></li>
                                        </ul>
                                    </li>
                                </ul>
                            ) : (
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <button className="btn thm-bg-clr ms-2 text-white" onClick={() => navigate('/login')}>Login</button>
                                    </li>
                                    <li className="nav-item">
                                        <button className="btn thm-bg-clr ms-2 text-white" onClick={() => navigate('/signup')}>Sign up</button>
                                    </li>
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Nav;