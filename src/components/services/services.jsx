import React from 'react';
import '../services/services.css';

const services = () => {
    return <section className='services'>
        {/* <div className="c-services"> */}
            <div className="pictures">
                <div className="b-picture">
                    <img src="../images/blo.jpg" alt="" />
                </div>
                <div className="s-picture">
                    <img src="../images/blo.jpg" alt="" />
                </div>
            </div>
            <div className="s-content">
                <span>___   OUR SERVICES</span>
                <span>Your Comfort Is Our Priority</span>
                <p>Finding you a home that you'd love and enjoy <br/>staying in is our top priority. Your comfort is our key.</p>
                <div className='container'>
                    <div className="i-container">
                        <div className='dot'></div>
                        <span>Free Marketing</span>
                    </div>
                    <div className="i-container">
                        <div className='dot'></div>
                        <span>No Valuations</span>               
                    </div>
                </div>
                <div className="container">
                    <div className="i-container">
                        <div className='dot'></div>
                        <span>Managed Viewings</span>
                    </div>
                    <div className="i-container">
                        <div className='dot'></div>
                        <span>Free Marketing</span>
                    </div>
                </div>
                <div className="z-container">
                    <button>See More</button>
                </div>
            </div>
        {/* </div> */}
    </section>
}


export default services;