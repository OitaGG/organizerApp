import React from 'react';
import {Button as BaseButton} from "antd";
import './Button.less'
const Button = (props) => {
    return (
        <BaseButton {...props} className="our-btn" />
    );
};

export default Button;