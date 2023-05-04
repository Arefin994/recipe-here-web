import React from 'react';
import './Error.css'

const Error = () => {
    return (
        <div className="error-404 d-flex">
            <div>
                <div className="error-code m-b-10 m-t-20">404 <i className="fa fa-warning"></i></div>
                <h2 className="font-bold">Oops 404! That page can’t be found.</h2>

                <div className="error-desc">
                    Sorry, but the page you are looking for was either not found or does not exist. <br />
                    Try refreshing the page or click the button below to go back to the Homepage.
                    <div><br />
                        <a className=" login-detail-panel-button btn border shadow-sm" href="/home">
                            <a href="/home" className="btn btn-primary" /><span className="glyphicon glyphicon-home"></span> Go back to Homepage</a>
                    </div>
                </div>
            </div>
            <div className='w-50'>
                <img className='err-img' src="https://internetdevels.com/sites/default/files/public/blog_preview/404_page_cover.jpg" alt="" />

            </div>
        </div>
    );
};

export default Error;