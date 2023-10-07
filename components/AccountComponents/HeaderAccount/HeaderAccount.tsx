import Link from "next/link";
import s from "./HeaderAccount.module.scss";
import { navLinkAccount } from "./linksHeaderAccount";
import Image from "next/image";
import { PATH } from "shared/assets";
import { Button } from "@nextui-org/react";

const HeaderAccount = () => {
  return (
    <div className={s.HeaderAccount}>
      <div className={s.container}>
        <div className={s.content}>
          <div className={s.nav_links}>
            {navLinkAccount.map((link) => {
              return (
                <div className={s.link} key={link.id}>
                  <Link href={link.src}>{link.link}</Link>
                </div>
              );
            })}
          </div>
          <div className={s.buttons}>
            <button className={s.notify}>
              <Image
                src={`${PATH}notify.png`}
                alt={"Уведомления"}
                width={26}
                height={26}
              />
            </button>
            <button className={s.exit}>
              <Image
                src={`${PATH}exit.png`}
                alt={"Выход"}
                width={28}
                height={28}
              />
            </button>
          </div>
        </div>
        <div className={s.greeting}>Добрый день, Александр</div>
      </div>
    </div>
  );
};

export default HeaderAccount;
