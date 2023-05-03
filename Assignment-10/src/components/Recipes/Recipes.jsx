import React, { useState, useEffect } from 'react';

const Recipes = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      {data.authors && data.authors.map(author => (
        <div key={author.name}>
          <h2>{author.name}'s Recipes</h2>
          {author.recipes.map(recipe => (
            <div key={recipe.name}>
              <h3>{recipe.name}</h3>
              <p>Ingredients: {recipe.ingredients.join(", ")}</p>
              <p>Method: {recipe.method}</p>
              <p>Rating: {recipe.rating}</p>
              <p>Favourite: {recipe.favourite ? "Yes" : "No"}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Recipes;