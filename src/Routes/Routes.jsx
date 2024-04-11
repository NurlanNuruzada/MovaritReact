
import { MainLayout } from "../Layouts/MainLayout";
import { useRoutes } from "react-router";
import Home from "../Pages/Home/Home";
import { useSelector } from "react-redux";


export default function Routes() {
  const { token, email } = useSelector((x) => x.auth);
  let routes = [
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    }
  ];
  return useRoutes(routes);
}
