// App.jsx
import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Home from './pages/Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <div>About Page</div>,
  },
  // Add more routes as needed
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
