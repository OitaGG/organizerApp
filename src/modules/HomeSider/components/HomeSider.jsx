import React from 'react';
import {Layout, Input} from "antd";
import './HomeSider.less';
import classNames from 'classnames'
import {Button, CardList} from "../../../components";
import {PlusCircleTwoTone} from "@ant-design/icons";

import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'

const HomeSider = ({showSider = true, }) => {
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
    const {Sider} = Layout;
    return(
        <DndProvider backend={Backend}>
        <Sider
            className={classNames('sider', showSider ? '' : 'hidden')}
            width="400px">
            <div className="sider__templates-buttons">
                <Button className="sider__button-template" type="dashed" style={{width: "50%"}}>Шаблоны дел</Button>
                <Button className="sider__button-template" type="dashed" style={{width: "50%"}}>Шаблоны недель</Button>
            </div>
            <div className="sider__input">
                <Input.Search
                    className="sider__search dark"
                    placeholder="Search notes"
                    onSearch={value => console.log(value)}
                />
            </div>
            <div className="sider__new-item-block">
                <span className="sider__add-btn"><PlusCircleTwoTone twoToneColor="#00b894"/></span>
                <span className="sider__add-new-item-text">Добавить шаблон</span>
            </div>
            <CardList className="sider__list-items" items={items}/>
        </Sider>
        </DndProvider>
    )
};

export default HomeSider;