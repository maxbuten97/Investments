"use client";
import s from "./Navigation.module.scss";
import Link from "next/link";
import { links } from "./links";

const Navigation = () => {
  return (
    <div className={s.Navigation}>
      <div className={s.container}>
        <div className={s.list_item}>
          {links.map((link) => {
            return (
              <div className={s.link} key={link.id}>
                <Link href={link.href}>{link.text}</Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
