// @flow
import * as React from "react";
import {connect} from "react-redux";
import HomeSider from "../components/HomeSider";
import {Component} from "react";
import {siderShowAction} from "../../../store/homeHeader/actions";
import {changeCurrentTemplatesListActionCreator} from "../../../store/templates/actions";
import {changeInputAction} from "../../../store/homeSider/actions";
import {toggleNewCardActionCreator} from "../../../store/newCard/actions";
import {useState} from "react";

type Props = {
    showSider: boolean,
    list: string,
    changeTemplatesListAction: void,
    changeInputAction: void,
}

const HomeSiderContainer = ({showSider, list, changeTemplatesListAction, changeInputAction, toggleNewCard}) => {
    const [visible, setVisible] = useState(false);
    return(
            <HomeSider
                showSider={showSider}
                list={list}
                changeTemplatesListAction={changeTemplatesListAction}
                visible={visible}
                onChangeInputValue={changeInputAction}
                openPopup={toggleNewCard}
            />
        )
};

const mapStateToProps = (store: any) => ({
    showSider: store.header.showSider,
    list: store.templates.currentTemplate
});

const mapDispatchToProps = {
    showSiderAction: siderShowAction,
    changeTemplatesListAction: changeCurrentTemplatesListActionCreator,
    changeInputAction: changeInputAction,
    toggleNewCard: toggleNewCardActionCreator
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeSiderContainer);