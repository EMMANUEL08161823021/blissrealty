import React from 'react';
import '../hero/hero.css';
// import CountUp from 'react-countup';

// import ''
// import PropTypes from 'prop-types';

const hero = () => {
    return <section className='hero'>
        <div className="h-container">
            <div className="hero-text">
                <span>Find A House <br />That Suits You</span>
                <span>Want to find a home? We are ready to help you find<br/> one that suits your lifestyle and needs.</span>
                <div className="h-button">
                    <button>Get Started</button>
                </div>
                <div className="stats">
                    <div className="c-stats">
                        <span>
                            {/* <CountUp start={700} end={1000} duration={3}/> */}
                            <span>Listed Properties</span>
                        </span>
                        <span>
                            {/* <CountUp start={700} end={1000} duration={3}/> */}
                            <span>Happy Customers</span>
                        </span>
                        <span>
                            {/* <CountUp start={700} end={1000} duration={3}/> */}
                            <span>Awards</span>
                        </span>
                    </div>
                </div>
            </div>
            <div className="hero-image">
                <img src="./images/3d-electric-car-building.jpg" alt="building" width={500} />
            </div>           
        </div>
    </section>;
}


export default hero;