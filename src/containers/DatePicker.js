import * as React from "react";
import {DatePicker} from "../components";
import {changeCurrentWeekAction} from "../store/app/actions";
import {connect} from "react-redux";

type Props = {
    changeCurrentWeekAction: void
}

const DatePickerContainer = (props: Props) => {
    return(
        <DatePicker changeCurrentWeekAction={props.changeCurrentWeekAction}/>
    )
};

const mapStateToProps = () => ({

});

const mapDispatchToProps = {
  changeCurrentWeekAction: changeCurrentWeekAction
};

export default connect(mapStateToProps, mapDispatchToProps)(DatePickerContainer);
