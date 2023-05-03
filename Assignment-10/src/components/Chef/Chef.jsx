import React from 'react';

const Chef = () => {
    const chefData = JSON.parse(localStorage.getItem('selectedChef'));

    console.log(chefData)
    return (
        <div>
            <h2>{chefData.name}</h2>
            <img src={chefData.picture} alt={chefData.name} />
            <p>Experience: {chefData.experience} years</p>
            <h3>Recipes:</h3>
            {chefData.recipes.map((recipe, index) => (
                <div key={index}>
                    <h4>{recipe.name}</h4>
                    <p>Ingredients: {recipe.ingredients.join(', ')}</p>
                    <p>Method: {recipe.method}</p>
                    <p>Rating: {recipe.rating}</p>
                    <p>Favourite: {recipe.favourite ? 'Yes' : 'No'}</p>
                </div>
            ))}
            <p>Likes: {chefData.likes}</p>
        </div>
    );
};

export default Chef;