import React from 'react';
import './DedicatedCard.css';

const DedicatedCard = ({ service }) => {
    return (
        <div className="col-sm-12 col-md-12 col-lg-3 text-center box-style-price ml-5 mt-5 mr-4 mb-2 p-5">
            <div>
                <h1>{service.price}</h1>
                <p>{service.for}</p>
                <hr />
                <p>{service.homepage}</p>
                <p>{service.inner}</p>
                <p>{service.asset}</p>
                <p>{service.source}</p>
                <p>{service.stock}</p>
                <p>{service.support}</p>
                <p>{service.time}</p>
                <br />
                <button className="button-style">Order Now</button>
            </div>
        </div>
    );
};

export default DedicatedCard;