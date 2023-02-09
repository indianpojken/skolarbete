import { createBrowserRouter } from 'react-router-dom';

import { Index } from './views/Index';
import { Book } from './views/Book';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
  },
  {
    path: '/book/:id',
    element: <Book />,
  }
]);

export { router };
