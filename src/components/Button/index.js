import React from 'react';
import {Button as BaseButton} from "antd";

const Button = (props) => {
    return (
       <BaseButton {...props} style={{textTransform: "uppercase"}}/>
    );
};

export default Button;