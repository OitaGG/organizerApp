import * as React from 'react';
import {useState} from 'react'
import {CardList as BaseCardList} from "../components";
import update from 'immutability-helper';

const CardList = (props) => {
    {
    const [cards, setCards] = useState(props.cards);
    const moveCard = (dragIndex, hoverIndex) => {
        const dragCard = cards[dragIndex]
        setCards(
            update(cards, {
                $splice: [
                    [dragIndex, 1],
                    [hoverIndex, 0, dragCard],
                ],
            }),
        )
    }
    return(
        <BaseCardList cards={cards} moveCard={moveCard}/>
    )
    }
};

export default CardList;