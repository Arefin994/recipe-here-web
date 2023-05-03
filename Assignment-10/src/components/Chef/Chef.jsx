import React from 'react';
import './Chef.css';
const Chef = () => {
    const chefData = JSON.parse(localStorage.getItem('selectedChef'));

    console.log(chefData)
    return (
        <div className="container">
            <div>
                <div>
                    <h2 className="thm-clr">{chefData.name}</h2>
                    <div className='d-flex'>
                        <div>
                            <img src={chefData.picture} alt={chefData.name} className="chef-img img-fluid rounded-5 shadow-lg" />
                        </div>
                        <div className='my-auto px-4'>
                            <p className="mt-3">Experience: {chefData.experience} years</p>
                            <p className="mt-4">Likes: {chefData.likes}</p>
                        </div>
                    </div>

                    <h3 className="mt-4">Recipes:</h3>
                    {chefData.recipes.map((recipe, index) => (
                        <div key={index} className="mt-3">
                            <div className='recipe-box shadow-lg w-100'>
                                <div className='d-flex'>
                                    <div className='my-auto border p-2 m-6'>
                                        a img
                                    </div>
                                    <div>
                                        <h4>{recipe.name}</h4>
                                        {/* <p>Ingredients: {recipe.ingredients.join(', ')}</p>
                                         <p>Method: {recipe.method}</p> */}
                                        <p>Rating: {recipe.rating}</p>
                                        
                                    </div>
                                    {
                                        recipe.favourite ? <p> {"yes"}</p> : <p> {"no"}</p>
                                    }
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default Chef;