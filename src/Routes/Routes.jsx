
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
          element: <Products theme={"light"} />,
        },
        {
          path: "/Moods",
          element: <Moods theme={"light"} />,
        },
        {
          path: "/ArtMoods",
          element: <ArtMoods theme={"light"} />,
        }
      ],
    },
    {
      path: "/",
      element: <MainLayout theme={"dark"} />,
      children: [
        {
          path: "/DigitalArt",
          element: <Home theme={"dark"} />,
        },
        {
          path: "DigitalArt/Products",
          element: <Products theme={"dark"} />,
        },
        {
          path: "DigitalArt/Moods",
          element: <Moods theme={"dark"} />,
        },
        {
          path: "DigitalArt/ArtMoods",
          element: <ArtMoods theme={"dark"} />,
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
