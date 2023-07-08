import React from 'react';
import '../navbar/navbar.css';
// import 'bootstrap/dist/css/bootstrap.css';

const navbar = () => {
    return <div className='navbar'>
        <div className="n-container">
            {/* <img src="../images/redak.jpeg" alt="" /> */}
            <span>BLISS REALTY</span>
            {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button> */}
            <ul>
                <span>Home</span>
                <a href='#'>About Us</a>
                <a href='#'>Properties</a>
                <a href='#'>Agents</a>
            </ul>
            <div className="n-button">
                <button>Find A Home</button>
            </div>
        </div>
    </div>;
}

export default navbar;