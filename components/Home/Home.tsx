"use client";
import Answers from "./Answers/Answers";
import Banner from "./Banner/Banner";
import Become from "./Become/Become";
import s from "./Home.module.scss";
import Promo from "./Promo/Promo";
import Specifications from "./Specifications/Specifications";

const Home = () => {
  return (
    <div className={s.Main}>
      <div className={s.container}>
        <Promo />
        <Specifications />
        <Banner />
        <Answers />
        <Become />
      </div>
    </div>
  );
};

export default Home;
