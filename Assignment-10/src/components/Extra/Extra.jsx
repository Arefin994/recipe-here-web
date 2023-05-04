import React from 'react';
import './Extra.css'
const Extra = () => {

    const handleClick = () =>{
        location.href='/recipes';
    }

    return (
        <div>
            <div className='d-flex thm-bg-clr my-3'>
                <div className=' '>
                    <img className='custom-img' src="https://www.cktravels.com/wp-content/uploads/2020/12/what-to-eat-in-japan-1150x818.jpg" alt="" />
                </div>
                <div className='w-50 text-white text-center my-auto px-4' >
                    <div className="jumbotron text-center">
                        <h1 className="display-5">Discover the Best Recipes</h1>
                        <p className="lead">Learn to cook Japanese foods like a pro with our experienced chefs</p>
                        <div className="d-flex justify-content-center">
                            <div className="text-center mx-auto px-3">
                                <h4>Easy to Follow Recipes</h4>
                                <ul>
                                    <li>Clear instructions</li>
                                    <li>Simple ingredient lists</li>
                                    <li>Quick preparation times</li>
                                </ul>
                            </div>
                            <div className="text-center mx-auto px-3">
                                <h4>Expert Chefs</h4>
                                <ul>
                                    <li>Years of experience</li>
                                    <li>Proven track records</li>
                                    <li>Passionate about cooking</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="banner-container rounded">
                <div className="banner">
                    <img src="https://c4.wallpaperflare.com/wallpaper/548/539/716/food-sushi-wallpaper-preview.jpg" alt="Banner Image" />
                    <div className="banner-content">
                        <h1 className="banner-title thm-bg-clr ">Check out our latest recipes</h1>
                        <button onClick={handleClick} className="banner-btn">Have a look</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Extra;