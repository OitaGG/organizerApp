import React from 'react';
import {Layout} from "antd";
const {Sider, Content} = Layout;
import {Header} from "../../components";
import './Home.less'
const Home = () => {
    return (
        <section className="home-page">
            <Layout className="home-page__main-layout">
                <Sider
                    className="home-page__sider"
                    width="400px">
                </Sider>
                <Layout className="home-page__right-layout">
                    <Header className="home-page__header"/>
                    <Content className="home-page__content">
                        Content
                    </Content>
                </Layout>
            </Layout>
        </section>
    );
};

export default Home;