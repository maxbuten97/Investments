"use client";

import s from "./Navigation.module.scss";
import Link from "next/link";
const Navigation = () => {
  return (
    <div className={s.Navigation}>
      <div className={s.container}>
        <div className={s.list_item}>
          <div className={s.link}>
            <Link href="/">Главная</Link>
          </div>
          <div className={s.link}>
            <Link href="/">Инвесторам</Link>
          </div>
          <div className={s.link}>
            <Link href="/">Компаниям</Link>
          </div>
          <div className={s.link}>
            <Link href="/">Партнерам</Link>
          </div>
          <div className={s.link}>
            <Link href="/">Кейсы</Link>
          </div>
          <div className={s.link}>
            <Link href="/">Блог</Link>
          </div>
          <div className={s.link}>
            <Link href="/">Контакты</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
