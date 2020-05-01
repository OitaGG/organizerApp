// @flow
import * as React from "react";
import {connect} from "react-redux";
import {siderShowAction} from "../../../store/homeHeader/actions";
import Header from "../components/HomeHeader";

type Props = {
    showSider: boolean,
    showSiderAct: void,
    user: any
}

const HeaderContainer = ({user, showSider, showSiderAction}: Props) =>{
    return(
        <Header
            user={user}
            showSider={showSider}
            showSiderAct={showSiderAction}
        />)
};

const mapStateToProps = (store: any): any => ({
    showSider: store.header.showSider
});

const mapDispatchToProps = {
    showSiderAction: siderShowAction
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);