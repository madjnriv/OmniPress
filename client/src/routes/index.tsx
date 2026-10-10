import { createBrowserRouter } from "react-router-dom";
import AuthRoutes from "./auth-routes";
import AppLayout from "@/layouts/app-layout";
import PageNotFound from "@/shared/components/page-not-found";
import Home from "@/pages/home";
import { RouteGuard } from "./route-guard";
import NewArticle from "@/pages/new-article";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RouteGuard />,
    children: [
      {
        element: <AppLayout />,
        children: [
          { index: true, element: <Home /> },
          { path: "articles/new", element: <NewArticle /> },
        ],
      },
    ],
  },
  ...AuthRoutes,
  { path: "*", element: <PageNotFound /> },
]);
