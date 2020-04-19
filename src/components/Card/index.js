//@flow
import * as React from 'react';
import './Card.less';

const Props = {
    img: String,
    title: String,
    description: String,
    reverse: Boolean,
    children: React.Node,
};

const Card = (props : Props) => {
    const {img, title, description, children, reverse} = props;
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