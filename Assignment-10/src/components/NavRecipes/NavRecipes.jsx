import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";

const NavRecipes = () => {
    const [chef, setChef] = useState([]);

    const handleFav = (index) => {
        const updatedRecipes = [...recipes];
        updatedRecipes[index].favourite = true;
        setRecipes(updatedRecipes);
    };

    const handleViewRecipe = (recipe) => {
        localStorage.setItem('selectedRecipe', JSON.stringify(recipe));
        location.href = '/recipe';
    };
    useEffect(() => {
        fetch('http://localhost:5000/allData')
            .then(res => res.json())
            .then(data => setChef(data));
        console.log("home")
        console.log({ chef })
        { console.log(chef) }
    }, [])
    return (
        <div>
            <div className="recipe-cards">
                {chef.allItems?.chefs.map((chefData, index) => (
                    <div key={index}>
                        {chefData.recipes.map((recipe, index) => (
                            <div key={index} className="mt-3">
                                <div className="recipe-box shadow-lg w-100">
                                    <div className="d-flex justify-content-between">
                                        <div className="d-flex flex-grow-1">
                                            <div className="my-auto"><img className='food-img' src={recipe.image} alt="nai" /></div>
                                            <div>
                                                <h4>{recipe.name}</h4>
                                                <p>Rating: {recipe.rating}</p>
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
                        ))}
                    </div>
                ))}
            </div>
            <Footer></Footer>
        </div>
    );
};

export default NavRecipes;