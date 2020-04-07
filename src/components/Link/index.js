import React from 'react';
import {NavLink} from "react-router-dom";
import './Link.less'
const ButtonLink = ({to, children, style}) => {
    return (
        <NavLink className="button-link" to={to} style={style}>{children}</NavLink>
    );
};

export default ButtonLink;