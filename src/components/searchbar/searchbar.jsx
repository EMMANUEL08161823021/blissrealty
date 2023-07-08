import React from 'react';
import '../searchbar/searchbar.css'

const searchbar = () => {
    return <section className='searchbar'>
        <div className="sa-container">
            <span>Search for available properties</span>
            <span>
                <input type="text" placeholder='Location' />
                <input type="text" placeholder='Property Type' />
                <input type="text" placeholder='Budget' />
                <div className="h-button">
                    <button>Search Now</button>
                </div>
            </span>
        </div>

    </section>;
}


export default searchbar;