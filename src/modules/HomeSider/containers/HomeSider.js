// @flow
import * as React from "react";
import {connect} from "react-redux";
import HomeSider from "../components/HomeSider";
import {Component} from "react";
import {siderShowAction} from "../../../store/homeHeader/actions";
import {changeTemplatesListAction} from "../../../store/homeSider/actions";
import {changeInputAction} from "../../../store/homeSider/actions";

type Props = {
    showSider: boolean,
    list: string,
    changeTemplatesListAction: void,
    changeInputAction: void
}

type State = {
    visible: boolean
}
class HomeSiderContainer extends Component<Props, State>{
    constructor(props){
        super(props);
        this.state = {
            visible: false
        };
        this.changeVisibleStatus = () => {
            this.setState(() => {
                return {
                    visible: false
                }
            })
        };
        this.openPopup = () => {
            this.setState(() => {
                return {
                    visible: true
                }
            })
        }

    }
    render(){
        return(
            <HomeSider
                showSider={this.props.showSider}
                list={this.props.list}
                changeTemplatesListAction={this.props.changeTemplatesListAction}
                input={this.state.input}
                visible={this.state.visible}
                onChangeInputValue={this.props.changeInputAction}
                changeVisibleStatus={this.changeVisibleStatus}
                openPopup={this.openPopup}
            />
        )
    }
}

const mapStateToProps = (store: any) => ({
    showSider: store.header.showSider,
    list: store.homeSider.list
});

const mapDispatchToProps = {
    showSiderAction: siderShowAction,
    changeTemplatesListAction: changeTemplatesListAction,
    changeInputAction: changeInputAction
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeSiderContainer);