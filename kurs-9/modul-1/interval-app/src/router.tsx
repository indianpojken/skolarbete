import { createBrowserRouter } from 'react-router-dom';

import Root from './views/Root/Root.tsx';
import Loading from './views/Loading/Loading.tsx';
import Interval from './views/Interval/Interval.tsx';
import Digital from './views/Digital/Digital.tsx';
import Analog from './views/Analog/Analog.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { path: '/', element: <Loading /> },
      { path: '/interval', element: <Interval /> },
      { path: '/digital', element: <Digital /> },
      { path: '/analog', element: <Analog /> },
    ],
  },
]);
