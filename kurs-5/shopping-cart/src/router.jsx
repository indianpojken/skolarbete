import { createBrowserRouter } from 'react-router-dom';

import Root from './views/Root';
import Home from './views/Home';
import Products from './views/Products';
import About from './views/About';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "about",
        element: <About />
      },
    ],
  },
]);

export default router;
