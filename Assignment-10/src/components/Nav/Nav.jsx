
import { Link, Outlet } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">RecipeHere</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/recipes">Recipes</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/authors">Authors</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/blog'>Blog</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="d-flex justify-content-end">
                        <button className="btn btn-primary ms-2">Login</button>
                        <button className="btn btn-primary ms-2">Sign up</button>
                    </div>
                </div>
            </nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Nav;