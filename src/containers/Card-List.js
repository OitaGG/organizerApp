import * as React from 'react';
import {useState, useEffect, useRef} from 'react'
import {CardList as BaseCardList} from "../components";
import update from 'immutability-helper';
const items = [
    {
        id: 1,
        title: "Просто заголовок",
        description: "Тупо описание"
    },
    {
        id: 2,
        title: "Что-то другое",
        description: "И тут важное описание"
    },
    {
        id: 3,
        title: "Опять что-то другое",
        description: "Описание еще важнее"
    }
];

const weeksItems = [
    {
        id: 4,
        title: "Недельный заголовок",
        description: "А тут текст"
    }
];

// функции для отслеживания обновления пропсов
function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
}
const hasPropsChanged = (val) => {
    const prev = usePrevious(val);
    return prev !== val
}


const CardList = ({listName, input}) => {
    const hasListChanged = hasPropsChanged(listName)
    const hasInputChanged = hasPropsChanged(input);
    const [cards, setCards] = useState(items);
    const [filteredCards, setFilteredCards] = useState(items);
    useEffect(() => {
        if(hasListChanged){
            setCards(listName === 'days' ? items : weeksItems)
            setFilteredCards(listName === 'days' ? items : weeksItems)
        }
        if(hasInputChanged){
            setFilteredCards(cards.filter(el => el.title.toLowerCase().indexOf(input.toLowerCase(),0) !== -1))
        }
    });
    const moveCard = (dragIndex, hoverIndex) => {
        const dragCard = filteredCards[dragIndex]
        setFilteredCards(
            update(filteredCards, {
                $splice: [
                    [dragIndex, 1],
                    [hoverIndex, 0, dragCard],
                ],
            }),
        )
    }
    return(
        <BaseCardList cards={filteredCards} moveCard={moveCard}/>
    )
};

export default CardList;