import React from 'react';
import './Header.less'
import ButtonLink from "../../../components/Link";
import {TaobaoCircleOutlined} from '@ant-design/icons'
const Header = () => {
    return (
        <div className="header">
            <div className="header__logo">
                <TaobaoCircleOutlined style={{fontSize: "35px"}}/>
            </div>
            <div className="header__links">
                <ButtonLink to="/login" style={{background: "#0984e3", color: "#2d3436a", marginRight: "20px"}}>Войти</ButtonLink>
                <ButtonLink to="/registration" style={{background: "#00b894", color: "#2d3436"}}>Зарегистрироваться</ButtonLink>
            </div>
        </div>
    );
};

export default Header;