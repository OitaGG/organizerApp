// @flow
import React from 'react';
import classNames from 'classnames'
import {Button} from "../../../components";
import NewCard from '../../NewCardBlock'
import {CardList} from "../../../containers";
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'
import {PlusCircleTwoTone} from "@ant-design/icons";
import {Layout, Input} from "antd";
import './HomeSider.less';

type Props = {
    list: string,
    showSider: boolean,
    changeListContainer: void,
    onChangeInputValue: void,
    changeVisibleStatus: void,
    visible: boolean,
    openPopup: void
}

const HomeSider = (props: Props) => {
    const {list, showSider, changeTemplatesListAction, onChangeInputValue, openPopup} = props;
    const {Sider} = Layout;
    return(
        <DndProvider backend={Backend}>
            <Sider
                className={classNames('sider', showSider ? '' : 'hidden')}
                width="400px">
                <div className="sider__templates-buttons">
                    <Button
                        className="sider__button-template"
                        disabled={list === 'days'}
                        type="dashed"
                        style={{width: "50%"}}
                        onClick={() => changeTemplatesListAction('days')}>
                        Шаблоны дел
                    </Button>
                    <Button
                        className="sider__button-template"
                        disabled={list === 'weeks'}
                        type="dashed"
                        style={{width: "50%"}}
                        onClick={() => changeTemplatesListAction('weeks')}>
                        Шаблоны недель
                    </Button>
                </div>
                <div className="sider__input">
                    <Input.Search
                        className="sider__search dark"
                        placeholder="Поиск"
                        onChange={event => onChangeInputValue(event.target.value)}/>
                    <NewCard/>
                </div>
                <div className="sider__new-item-block">
                    <span
                        className="sider__add-btn"
                        onClick={() => openPopup()}>
                        <PlusCircleTwoTone twoToneColor="#00b894"/>
                    </span>
                    <span className="sider__add-new-item-text">Добавить шаблон</span>
                </div>
                <CardList className="sider__list-items"/>
            </Sider>
        </DndProvider>
    )
};

export default HomeSider;