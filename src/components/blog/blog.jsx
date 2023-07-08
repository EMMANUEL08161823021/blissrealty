import React from 'react';
import '../blog/blog.css';
import data from '../../location.json';
// import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

const blog = () => {
    return <section className='blog'>
       <div className="blog-c">
            <div className="b-text">
                <div className="b-title">
                    <span>___ OUR BLOG</span>
                    <span>Latest Information</span>
                </div>
                <p>Stay up to date with all the information about<br/>our listed properties</p>
                <button>See More</button>
            </div>
            <div className="b-container">
                    {
                        data.map((card, i)=> (
                            // <SwiperSlide key={i}>
                                <div className="b-card">
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
                                        <button className='b-buttons'>Read More</button>
                                        
                                    </div>

                                </div>
                            // </SwiperSlide>
                        ))

                    
                    }
                </div>
            </div>
    </section>;
}

export default blog;