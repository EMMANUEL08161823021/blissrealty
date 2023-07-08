import React from 'react';
// import {SwiperSlide, useSwiper} from "swiper/react";
// import Swiper from 'swiper';
// import 'swiper/swiper-bundle.cjs'
import '../Popular/popular.css'; 
import data from '../../location.json';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
// import '../images';

const popular = () => {
    return <section className='p-wrapper'>
        <div className="popular">
            <span>____ POPULAR</span>
            <div className="p-class">
                <h1>Our Popular Homes</h1>
                <span>
                    <div className="arrow"><AiOutlineArrowLeft/></div>
                    <div className="arrow"><AiOutlineArrowRight/></div>
                </span>
            </div>
            {/* <Swiper> */}
            <div className="p-container">
                {
                    data.map((card, i)=> (
                        // <SwiperSlide key={i}>
                            <div className="p-card">
                                <div className="i-homes">
                                    <img src={card.image} alt="" />
                                </div>
                                <span>{card.details}</span>
                                <span className='location'><i class="bi bi-geo-alt-fill"></i> {card.location}</span>
                                <div className="details">
                                    <span>Beds : {card.beds}</span>
                                    <span>Bathroom : {card.bathroom}</span>
                                    <span>Toilets : {card.toilets}</span>
                                </div>
                                <div className="pricing">
                                    <button className='p-buttons'>Book Now</button>
                                    <span>{card.price}</span>
                                </div>

                            </div>
                        // </SwiperSlide>
                    ))

                
                }
            </div>
            <div className="c-word">
                <div className="l-word">
                    <span>Oguntolu Emmanuel</span>
                    <span>Founder, Bliss Realty</span>
                </div>
                <div className="r-words">
                    {/* <span>"</span> */}
                    <span>Our business is built off of close relationships and we are glad that we are <br/>able to share our positive real estate <br/>experiences with our clients.</span>
                </div>
            </div>
            <div className="company">
                <img src="./images/realestate2.png" alt="" />
                <img src="./images/realestateloo-removebg-preview.png" alt="" />
                <img src="./images/alpha.png" alt="" />
                <img src="./images/key.png" alt="" />
            </div>
        </div>
        {/* </Swiper> */}
    </section>;
}



export default popular;