import React from 'react';

const routes = [
  {
    path: '/',
    component: React.lazy(() => import('../pages/Main')),
    exact: true,
  },
  {
    path: '/adminPage',
    component: React.lazy(() => import('../pages/AdminPage')),
    exact: true,
  },
  {
    path: '/itemPanel',
    component: React.lazy(() => import('../pages/ItemPanel')),
    exact: true,
  },
  {
    path: '/itemActivity',
    component: React.lazy(() => import('../pages/ItemActivity')),
    exact: true,
  },
  {
    path: '/workspacePage',
    component: React.lazy(() => import('../pages/WorkspacePage')),
    exact: true,
  },
  {
    path: '/itemAction',
    component: React.lazy(() => import('../pages/ItemAction')),
    exact: true,
  },
  {
    path: '/viewAction',
    component: React.lazy(() => import('../pages/ViewAction')),
    exact: true,
  },
  {
    path: '/chart',
    component: React.lazy(() => import('../pages/Chart')),
    exact: true,
  },
];

export default routes;
