import * as React from "react";
import {SmallCard} from "../../containers";
import './Card-List.less';

const CardList = ({cards, moveCard}) => {
    const renderCard = (card, index) => {
        return (
            <SmallCard
                key={card.id}
                index={index}
                id={card.id}
                title={card.title}
                text={card.text}
                moveCard={moveCard}
            >{card.description}</SmallCard>
        )
    };
    return (
        <div className="card-list">
            {cards.map((card, i) => renderCard(card, i))};
        </div>
    )
};

export default CardList;
