"use client";
import { NextUIProvider } from "@nextui-org/react";
import s from "./page.module.scss";
import Header from "@/components/Header/Header";
import Navigation from "@/components/Navigation/Navigation";
import Home from "@/components/Home/Home";
import Footer from "@/components/Footer/Footer";
import Companies from "@/components/Companies/Companies";
function MyApp() {
  return (
    <div className={s.MyApp}>
      <div className={s.container}>
        <Header />
        <Navigation />
        <Companies />
        {/* <Home /> */}
      </div>

      <Footer />
    </div>
  );
}

export default MyApp;
