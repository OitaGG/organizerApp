import React from 'react';
import {Avatar} from "antd";
import {SettingOutlined, LogoutOutlined} from "@ant-design/icons";
import {Link, NavLink} from "react-router-dom";
import './Header.less'

const Header = ({user = {name: "Alex"}}) => {
    return (
        <div className="header">
            <div className="header__greeting-text">
            </div>
            <div className="header__avatar">
                <Avatar className="header__avatar-svg" size="large">
                    {user.name}
                </Avatar>
            </div>
            <div className="header__buttons">
                <div className="header__buttons">
                    <NavLink className="header__settings-button-link" to="/home/settings">
                        <SettingOutlined className="header__settings-button-icon"/>
                    </NavLink>
                    <NavLink className="header__settings-button-link" to="/">
                        <LogoutOutlined className="header__settings-button-icon"/>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Header;