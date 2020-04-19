import * as React from "react";
import {connect} from "react-redux";
import NewCard from '../components/NewCard';

type Props = {
    newList: string,
    onCancel: void,
    onCreate: void,
    visible: boolean
}

const NewCardContainer = (props: Props) => {
    const onCreateForDays = () => {
    //api отправка формы
        console.log('Days')
    };
    const onCreateForWeeks = () => {
        console.log('Weeks')
    };
    return (
      <NewCard
          visible={props.visible}
          onCancel={props.onCancel}
          onCreate={props.newList === 'days' ? onCreateForDays : onCreateForWeeks}
          newList={props.newList}
      />)
};

const mapStateToProps = (store: any): any => ({
    newList: store.homeSider.list
});

export default connect(mapStateToProps)(NewCardContainer);