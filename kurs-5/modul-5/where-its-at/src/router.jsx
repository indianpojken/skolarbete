import { createBrowserRouter } from 'react-router-dom';

import { Index } from './views/Index';
import { Confirm } from './views/Confirm';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
  },
  {
    path: '/confirm',
    element: <Confirm />,
  },
]);

export { router };
