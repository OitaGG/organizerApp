import React from 'react';
import {Layout} from "antd";
const {Content} = Layout;
import {HomeSider} from "../../modules";
import './Home.less'
import {HomeHeader} from "../../modules";
const Home = () => {
    return (
        <section className="home-page">
            <Layout className="home-page__main-layout">
                <HomeSider classname="home-page__sider"/>
                <Layout className="home-page__right-layout">
                    <HomeHeader/>
                    <Content className="home-page__content">
                        Content
                    </Content>
                </Layout>
            </Layout>
        </section>
    );
};

export default Home;