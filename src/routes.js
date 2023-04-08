import { Navigate, useRoutes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import { Home, Team } from "./pages";

export default function Router() {
  const routes = useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "/", element: <Home />, index: true },
        { path: "teams/:id", element: <Team /> },
      ],
    },
    {
      path: "/404",
      element: <Home />,
    },
    {
      path: "*",
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
