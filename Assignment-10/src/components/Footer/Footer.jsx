import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <footer className="footer-dark">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-6 col-xs-12">
              <h3 className="footer-heading">Services</h3>
              <ul className="footer-list">
                <li><a href="#">Food Recipes</a></li>
                <li><a href="#">Food Courses</a></li>
                <li><a href="#">Food Delivery</a></li>
              </ul>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <h3 className="footer-heading">About Us</h3>
              <ul className="footer-list">
                <li><a href="#">Company</a></li>
                <li><a href="#">Team</a></li>
                <li><a href="#">Chefs</a></li>
              </ul>
            </div>
            <div className="col-md-4 col-sm-12 col-xs-12">
              <h3 className="footer-heading">RecipeHere</h3>
              <p className="footer-text">A trusted site for all of your favorite Japanese food recipes from top chefs.</p>
              <div className="footer-social-icons mb-3">
                <a href="#"><img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1365px-Facebook_f_logo_%282019%29.svg.png" alt="" /></a>
                <a href="#"><img className='logo' src="https://cdn.logojoy.com/wp-content/uploads/20210422095037/discord-mascot.png" alt="" /></a>
                <a href="#"><img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/YouTube_social_red_circle_%282017%29.svg/2048px-YouTube_social_red_circle_%282017%29.svg.png" alt="" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <p className="footer-text">&copy; 2021 RecipeHere. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;