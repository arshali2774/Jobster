import React from 'react';
import { Landing, Error, Dashboard, Register } from './pages';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Dashboard />,
    },
    {
      path: 'landing',
      element: <Landing />,
    },
    {
      path: 'register',
      element: <Register />,
    },
    {
      path: '*',
      element: <Error />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
