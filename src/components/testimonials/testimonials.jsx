import React from 'react';
import '../testimonials/testimonials.css';
import data from '../../location.json';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";


const testimonials = () => {
    return <section className='testimonials'>

    <div className="t-container">
        <div className="t-text">
            <span>___ TESTIMONIALS</span>
            <div className="r-text">
                <span>What Our Clients <br/>Say About Us</span>
                <span>
                    <div className="arrow"><AiOutlineArrowLeft/></div>
                    <div className="arrow"><AiOutlineArrowRight/></div>
                </span>
            </div>
                
        </div>
        <div className="clients">
            {
                data.map((card, i)=> (
                    <div className="c-clients">
                        <img src={card.image} alt="" />
                        <div className="texts">
                            <span>{card.name}</span>
                            <p>{card.paragraph}</p>
                            <div className='profession'>
                                <div className='dot'></div>
                                <span>{card.profession}</span>
                            </div>
                        </div>
                    </div>
                ))
                
            }

        </div>

    </div>

    </section>;
}


export default testimonials;