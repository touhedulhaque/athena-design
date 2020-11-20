import React from 'react';
import './SearchBox.css';

const SearchBox = () => {
    return (
        <section class="container">
            <div className="text-center m-5 p-5">
                <h1>Get your design right, rignt now</h1>
                <p>Be the first know our latest offers and updates!</p>
            </div>
            <div className="col-md-6 col-lg-6 col-11 mx-auto my auto search-box">
                <div className="search-box">
                    <input type="text" className="search" id="" placeholder="enter your email address" />
                    <button type="submit" className="search-btn">Get Started</button>
                </div>
            </div>

        </section>
    );
};

export default SearchBox;