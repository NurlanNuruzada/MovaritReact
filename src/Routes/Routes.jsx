
import { MainLayout } from "../Layouts/Main/MainLayout";
import { useRoutes } from "react-router";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
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
        }
      ],
    },
    {
      path: "/register",
      element: <SignUp />,
    }
  ];
  return useRoutes(routes);
}
