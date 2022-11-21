import React from 'react';

const routes = [
  {
    path: '/',
    component: React.lazy(() => import('../pages/demo/Demo')),
    exact: true,
  },
  {
    path: '/',
    component: React.lazy(() => import('../pages/demo1/Demo')),
    exact: true,
  },
  {
    path: '/',
    component: React.lazy(() => import('../pages/demo2/Demo')),
    exact: true,
  }
];

export default routes;
