import React, { useState, useEffect } from 'react';
import './Chefs.css';

const Chefs = ({ history }) => {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setChefs(data.chefs))
      .catch(error => console.error(error));
  }, []);

  const handleViewRecipes = (chef) => {
    localStorage.setItem('selectedChef', JSON.stringify(chef));
    location.href = '/chef';
  };

  return (
    <div className="chefs-container">
      {chefs.map(chef => (
        <div key={chef.name} className="chef-card">
          <img src={chef.picture} alt={chef.name} className="chef-image" />
          <div className="chef-details">
            <div className="chef-name">{chef.name}</div>
            <div className="chef-experience">{chef.experience} years of experience</div>
            <div className="chef-recipes">{chef.recipes.length} recipes</div>
            <div className="chef-likes">{chef.likes} likes</div>
            <button className="view-recipes-btn" onClick={() => handleViewRecipes(chef) }>View Recipes</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chefs;