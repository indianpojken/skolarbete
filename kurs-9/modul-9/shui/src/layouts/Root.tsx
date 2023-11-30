import { Outlet } from 'react-router-dom';

import '@/scss/main.scss';

export default function Root() {
  return (
    <div className="app">
      <main>
        <Outlet />
      </main>
    </div>
  );
}
