import * as React from "react";
import {connect} from "react-redux";
import NewCard from '../components/NewCard';
import {fetchNewCaseTemplateActionCreator} from "../../../store/templates/actions";

type Props = {
    newList: string,
    onCancel: void,
    onCreate: void,
    visible: boolean,
    fetchNewCase: void
}

const NewCardContainer = (props: Props) => {
    const onCreateForDays = (title, description) => {
        props.fetchNewCase({title: title, description: description})
    };
    return (
      <NewCard
          visible={props.visible}
          onCancel={props.onCancel}
          onCreate={onCreateForDays}
          newList={props.newList}
      />)
};

const mapStateToProps = (store: any): any => ({
    newList: store.homeSider.list
});

const mapDispatchToProps = {
    fetchNewCase: fetchNewCaseTemplateActionCreator
};
export default connect(mapStateToProps, mapDispatchToProps)(NewCardContainer);