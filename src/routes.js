import React from 'react';

const Signup = React.lazy(() => import('./views/Signup'));
const Terms = React.lazy(() => import('./views/Terms'));
const Plans = React.lazy(() => import('./views/Plans'));
const Checkout = React.lazy(() => import('./views/Checkout'));
const Confirmation = React.lazy(() => import('./views/Confirmation'));
const Error = React.lazy(() => import('./views/Error'));


const routes = [
  { path: '/signup', name: 'Signup', component: Signup },
  { path: '/terms', name: 'Terms', component: Terms },
  { path: '/plans', name: 'Plans', component: Plans },
  { path: '/checkout', name: 'Checkout', component: Checkout },
  { path: '/letsprofit', name: 'Success', component: Confirmation },
  { path: '/error', name: 'Error', component: Error },
];

export default routes;
