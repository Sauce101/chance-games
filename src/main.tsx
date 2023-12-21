import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Root from './routes/root';
import ErrorPage from './error-page';
import Dashboard from './routes/dashboard';
import PlayCraps from './routes/craps';
import PlayHighCard from './routes/highcard';
import PlayPokerDice from './routes/pokerdice';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      // <Provider store={store}>
      <Root />
      // </Provider>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Dashboard /> },
          {
            path: 'craps',
            element: <PlayCraps />,
          },
          {
            path: 'highcard',
            element: <PlayHighCard />,
          },
          {
            path: 'pokerdice',
            element: <PlayPokerDice />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
