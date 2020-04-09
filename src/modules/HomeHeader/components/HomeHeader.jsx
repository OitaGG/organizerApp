import React from 'react';
import {Avatar} from "antd";
import {SettingOutlined, LogoutOutlined, MenuFoldOutlined, MenuUnfoldOutlined} from "@ant-design/icons";
import {NavLink} from "react-router-dom";
import './Header.less'

const Header = ({user = {name: "Alex"}, showPopup = true}) => {
    const popupButton = showPopup ?
        <MenuFoldOutlined classname="header__side-bar-button-svg"/>
        : <MenuUnfoldOutlined classname="header__side-bar-button-svg"/>;
    return (
        <div className="header">
            <div className="header__side-bar-button header_button">
                {popupButton}
            </div>
            <div className="header__username">
                <span className="header__username-text">{user.name}</span>
            </div>
            <div className="header__avatar">
                <Avatar className="header__avatar-svg" size="large">
                    {user.name[0]}
                </Avatar>
            </div>
            <div className="header__buttons">
                <div className="header__buttons">
                    <NavLink className="header__settings-button-link header_button" to="/home/settings">
                        <SettingOutlined className="header__settings-button-icon"/>
                    </NavLink>
                    <NavLink className="header__settings-button-link header_button" to="/">
                        <LogoutOutlined className="header__settings-button-icon"/>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Header;