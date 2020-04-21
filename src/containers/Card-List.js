import * as React from 'react';
import {useState, useEffect} from 'react'
import {connect} from 'react-redux';
import {CardList as BaseCardList} from "../components";
import update from 'immutability-helper';
import {fetchSingleCasesActionCreator, fetchWeeksTemplatesActionCreator} from "../store/templates/actions";
import {fetchDeleteSingleCaseActionCreator, fetchDeleteWeekTemplateActionCreator} from "../store/templates/actions";

type Props = {
    list: string,
    input: string,
    fetchPosts: void,
    posts: any
}


const CardList = (props: Props) => {
    const {list, input, fetchSingleCases, singleCases, fetchWeeks, weeks, fetchDeleteSingleCase, fetchDeleteWeek} = props;
    const [filteredCards, setFilteredCards] = useState([]);
    useEffect(() => {
        fetchSingleCases();
        fetchWeeks();
    },[]);
    useEffect(() => {
        if(list === 'days') setFilteredCards(singleCases);
    },[singleCases]);
    useEffect(() => {
        if(list === 'weeks') setFilteredCards(weeks);
    },[weeks]);
    useEffect(() => {
        if(list === 'days'){
            setFilteredCards(singleCases.filter(el => el.title.toLowerCase().indexOf(input.toLowerCase(), 0) !== -1));
        } else {
            setFilteredCards(weeks.filter(el => el.title.toLowerCase().indexOf(input.toLowerCase(), 0) !== -1));
        }
    }, [input]);
    useEffect(() => {
        setFilteredCards(list === 'days' ? singleCases : weeks);
    }, [list]);
    const handleDrop = (id: number): void => {
        if(list === 'days'){
            fetchDeleteSingleCase(id);
        } else if(list === 'weeks'){
            fetchDeleteWeek(id);
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
    list: store.templates.currentTemplate,
    input: store.homeSider.input,
    singleCases: store.templates.singleCases,
    weeks: store.templates.weeks
});

const mapDispatchToProps = {
    fetchSingleCases: fetchSingleCasesActionCreator,
    fetchWeeks: fetchWeeksTemplatesActionCreator,
    fetchDeleteSingleCase: fetchDeleteSingleCaseActionCreator,
    fetchDeleteWeek: fetchDeleteWeekTemplateActionCreator
};
export default connect(mapStateToProps, mapDispatchToProps)(CardList);