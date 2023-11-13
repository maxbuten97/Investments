import Image from "next/image";
import s from "./CardProfile.module.scss";
import { PATH } from "shared/assets";
import { Button } from "@nextui-org/react";
import Link from "next/link";

const CardProfile = () => {
  return (
    <div className={s.CardProfile}>
      <div className={s.logo}>Finmuster</div>
      <div className={s.card}>
        <div className={s.avatar}>
          <Image
            className={s.ava}
            src={`${PATH}sashkoAva.png`}
            alt={"avatar"}
            width={155}
            height={155}
          />
        </div>
        <div className={s.name}>Сашко А. В.</div>
        <div className={s.person_info}>
          investicii@gmail.com <br /> Статус: администратор
        </div>
        <div className={s.balance}>
          <div className={s.balance_text}>БАЛАНС</div>
          <div className={s.balance_rub}>215,00 ₽</div>
        </div>
        <div className={s.pay_btn}>
          <Button color="secondary" size="xl" css={{ width: "100%" }}>
            ПОПОЛНИТЬ СЧЁТ
          </Button>
        </div>
        <div className={s.info_block}>
          <Link href={"/"}>КОШЕЛЕК</Link>
          <Link href={"/"}>РЕФЕРАЛЬНАЯ ССЫЛКА</Link>
          <Link href={"/"}>БАЛАНС</Link>
        </div>
        <div className={s.invite}>
          <Button
            bordered
            color="secondary"
            size="lg"
            css={{ width: "90%", margin: "0 auto" }}
          >
            ПРИГЛАСИТЬ ДРУГА
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CardProfile;
