//@flow
import React from 'react';
import './Card.less'
const Card = ({img, title, description, children, reverse}) => {
    return (
        <div className="card">
            {!reverse ? <img className="card-img" src={img} alt="Card img"/> : null}
            <div className="card-content">
                <h2>{title}</h2>
                <p>{description}</p>
                {children}
            </div>
            {reverse ? <img className="card-img" src={img} alt="Card img"/> : null}
        </div>
    );
};

export default Card;