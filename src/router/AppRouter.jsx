import React from "react";
import { createBrowserRouter } from "react-router";
import Posts from "./../pages/posts/Posts";
import Utilisateurs from "./../pages/utilisateurs/Utilisateurs";
import MainLayout from "../layout/MainLayout";
import UtilisateurDetail from "../pages/utilisateur-detail/UtilisateurDetail";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainLayout>
        <Posts />
      </MainLayout>
    ),
  },
  {
    path: "/utilisateurs",
    element: (
      <MainLayout>
        <Utilisateurs />
      </MainLayout>
    ),
  },
  {
    path: "/utilisateurs/:userId",
    element: (
      <MainLayout>
        <UtilisateurDetail />
      </MainLayout>
    ),
  },
]);

export default AppRouter;
