import React, { useState, useEffect } from 'react';
import './Chef.css';
import Footer from '../Footer/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import app from '../../firebase/firebase.config';

const auth = getAuth(app);

const Chef = () => {
  const [user, setUser] = useState(null);
  const chefData = JSON.parse(localStorage.getItem('selectedChef'));
  const [recipes, setRecipes] = useState(chefData.recipes);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  const handleFav = (index) => {
    const updatedRecipes = [...recipes];
    updatedRecipes[index].favourite = true;
    setRecipes(updatedRecipes);
    toast.success('Added to favourite');
  };

  const handleViewRecipe = (recipe) => {
    localStorage.setItem('selectedRecipe', JSON.stringify(recipe));
    location.href = '/recipe';
  };

  return (
    <div className="container">
      <ToastContainer />
      <h2 className="thm-clr">{chefData.name}</h2>
      <div className="d-flex">
        <div>
          <img
            src={chefData.picture}
            alt={chefData.name}
            className="chef-img img-fluid rounded-5 shadow-lg"
          />
        </div>
        <div className="my-auto px-4">
          <p className="mt-3">Experience: {chefData.experience} years</p>
          {user && <p className="mt-4">Likes: {chefData.likes}</p>}
        </div>
      </div>

      <h3 className="mt-4">Recipes:</h3>
      {user ? (
        recipes.map((recipe, index) => (
          <div key={index} className="mt-3">
            <div className="recipe-box shadow-lg w-100">
              <div className="d-flex justify-content-between">
                <div className="d-flex flex-grow-1">
                  <div className="my-auto"><img className='food-img' src={recipe.image} alt="nai" /></div>
                  <div>
                    <h4>{recipe.name}</h4>
                    <div className='d-flex'>
                      <div>
                        <p>Rating: </p>
                      </div>
                      <div className='mx-1'>
                        <Rating
                          placeholderRating={recipe.rating}
                          readonly
                          emptySymbol={<FaRegStar></FaRegStar>}
                          placeholderSymbol={<FaStar></FaStar>}
                          fullSymbol={<FaStar />}
                        />
                      </div>

                      <div className='mx-1'>
                        <p>{recipe.rating}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="my-auto">
                  {!recipe.favourite && (
                    <button className="thm-bg-clr text-white" onClick={() => handleFav(index)}>Favourite</button>
                  )}
                  <button className='thm-bg-clr text-white mx-2' onClick={() => handleViewRecipe(recipe)}>View recipe</button>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center border shadow-sm py-3">
          <p className="fs-5">Please login to gain full access to recipes</p>
          <button className="btn thm-bg-clr text-white" onClick={() => location.href = '/login'}>Login</button>
        </div>
      )}
      <Footer></Footer>
    </div>
  );
};

export default Chef;