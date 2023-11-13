import Link from "next/link";
import s from "./NavCardAccount.module.scss";
import { cardLinks } from "./cardLink";
import { Pagination } from "@nextui-org/react";

const NavCardAccount = () => {
  return (
    <div className={s.NavCardAccount}>
      <div className={s.pagination}>
        <Pagination rounded total={2} initialPage={6} onlyDots />
      </div>
      <div className={s.cards}>
        {cardLinks.map((link) => {
          return (
            <Link className={s.link} href={link.src} key={link.id}>
              <div className={s.card}>
                <div className={s.title}>{link.title}</div>
                <div className={s.descr}>{link.text}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default NavCardAccount;
