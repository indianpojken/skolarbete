import { createBrowserRouter } from 'react-router-dom';

import Root from '@/layouts/Root.tsx';
import Messages from '@/views/Messages.tsx';
import PostMessage from '@/views/PostMessage.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { path: '/', element: <Messages /> },
      { path: '/post', element: <PostMessage /> },
    ],
  },
]);
