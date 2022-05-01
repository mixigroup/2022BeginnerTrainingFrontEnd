import type { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { CommunityDetailPage } from "./pages/communities/communityDetail";
import { Home } from "./pages/index";

const routes: { path: string; element: JSX.Element }[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/communities/:id",
    element: <CommunityDetailPage />,
  },
];

export const Router: FC = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route {...route} key={route.path} />
      ))}
    </Routes>
  );
};
