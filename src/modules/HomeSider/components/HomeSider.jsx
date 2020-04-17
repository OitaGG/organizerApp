// @flow
import React from 'react';
import {Layout, Input} from "antd";
import './HomeSider.less';
import classNames from 'classnames'
import {Button} from "../../../components";
import {PlusCircleTwoTone} from "@ant-design/icons";
import {CardList} from "../../../containers";
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'

const {Sider} = Layout;
export default class HomeSider extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            list: 'days',
            showSider: true,
            input: ''
        }
        this.changeListContainer = (listName) => {
            this.setState(() => {
                return {
                    list: listName
                }
            })
        }
        this.onChangeInputValue = (value) => {
            console.log(value)
            this.setState(() => {
                return {
                    input: value
                }
            })
        }
    }
    render() {
        const {showSider, list} = this.state;
        return(
            <DndProvider backend={Backend}>
                <Sider
                    className={classNames('sider', showSider ? '' : 'hidden')}
                    width="400px">
                    <div className="sider__templates-buttons">
                        <Button 
                            className="sider__button-template"
                            disabled={this.state.list === 'days'}
                            type="dashed" 
                            style={{width: "50%"}}
                            onClick={() => this.changeListContainer('days')}>
                            Шаблоны дел
                        </Button>
                        <Button 
                            className="sider__button-template"
                            disabled={this.state.list === 'weeks'}
                            type="dashed" 
                            style={{width: "50%"}}
                            onClick={() => this.changeListContainer('weeks')}
                            >
                            Шаблоны недель
                        </Button>
                    </div>
                    <div className="sider__input">
                        <Input.Search
                            className="sider__search dark"
                            placeholder="Поиск"
                            onChange={event => this.onChangeInputValue(event.target.value)}
                        />
                    </div>
                    <div className="sider__new-item-block">
                        <span className="sider__add-btn"><PlusCircleTwoTone twoToneColor="#00b894"/></span>
                        <span className="sider__add-new-item-text">Добавить шаблон</span>
                    </div>
                    <CardList className="sider__list-items" listName={list} input={this.state.input}/>
                </Sider>
            </DndProvider>
        )
    }
    
};