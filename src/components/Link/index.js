import * as React from "react";
import {NavLink} from "react-router-dom";
import './Link.less';

type Props = {
    to: string,
    children: React.Node,
    style?: any
}

const ButtonLink = ({to, children, style = {}}: Props) => {
    return (
        <NavLink className="button-link" to={to} style={style}>{children}</NavLink>
    );
};

export default ButtonLink;