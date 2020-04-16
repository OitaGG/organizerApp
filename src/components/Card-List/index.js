// @flow
import * as React from "react";
import {SmallCard} from "../../containers";
import './Card-List.less';
import EmptyHolder from "../EmptyHolder";

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
    const EmptyList = (<EmptyHolder title="К сожалению, ничего не найдено" btnText="Создать шаблон"/>)
    return (
        <div className="card-list">
            {cards.length ? cards.map((card, i) => renderCard(card, i)) : EmptyList};
        </div>
    )
};

export default CardList;
