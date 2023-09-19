import { Outlet, useNavigate } from "react-router-dom";
import { Layout, Space, theme, Menu, Button, } from 'antd';
import type { MenuProps, MenuTheme } from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import type { RootState } from "../../store";
import { MenuItemType } from '../../types'
const { Header, Footer, Sider, Content } = Layout;
function Admin() {
  const navigate = useNavigate()
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const menu = useSelector((state: RootState) => state.auth.menu)
  const clickMenu:MenuProps['onClick']  = (e) => {
    console.log(e.item, e.key)
    navigate(e.key)
  }
  return (
    <>
      <Layout style={{width: '100%',height: '100vh'}}>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={menu}
            onClick={clickMenu}
          />
        </Sider>
        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer }}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64,
              }}
            />
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            <Outlet></Outlet>
          </Content>
        </Layout>
      </Layout>
    </>
  )
}
export default Admin;