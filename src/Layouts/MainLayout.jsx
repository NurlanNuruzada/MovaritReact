import React from "react";
import { Outlet } from "react-router-dom";
import Header from '../Components/Header/Header'
import Styles from "../Layouts/MainLayout.module.css"
import { ChakraProvider } from '@chakra-ui/react'
import Footer from '../Components/Footer/Footer'
export function MainLayout() {
  return (
    <div className={Styles.Main}>
      <div className={Styles.Outlet}>
        <ChakraProvider >
          <Header ShowButtons={true} />
        </ChakraProvider>
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}
