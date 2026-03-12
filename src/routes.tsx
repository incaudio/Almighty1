import HomePage from './pages/HomePage';
import DemoSubmissionPage from './pages/DemoSubmissionPage';
import type { ReactNode } from 'react';

interface RouteConfig {
  name: string;
  path: string;
  element: ReactNode;
  visible?: boolean;
}

const routes: RouteConfig[] = [
  {
    name: 'Home',
    path: '/',
    element: <HomePage />
  },
  {
    name: 'Submit Demo',
    path: '/submit-demo',
    element: <DemoSubmissionPage />
  }
];

export default routes;
