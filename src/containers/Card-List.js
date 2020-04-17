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
    },
    {
        id: 4,
        title: "Просто заголовок",
        description: "Тупо описание"
    },
    {
        id: 5,
        title: "Что-то другое",
        description: "И тут важное описание"
    },
    {
        id: 6,
        title: "Опять что-то другое",
        description: "Описание еще важнее"
    },
    {
        id: 7,
        title: "Просто заголовок",
        description: "Тупо описание"
    },
    {
        id: 8,
        title: "Что-то другое",
        description: "И тут важное описание"
    },
    {
        id: 9,
        title: "Что-то другое",
        description: "И тут важное описание"
    },
    {
        id: 10,
        title: "Опять что-то другое",
        description: "Описание еще важнее"
    },
    {
        id: 11,
        title: "Просто заголовок",
        description: "Тупо описание"
    },
    {
        id: 12,
        title: "Что-то другое",
        description: "И тут важное описание"
    },
    {
        id: 13,
        title: "Что-то другое",
        description: "И тут важное описание"
    },
    {
        id: 14,
        title: "Опять что-то другое",
        description: "Описание еще важнее"
    },
    {
        id: 15,
        title: "Просто заголовок",
        description: "Тупо описание"
    },
    {
        id: 16,
        title: "Что-то другое",
        description: "И тут важное описание"
    },
    {
        id: 17,
        title: "Что-то другое",
        description: "И тут важное описание"
    },
    {
        id: 18,
        title: "Что-то другое",
        description: "И тут важное описание"
    },
    {
        id: 19,
        title: "Что-то другое",
        description: "И тут важное описание"
    },
    {
        id: 20,
        title: "Что-то другое",
        description: "И тут важное описание"
    },
    {
        id: 21,
        title: "Что-то другое",
        description: "И тут важное описание"
    },
    {
        id: 22,
        title: "Что-то другое",
        description: "И тут важное описание"
    },
    {
        id: 23,
        title: "Что-то другое",
        description: "И тут важное описание"
    },
];

const weeksItems = [
    {
        id: 4,
        title: "Недельный заголовок",
        description: "А тут текст"
    },
    {
        id: 1,
        title: "Другой заголовок",
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
    const [daysCards, setCards] = useState([]);
    const [weeksCards, setWeeksCards] = useState([])
    const [filteredCards, setFilteredCards] = useState([]);
    useEffect(() => {
        // обращение к api
        setWeeksCards(weeksItems)
        setCards(items);
    },[])
    useEffect(() => {
        setFilteredCards(weeksCards);
    },[weeksCards]);
    useEffect(() => {
        setFilteredCards(daysCards);
    },[daysCards]);
    const handleDrop = (id) => {
        if(listName === 'days'){
            setCards(prev => prev.filter(el => el.id !== id))
        } else if(listName === 'weeks'){
            setWeeksCards(prev => prev.filter(el => el.id !== id))
        }
    }
    useEffect(() => {
        if(hasListChanged){
            setFilteredCards(listName === 'days' ? daysCards : weeksCards)
        }
        if(hasInputChanged){
            if(listName === 'days'){
                setFilteredCards(daysCards.filter(el => el.title.toLowerCase().indexOf(input.toLowerCase(),0) !== -1))
            } else {
                setFilteredCards(weeksCards.filter(el => el.title.toLowerCase().indexOf(input.toLowerCase(),0) !== -1))
            }
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
        <div>
            <BaseCardList cards={filteredCards} moveCard={moveCard} handleDrop={(id) => handleDrop(id)}/>
        </div>
    )
};

export default CardList;