import {
    createBrowserRouter,    
  } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/Error/ErrorPage";
import Home from "../Pages/Home/Home";
import About from "../Pages/AoboutUs/About";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "../Layout/PrivateRoute";
import AddProduct from "../Pages/AddProduct/AddProdutc";
import MyCart from "../Pages/MyCart/MyCart";
import BrandDetails from "../Pages/BrandDetails/BrandDetails";
import SeeDetail from "../Pages/SeeDetails/SeeDetail";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
            loader: () => fetch('/data.json')
        },
        {
          path: "/About",
          element: <About></About>
        },
        {
          path: "/Login",
          element: <Login></Login>
        },
        {
          path:"/Register",
          element: <Register></Register>
        },
        {
          path:"/AddProduct",
          element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
        },
        {
          path: "/MyCart",
          element: <PrivateRoute><MyCart></MyCart></PrivateRoute>
        },
        {
          path: "/brandDetails/:brand",
          element: <BrandDetails></BrandDetails>,
          loader: () => fetch('http://localhost:5000/product')
        },
        {
          path: "/seeDetails/:_id",
          element: <PrivateRoute><SeeDetail></SeeDetail></PrivateRoute>,
          loader: () => fetch('http://localhost:5000/product')
        }
      ]
    },
  ]);

export default router;