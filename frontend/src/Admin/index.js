import React from 'react'

import { Layout, Menu } from 'antd'
import { Link } from 'react-router-dom'
import { UserOutlined, HomeOutlined } from '@ant-design/icons'
import './styles.css'

const { Header, Content, Footer, Sider } = Layout;

export default function Admin(props) {
    return (
        <div>
            <Layout>
                <Sider
                    breakpoint="lg"
                    collapsedWidth="0"
                    onBreakpoint={broken => {
                        console.log(broken);
                    }}
                    onCollapse={(collapsed, type) => {
                        console.log(collapsed, type);
                    }}
                >
                    <div className="logo">
                        <h2>CRUD JSON</h2>
                        <div className="break"></div>
                        <small>PHP & ReactJs</small>
                    </div>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <HomeOutlined />
                            <Link to="/"><span className="nav-text">Home</span></Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <UserOutlined />
                            <span className="nav-text">Cadastrar</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                            {props.children}
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        CRUD JSON | PHP & ReactJs
                        <br />
                        <code><a href="https://github.com/mrbrunelli/crud-json-php-react" target="_blank">Desenvolvido por Matheus R. Brunelli</a></code>
                    </Footer>
                </Layout>
            </Layout>
        </div>
    )
}