// @flow
import * as React from "react";
import {SmallCard} from "../../containers";
import EmptyHolder from "../EmptyHolder";
import './Card-List.less';

type Props = {
    cards: any,
    moveCard: void,
    handleDrop: void
}
const CardList = (props : Props) => {
    const {cards, moveCard, handleDrop} = props;
    const renderCard = (card, index) => {
        return (
            <SmallCard
                key={card.id}
                index={index}
                id={card.id}
                title={card.title}
                moveCard={moveCard}
                handleDrop={handleDrop}
            >{card.description}</SmallCard>
        )
    };
    const EmptyList = (<EmptyHolder title="К сожалению, ничего не найдено" btnText="Создать шаблон"/>)
    return (
        <div className="card-list">
            {cards.length ? cards.map((card, i) => renderCard(card, i)) : EmptyList}
        </div>
    )
};

export default CardList;
