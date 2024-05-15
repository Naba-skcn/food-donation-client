import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root.jsx';
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import AuthProvider from './components/providers/AuthProvider.jsx';
import AvailableFoods from './components/AvailableFoods.jsx';
import AboutUs from './components/AboutUs.jsx';
import PrivateRoute from './components/routes/Privateroute.jsx';
import AddFood from './components/AddFood.jsx';
import ViewDetails from './components/ViewDetails.jsx';
import MyFoods from './components/MyFoods.jsx';
import Update from './components/Update.jsx';
import MyRequest from './components/MyRequest.jsx';
import Error from './components/Error.jsx';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { HelmetProvider } from 'react-helmet-async';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/available",
        element: <AvailableFoods></AvailableFoods>
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>
      },
      {
        path: "/login",
        element: <Login></Login> ,
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/add",
        element: <PrivateRoute><AddFood></AddFood></PrivateRoute>,
      },   
      {
        path:"/myFood",
        element: <PrivateRoute><MyFoods></MyFoods></PrivateRoute>
      },   
      {
        path: "/requested",
        element: <PrivateRoute><MyRequest></MyRequest></PrivateRoute>
      },
      {
        path: "/update/:id",
        element: <PrivateRoute><Update></Update></PrivateRoute>,
      },
      {
        path: "/food/:id",
        element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/food/${params.id}`)
      },
    ]
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
    <QueryClientProvider client={queryClient}>
    <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
    </QueryClientProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
