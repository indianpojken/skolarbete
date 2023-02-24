import { createBrowserRouter } from 'react-router-dom';

import { Index } from './views/Index';
import { Buy } from './views/Buy';
import { Tickets } from './views/Tickets';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
  },
  {
    path: '/buy',
    element: <Buy />,
  },
  {
    path: '/tickets',
    element: <Tickets />,
  },
]);

export { router };
