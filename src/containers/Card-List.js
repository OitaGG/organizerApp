import * as React from 'react';
import {useState, useEffect, useRef} from 'react'
import {connect} from 'react-redux';
import {CardList as BaseCardList} from "../components";
import {changeInputAction, changeTemplatesListAction} from "../store/homeSider/actions";
import update from 'immutability-helper';
const items = [
    {
        id: 1,
        title: "Просто заголовок",
        description: "Тупо описание очень длинное, где много текста и прочего, чтобы вышло за рамки блаблабла и еще поговорим, мы же не спешим никуда"
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
        title: "А тут будет длинный заголовок, который ну пиздец как заебешься смотреть",
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
    list: string,
    input: string
}


const CardList = (props: Props) => {
    const {list, input} = props;
    const hasListChanged = hasPropsChanged(list);
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
    useEffect(() => {
        if(hasListChanged){
            setFilteredCards(list === 'days' ? daysCards : weeksCards)
        }
        if(hasInputChanged){
            if(list === 'days'){
                setFilteredCards(daysCards.filter(el => el.title.toLowerCase().indexOf(input.toLowerCase(),0) !== -1))
            } else {
                setFilteredCards(weeksCards.filter(el => el.title.toLowerCase().indexOf(input.toLowerCase(),0) !== -1))
            }
        }
    });
    const handleDrop = (id: number): void => {
        if(list === 'days'){
            setCards(prev => prev.filter(el => el.id !== id))
        } else if(list === 'weeks'){
            setWeeksCards(prev => prev.filter(el => el.id !== id))
        }
    };
    const moveCard = (dragIndex: number, hoverIndex: number): void => {
        const dragCard = filteredCards[dragIndex];
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

const mapStateToProps = (store: any) => ({
    list: store.homeSider.list,
    input: store.homeSider.input
});

const mapDispatchToProps = {
    changeTemplatesListAction: changeTemplatesListAction,
    changeInputAction: changeInputAction
};
export default connect(mapStateToProps, mapDispatchToProps)(CardList);