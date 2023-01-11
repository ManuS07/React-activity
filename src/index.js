import React from 'react';
import './index.css';
import Navigation from './Components/Navbar/navbar';
import ReactDOM from 'react-dom/client';
import Register from './Components/Register/register';
import CountApp from './Components/ClassComponent/index';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
  {path: '/', element:<Navigation />},
  {path: '/register', element: <Register />},
  {path: '/game', element: <CountApp />}
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
