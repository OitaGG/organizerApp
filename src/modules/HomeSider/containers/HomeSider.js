// @flow
import * as React from "react";
import {connect} from "react-redux";
import HomeSider from "../components/HomeSider";
import {Component} from "react";

type Props = {
    showSider: boolean,
}

type State = {
    list: string,
    input: string,
    visible: boolean
}
class HomeSiderContainer extends Component<Props, State>{
    constructor(props){
        super(props);
        this.state = {
            list: 'days',
            input: '',
            visible: false
        };
        this.changeListContainer = (listName) => {
            this.setState(() => {
                return {
                    list: listName
                }
            })
        };
        this.onChangeInputValue = (value) => {
            this.setState(() => {
                return {
                    input: value
                }
            })
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
                list={this.state.list}
                input={this.state.input}
                visible={this.state.visible}
                changeListContainer={this.changeListContainer}
                onChangeInputValue={this.onChangeInputValue}
                changeVisibleStatus={this.changeVisibleStatus}
                openPopup={this.openPopup}
            />
        )
    }
}

const mapStateToProps = (store: any) => ({
    showSider: store.header.showSider
});

export default connect(mapStateToProps)(HomeSiderContainer);