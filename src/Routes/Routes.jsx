
import { MainLayout } from "../Layouts/Main/MainLayout";
import { useRoutes } from "react-router";
import { useSelector } from "react-redux";
import SignUp from '../Pages/Fine Art/SignUp/SignUp'
import Home from '../Pages/Fine Art/Home/Home'
import Products from "../Pages/Fine Art/Products/Products";

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
        {
          path: "/Products",
          element: <Products />,
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
