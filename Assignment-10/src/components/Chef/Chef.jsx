import React from 'react';

const Chef = () => {
    const chefData = JSON.parse(localStorage.getItem('selectedChef'));

    console.log(chefData)
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h2 className="text-primary">{chefData.name}</h2>
                    <img src={chefData.picture} alt={chefData.name} className="img-fluid rounded" />
                    <p className="mt-3">Experience: {chefData.experience} years</p>
                    <h3 className="mt-4">Recipes:</h3>
                    {chefData.recipes.map((recipe, index) => (
                        <div key={index} className="mt-3">
                            <h4>{recipe.name}</h4>
                            <p>Ingredients: {recipe.ingredients.join(', ')}</p>
                            <p>Method: {recipe.method}</p>
                            <p>Rating: {recipe.rating}</p>
                            <p>Favourite: {recipe.favourite ? 'Yes' : 'No'}</p>
                        </div>
                    ))}
                    <p className="mt-4">Likes: {chefData.likes}</p>
                </div>
            </div>
        </div>
    );
};

export default Chef;