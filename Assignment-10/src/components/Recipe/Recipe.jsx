import React from 'react';
import './Recipe.css'
import './Recipe.css';

const Recipe = () => {
  const selectedRecipe = JSON.parse(localStorage.getItem('selectedRecipe'));


  const handleGoBack = () => {
    location.href = '/chef'
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h2 className="thm-clr">{selectedRecipe.name}</h2>
          <div className="recipe-img-container">
            <img src={selectedRecipe.image} alt="Recipe" className="recipe-img img-fluid rounded-5 shadow-lg recipe-img" />
          </div>
        </div>
        <div className="col-md-6 my-auto">
          <h3>Ingredients:</h3>
          <ul className="list-group">
            {selectedRecipe.ingredients.map((ingredient, index) => (
              <li key={index} className="list-group-item">{ingredient}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-12">
          <h3>Method:</h3>
          <p className="recipe-method">{selectedRecipe.method}</p>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-12">
          <h3>Rating:</h3>
          <p>{selectedRecipe.rating}</p>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-12">
          <button className="thm-bg-clr text-white mb-5" onClick={handleGoBack}>Go back</button>
        </div>
      </div>
    </div>
  );
};

export default Recipe;