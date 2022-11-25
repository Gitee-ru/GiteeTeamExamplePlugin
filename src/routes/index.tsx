import React, { ComponentType } from 'react';
import { AppLayout } from '@/components/AppLayout';

interface RouteDesc {
  path: string;
  label: string;
  component: ComponentType;
  exact?: boolean;
}

const routes: RouteDesc[] = [
  {
    path: '/',
    label: 'Main page',
    component: React.lazy(() => import('../pages/Main')),
    exact: true,
  },
  {
    path: '/adminPage',
    label: 'Admin page',
    component: React.lazy(() => import('../pages/AdminPage')),
    exact: true,
  },
  {
    path: '/itemPanel',
    label: 'Item panel',
    component: React.lazy(() => import('../pages/ItemPanel')),
    exact: true,
  },
  {
    path: '/itemActivity',
    label: 'Item activity',
    component: React.lazy(() => import('../pages/ItemActivity')),
    exact: true,
  },
  {
    path: '/workspacePage',
    label: 'Workspace page',
    component: React.lazy(() => import('../pages/WorkspacePage')),
    exact: true,
  },
  {
    path: '/itemAction',
    label: 'Item action',
    component: React.lazy(() => import('../pages/ItemAction')),
    exact: true,
  },
  {
    path: '/viewAction',
    label: 'View action',
    component: React.lazy(() => import('../pages/ViewAction')),
    exact: true,
  },
];

const navLinks = routes.map(({ path, label }) => ({ path, label }));

routes.forEach(route => {
  route.component = () => (
    <AppLayout nav={navLinks}>
      <route.component />
    </AppLayout>
  );
});

export default routes;
