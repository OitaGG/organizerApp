// @flow
import React from 'react';
import {DatePicker as DefaultDatePicker} from "antd";

const DatePicker = ({changeCurrentWeekAction}) => {
    return (
        <DefaultDatePicker onChange={(data, dateString) => changeCurrentWeekAction(dateString)} picker="week" size="middle"/>
    );
};

export default DatePicker;