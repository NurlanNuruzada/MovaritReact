
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
      element: <MainLayout theme={"dark"} />,
      children: [
        {
          path: "/",
          element: <Home theme={"dark"} />,
        },
        {
          path: "/Products",
          element: <Products theme={"dark"} />,
        },
        {
          path: "/Moods",
          element: <Moods theme={"dark"} />,
        },
        {
          path: "/ArtMoods",
          element: <ArtMoods theme={"dark"} />,
        }
      ],
    },
    {
      path: "/DigitalArt",
      element: <MainLayout theme={"dark"} />,
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
