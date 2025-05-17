import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import MainLayout from "./layouts/MainLayout";
import DestinationPage from "./pages/DestinationPage";
import CrewPage from "./pages/CrewPage";
import TechnologyPage from "./pages/TechnologyPage";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <HomePage />,
        index: true,
      },
      {
        path: "/destination",
        element: <DestinationPage />,
      },
      {
        path: "/crew",
        element: <CrewPage />,
      },
      {
        path: "/technology",
        element: <TechnologyPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
