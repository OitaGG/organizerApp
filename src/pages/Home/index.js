import React from 'react';
import {Layout} from "antd";
const {Sider, Content } = Layout;
import {Header} from "../../modules";
import './Home.less'
const Home = () => {
    return (
        <section className="home">
            <Layout className="home-layout">
                <Sider className="home-sider" width="400px">
                </Sider>
                <Layout>
                    <Header style={{width: "auto"}}/>
                    <Content className="home-content">
                        Content
                    </Content>
                </Layout>
            </Layout>
        </section>
    );
};

export default Home;