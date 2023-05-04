import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";

const NavChef = () => {
    const [chef, setChef] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://server10-fhr7y2z3c-arefin994.vercel.app/allData')
          .then(res => res.json())
          .then(data => {
            setChef(data);
            setLoading(false);
          });
      }, []);
    const handleViewRecipes = (chef) => {
        localStorage.setItem('selectedChef', JSON.stringify(chef));
        location.href = '/chef';
    };
    return (
        <div>
            <div>
                <h3 className="text-center mt-4">Our Top <span className="thm-clr">Chefs</span></h3>
                {loading ? (
                    <div className="spinner-container text-center">
                        <button className="btn btn-primary mx-auto" type="button" disabled>
                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            Loading...
                        </button>
                    </div>
                ) : (
                    <>
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
                    </>
                )}
            </div>
            <Footer />
        </div >
    );
};

export default NavChef;