import React, { ReactElement, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from 'antd';
import Menu from '@osui/menu';

const { Header, Content, Sider } = Layout;

interface AppLayoutProps {
  nav?: { path: string; label: string }[];
  children?: ReactNode;
}

export function AppLayout(props: AppLayoutProps): ReactElement {
  const { nav, children } = props;
  const isDev = process.env.NODE_ENV === 'development';

  if (!isDev) {
    return <div>{children}</div>;
  }

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
          {nav.map(link => (
            <Menu.Item key={link.path}>
              <Link to={link.path}>{link.label}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ overflow: 'initial' }}>{children}</Content>
      </Layout>
    </Layout>
  );
}
