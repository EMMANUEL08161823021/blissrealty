import React from 'react';
import '../questions/questions.css';
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";

const questions = () => {
    return <section className='questions'>
        <div className="q-container">
            <div className="q-text">
                <span>___ FAQS</span>
                <span>Frequently Asked <br/>Questions</span>
                <p>Have questions you want answers to?</p>
                <button>See More</button>
            </div>
            <div className="q-questions">
                <div className="qOne">
                    <div className="upper">
                        <div className="dot"></div>
                        <span>Do you offer loan services?</span>
                        <AiOutlineCaretDown/>
                    </div>
                    <div className="lower">
                        <p>Yes. We offer loans with some of te leading banks in<br/> the country like Access Bank, GTBank, Wema Bank <br/>e.t.c.</p>
                    </div>
                </div>
                <div className="qOne">
                    <div className="upper">
                        <div className="dot"></div>
                        <span>What are capital gains on property purchase?</span>
                        <AiOutlineCaretUp/>
                    </div>
                    {/* <div className="lower">
                        <p>Yes. We offer loans with some of te leading banks in<br/> the country like Access Bank, GTBank, Wema Bank <br/>e.t.c.</p>
                    </div> */}
                </div>
                <div className="qOne">
                    <div className="upper">
                        <div className="dot"></div>
                        <span>What are capital gains on property purchase?</span>
                        <AiOutlineCaretUp/>
                    </div>
                    {/* <div className="lower">
                        <p>Yes. We offer loans with some of te leading banks in<br/> the country like Access Bank, GTBank, Wema Bank e.t.c.</p>
                    </div> */}
                </div>
                
            </div>
        </div>
    </section>;
}


export default questions;