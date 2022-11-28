import React from 'react';

const routes = [
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
  {
    path: '/widget',
    label: 'Widget',
    component: React.lazy(() => import('../pages/Widget')),
    exact: true,
  },
];

export default routes;
