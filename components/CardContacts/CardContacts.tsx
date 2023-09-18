import Image from "next/image";
import s from "./CardContacts.module.scss";
import { PATH } from "shared/assets";
import Link from "next/link";
import Icon from "../IconComponent/Icon";

const CardContacts = () => {
  return (
    <div className={s.CardContacts}>
      <div className={s.header}>
        <Image
          src={`${PATH}logo_contacts.png`}
          alt={""}
          height={86}
          width={356}
        />{" "}
      </div>
      <div className={s.content}>
        <div className={s.title}>СВЯЖИТЕСЬ С НАМИ ЛЮБЫМ УДОБНЫМ СПОСОБОМ</div>
        <div className={s.main}>
          <div className={s.tel}>
            <Icon name="tel" />
            <Link href={`tel:${79181424844}`}>+7 (918) 142-48-44</Link>
          </div>
          <div className={s.email}>
            <Icon name="label" />
            investplatformacb@gmail.com
          </div>
          <div className={s.address}>
            г. Краснодар,улица им. Калинина, дом 13, корпус 60, помещение №24
          </div>
          <div className={s.socials}>
            <Image src={`${PATH}vk.png`} alt="social" width={49} height={49} />
            <Image src={`${PATH}tg.png`} alt="social" width={49} height={49} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardContacts;
