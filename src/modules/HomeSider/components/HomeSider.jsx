import React from 'react';
import {Layout} from "antd";
import './HomeSider.less';
import classNames from 'classnames'
const HomeSider = ({showSider = true}) => {
    const {Sider} = Layout;
    return(
        <Sider
            className={classNames("home-page__sider", showSider ? '' : 'hidden')}
            width="400px">
        </Sider>
    )
};

export default HomeSider;