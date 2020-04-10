// @flow
import * as React from "react";
import {connect} from "react-redux";
import {siderShowAction} from "../../../store/Header/actions";
import Header from "../components/HomeHeader";
import {Component} from "react";

interface HeaderProps {
    showSider: void,
    user: any
}

class HeaderContainer extends Component<HeaderProps>{
    render(){
        return(
            <Header
                    user={this.props.user}
                    showSider={this.props.showSider}
                    showSiderAct={this.props.showSiderAction}
            />
        )
    }
}

const mapStateToProps = (store: any) => ({
    showSider: store.header.showSider
});

const mapDispatchToProps = {
    showSiderAction: siderShowAction
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);