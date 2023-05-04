import React, { useEffect, useState } from "react";
import Recipes from "../Recipes/Recipes"
import Chefs from "../Chefs/Chefs";
import './Home.css';
import Footer from "../Footer/Footer";
import Extra from "../Extra/Extra";

const Home = () => {
  const [chef, setChef] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/allData')
      .then(res => res.json())
      .then(data => setChef(data));
    console.log("home")
    console.log({ chef })
    { console.log(chef) }
  }, [])
  const handleViewRecipes = (chef) => {
    localStorage.setItem('selectedChef', JSON.stringify(chef));
    location.href = '/chef';
  };
  return (
    <div>
      <div className="w-75 h-75 mx-auto my-auto">
        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://cdn.tasteatlas.com/images/toplistarticles/8cc45833c34a4bc99d85375ecfde18f6.jpg?m=facebook" className="d-block w-100 acc-img" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://www.thespruceeats.com/thmb/M0dYZV-gnTFtxX1pvGtfLIex1ww=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-Ridofranz-1053855542-60b89644efd2470fbfb6475b175064df.jpg" className="d-block w-100 acc-img"  alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Some representative placeholder content for the second slide.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://restaurantclicks.com/wp-content/uploads/2022/04/Popular-Japanese-Foods.jpg" className="d-block w-100 acc-img" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div>
        <h3 className="text-center mt-4">Our Top <span className="thm-clr">Chefs</span></h3>
        <div className="chefs-container">
          {chef.allItems?.chefs.map((chef, index) => (
            <div key={chef.name} className="chef-card">
              <img src={chef.picture} alt={chef.name} className="chef-image" />
              <div className="chef-details">
                <div className="chef-name">{chef.name}</div>
                <div className="chef-experience">{chef.experience} years of experience</div>
                <div className="chef-recipes">{chef.recipes.length} recipes</div>
                <div className="chef-likes">{chef.likes} likes</div>
                <button className="view-recipes-btn" onClick={() => handleViewRecipes(chef)}>View Recipes</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Extra></Extra>
      <Footer></Footer>
    </div>

  );
};

export default Home;
