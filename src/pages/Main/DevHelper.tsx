import React, { ReactElement, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from 'antd';
import Menu from '@osui/menu';

const { Header, Content, Sider } = Layout;

interface DevHelperProps {
  children?: ReactNode;
}

export function DevHelper(props: DevHelperProps): ReactElement {
  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <Menu mode="inline">
          <Menu.Item key="adminPage">
            <Link to="/adminPage">Admin page</Link>
          </Menu.Item>
          <Menu.Item key="itemPanel">
            <Link to="/itemPanel">Item panel</Link>
          </Menu.Item>
          <Menu.Item key="itemActivity">
            <Link to="/itemActivity">Item activity</Link>
          </Menu.Item>
          <Menu.Item key="workspacePage">
            <Link to="/workspacePage">Workspace page</Link>
          </Menu.Item>
          <Menu.Item key="itemAction">
            <Link to="/itemAction">Item action</Link>
          </Menu.Item>
          <Menu.Item key="viewAction">
            <Link to="/viewAction">View action</Link>
          </Menu.Item>
          <Menu.Item key="chart">
            <Link to="/chart">Chart</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ padding: '24px 16px 0', overflow: 'initial' }}>{props.children}</Content>
      </Layout>
    </Layout>
  );
}
