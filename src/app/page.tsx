"use client";
import Home from "@/components/Home/Home";
import s from "./page.module.scss";

function Page() {
  return (
    <div className={s.MyApp}>
      <div className={s.container}>
        <Home />
      </div>
    </div>
  );
}

export default Page;
