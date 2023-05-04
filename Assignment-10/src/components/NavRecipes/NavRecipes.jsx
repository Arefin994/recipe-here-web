import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";

const NavRecipes = () => {
    const [chef, setChef] = useState([]);

    const handleViewRecipe = (recipe) => {
        localStorage.setItem('selectedRecipe', JSON.stringify(recipe));
        location.href = '/recipe';
    };

    const handleFav = (chefIndex, recipeIndex) => {
        const newChef = { ...chef };
        newChef.allItems.chefs[chefIndex].recipes[recipeIndex].favourite = true;
        setChef(newChef);
        toast.success('Added to favourite');
    }
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://server10-fhr7y2z3c-arefin994.vercel.app/allData')
            .then(res => res.json())
            .then(data => {
                setChef(data);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <ToastContainer />
            <div>
                {loading ? (
                    <div className="spinner-container text-center">
                        <button className="btn btn-primary mx-auto" type="button" disabled>
                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            Loading...
                        </button>
                    </div>
                ) : (
                    <>
                        <div className="recipe-cards">
                            {chef.allItems?.chefs.map((chefData, chefIndex) => (
                                <div key={chefIndex}>
                                    {chefData.recipes.map((recipe, recipeIndex) => (
                                        <div key={recipeIndex} className="mt-3">
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
                                                            <button className="thm-bg-clr text-white" onClick={() => handleFav(chefIndex, recipeIndex)}>Favourite</button>
                                                        )}
                                                        <button className='thm-bg-clr text-white mx-2' onClick={() => handleViewRecipe(recipe)}>View recipe</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
            <Footer></Footer>
        </div>
    );
};

export default NavRecipes;
