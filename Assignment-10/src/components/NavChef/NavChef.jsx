import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";

const NavChef = () => {
    const [chef, setChef] = useState([]);
    useEffect(() => {
        fetch('https://server10-fhr7y2z3c-arefin994.vercel.app/allData')
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
            <Footer></Footer>
        </div>
    );
};

export default NavChef;