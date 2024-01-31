import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Layout from "./layout/Layout";
import Dashboard from "./herosections/Dashboard";
import Property from "./herosections/Property";
import Tenant from "./herosections/Tenant";
import RentDetails from "./herosections/RentDetails";
import PropertyForm from "./herosections/PropertyForm";
import PropertyList from "./herosections/PropertyList";
import TenantForm from "./herosections/TenantForm";
import TenantList from "./herosections/TenantList";
import TenantRent from "./herosections/TenantRent";
import TenantRentForm from "./herosections/TenantRentForm";
import TenantRentList from "./herosections/TenantRentList";

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
          path: "tenant",
          element: <Tenant />,
          children: [
            {
              path: "form",
              element: <TenantForm />,
            },
            {
              path: "list",
              element: <TenantList />,
            },
          ],
        },
        {
          path: "tenantrent",
          element: <TenantRent />,
          children: [
            {
              path: "form",
              element: <TenantRentForm />,
            },
            {
              path: "list",
              element: <TenantRentList />,
            },
          ],
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
