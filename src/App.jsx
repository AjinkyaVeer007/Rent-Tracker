import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Layout from "./layout/Layout";
import Dashboard from "./herosections/Dashboard";
import Property from "./herosections/Property";
import Users from "./herosections/Users";
import UserOnRent from "./herosections/UserOnRent";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/main",
      element: <Layout />,
      children: [
        {
          path: "dashboard",
          element: <Dashboard />,
        },
        {
          path: "property",
          element: <Property />,
        },
        {
          path: "users",
          element: <Users />,
        },
        {
          path: "useronrent",
          element: <UserOnRent />,
        },
      ],
    },
  ]);
  return <RouterProvider router={route} />;
}

export default App;
