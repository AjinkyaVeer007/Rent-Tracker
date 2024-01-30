import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Layout from "./layout/Layout";
import Dashboard from "./herosections/Dashboard";
import Property from "./herosections/Property";
import Users from "./herosections/Users";
import UserOnRent from "./herosections/UserOnRent";
import RentDetails from "./herosections/RentDetails";
import PropertyForm from "./herosections/PropertyForm";
import PropertyList from "./herosections/PropertyList";

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
          children: [
            {
              path: "form",
              element: <PropertyForm />,
            },
            {
              path: "list",
              element: <PropertyList />,
            },
          ],
        },
        {
          path: "users",
          element: <Users />,
        },
        {
          path: "useronrent",
          element: <UserOnRent />,
        },
        {
          path: ":tenantId",
          element: <RentDetails />,
        },
      ],
    },
  ]);
  return <RouterProvider router={route} />;
}

export default App;
