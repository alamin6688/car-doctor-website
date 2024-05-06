import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/SignUp/Signup";
import PrivateRoute from "./PrivateRoute";
import About from "../Pages/Home/About/About";
import CheckOut from "../Pages/CheckOut/CheckOut";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/about',
            element: <PrivateRoute><About></About></PrivateRoute>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/sign-up',
          element: <Signup></Signup>
        },
        {
          path: '/checkOut/:id',
          element: <CheckOut></CheckOut>,
          loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
        },
      ]
    },
  ]);

  export default router;