
import { MainLayout } from "../Layouts/Main/MainLayout";
import { useRoutes } from "react-router";
import { useSelector } from "react-redux";
import SignUp from '../Pages/Fine Art/SignUp/SignUp'
import Home from '../Pages/Fine Art/Home/Home'
import Products from "../Pages/Fine Art/Products/Products";
import Moods from "../Pages/Fine Art/Moods/Moods";
import ArtMoods from "../Pages/Fine Art/ArtMoods/ArtMoods";

export default function Routes() {
  const { token, email } = useSelector((x) => x.auth);
  let routes = [
    {
      path: "/",
      element: <MainLayout theme={"light"} />,
      children: [
        {
          path: "/",
          element: <Home theme={"light"} />,
        },
        {
          path: "/Products",
          element: <Products />,
        },
        {
          path: "/Moods",
          element: <Moods />,
        },
        {
          path: "/MoodsColection",
          element: <Moods />,
        },
        {
          path: "/ArtMoods",
          element: <ArtMoods />,
        }
      ],
    },
    {
      path: "/DigitalArt",
      element: <MainLayout />,
      children: [
        {
          path: "/DigitalArt",
          element: <Home theme={"dark"} />,
        },
        {
          path: "/DigitalArt/Products",
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
