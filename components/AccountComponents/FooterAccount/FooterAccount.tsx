import Link from "next/link";
import s from "./FooterAccount.module.scss";
import { linksFooter } from "./linksFooterAccount";
import Image from "next/image";
import { PATH } from "shared/assets";
import { Button } from "@nextui-org/react";

const FooterAccount = () => {
  return (
    <div className={s.FooterAccount}>
      <div className={s.container}>
        <div className={s.content}>
          <div className={s.links}>
            {linksFooter.map((link) => {
              return (
                <Link className={s.link} key={link.id} href={link.src}>
                  {link.link}
                </Link>
              );
            })}
          </div>
          <div className={s.logo}>
            <div className={s.image}>
              <Image src={`${PATH}gerb1.png`} alt={""} width={60} height={60} />
            </div>
            <div className={s.text}>
              <div className={s.name}>Finmuster</div>
              <div className={s.invest}>Инвестиционная платформа</div>
            </div>
          </div>
        </div>
        <div className={s.copyright}>
          <div className={s.copy}>
            © АО «Оператор инвестиционной платформы эмиссионных ценных бумаг,
            2021–2022
          </div>
          <div className={s.support}>
            <Button color="secondary" size="md" css={{ width: "100%" }}>
              ТЕХ ПОДДЕРЖКА
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterAccount;
