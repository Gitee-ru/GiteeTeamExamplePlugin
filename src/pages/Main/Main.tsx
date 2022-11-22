import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from 'antd';
import Menu from '@osui/menu';
import Input from '@osui/input';
import Rate from '@osui/rate';
import { useSDK } from '@projectproxima/plugin-sdk';
import Error from '@/statics/error.png';
import { Logo } from '@/components/Logo';
import cx from './Main.less';

const { Header, Content, Sider } = Layout;

export const Main: React.FC = () => {
  const sdk = useSDK();

  const handleClick = () => {
    sdk.sendAction('openIssuePanel', { issue: 11223 }).then(() => {
      console.info('Issue panel is opened');
    });
  };

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
          <Menu.Item key="logo" style={{ height: 'initial' }}>
            <Logo className="logo" />
          </Menu.Item>
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
        <Content style={{ padding: '24px 16px 0', overflow: 'initial' }}>
          <div>
            <h2 className={cx('title')}>Demo</h2>
            <Input placeholder="OSUI input" />
            <Rate allowHalf defaultValue={2.5} />
            <button onClick={handleClick}>Open issue panel</button>
            <div>
              <img src={Error} />
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
