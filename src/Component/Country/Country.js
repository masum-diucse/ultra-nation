import React from 'react';
import './Country.css';
const Country = (props) => {
    const {name,flag,population}=props.country;
    return (
        <div className="country">
           <div className="flag-container">
                <img src={flag} alt=""/>
           </div>
           <div className="info-container">
                <h2>Name:{name}</h2>
                <h3>population:{population}</h3>
            </div> 
            <button onClick={()=>props.handleAddCountry(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;