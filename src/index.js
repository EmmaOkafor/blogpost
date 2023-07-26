import React from 'react';
import ReactDOM from 'react-dom/client';
import Create from './components/blog/Create';
import View from './components/blog/View';
import List from './components/blog/List';
import App from './components/App';

import {
createBrowserRouter,
RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
{
  path: "/",
  element: <App />,
},
{
  path: "/",
  element: <Create />,
},
{
  path: "/view-blog",
  element: <View />,
},
{
  path: "/list-blog",
  element: <List />,
}
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


