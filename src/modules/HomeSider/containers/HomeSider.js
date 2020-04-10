// @flow
import * as React from "react";
import {connect} from "react-redux";
import HomeSider from "../components/HomeSider";
import {Component} from "react";

interface SiderProps {
    showSider: boolean,
}

class HomeSiderContainer extends Component<SiderProps>{
    render(){
        return(
            <HomeSider
                showSider={this.props.showSider}
            />
        )
    }
}

const mapStateToProps = (store: any) => ({
    showSider: store.header.showSider
});

export default connect(mapStateToProps)(HomeSiderContainer);