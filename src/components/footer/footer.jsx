import React from 'react';
import '../footer/footer.css';
import { BsTwitter, BsWhatsapp, BsInstagram, BsFacebook } from "react-icons/bs";
// import { FaWhatsapp  } from "react-icons/ai";


const footer = () => {
    return <section className='footer'>
        <div className="f-container">
            <span>Bliss Realty</span>
            <div className="icons">
                <span><BsTwitter/></span>
                <span><BsWhatsapp/></span>
                <span><BsInstagram/></span>
                <span><BsFacebook/></span>
            </div>
        </div>
    </section>;
}


export default footer;