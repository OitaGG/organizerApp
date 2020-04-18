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
function usePrevious(value: any): any {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
}

const hasPropsChanged = (val: any): boolean => {
    const prev = usePrevious(val);
    return prev !== val
};

type Props = {
    listname: string,
    input: string
}


const CardList = (props: Props) => {
    const {listName, input} = props;
    const hasListChanged = hasPropsChanged(listName);
    const hasInputChanged = hasPropsChanged(input);
    const [daysCards, setCards] = useState([]);
    const [weeksCards, setWeeksCards] = useState([]);
    const [filteredCards, setFilteredCards] = useState([]);
    useEffect(() => {
        // обращение к api
        setWeeksCards(weeksItems);
        setCards(items);
    },[]);
    useEffect(() => {
        setFilteredCards(weeksCards);
    },[weeksCards]);
    useEffect(() => {
        setFilteredCards(daysCards);
    },[daysCards]);
    const handleDrop = (id: number): void => {
        if(listName === 'days'){
            setCards(prev => prev.filter(el => el.id !== id))
        } else if(listName === 'weeks'){
            setWeeksCards(prev => prev.filter(el => el.id !== id))
        }
    };
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
    const moveCard = (dragIndex: number, hoverIndex: number): void => {
        const dragCard = filteredCards[dragIndex]
        setFilteredCards(
            update(filteredCards, {
                $splice: [
                    [dragIndex, 1],
                    [hoverIndex, 0, dragCard],
                ],
            }),
        )
    };
    return(
        <div>
            <BaseCardList cards={filteredCards} moveCard={moveCard} handleDrop={(id) => handleDrop(id)}/>
        </div>
    )
};

export default CardList;