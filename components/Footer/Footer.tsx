import React from "react";
import s from "./Footer.module.scss";
import Image from "next/image";
import { PATH } from "../Header/Header";
import Icon from "../IconComponent/Icon";
const Footer = () => {
  return (
    <div className={s.Footer}>
      <div className={s.container}>
        <div className={s.row}>
          <div className={s.associations}>
            <div className={s.logo}>
              <Image
                src={`${PATH}logo.png`}
                alt={"Логотип"}
                width={182}
                height={44}
              />
              <span className={s.logo_text}>Инвестиционная платформа</span>
            </div>
            <div className={s.bank_ru}>
              <Image
                src={`${PATH}bankRU.png`}
                alt={"Логотип"}
                width={263}
                height={75}
              />
            </div>
            <div className={s.fin_text}>
              Finmuster входит в реестр инвестиционных платформ Банка России
            </div>
            <div className={s.assoc}>
              <Image
                src={`${PATH}assoc.png`}
                alt={"Логотип"}
                width={156}
                height={67}
              />
            </div>
            <div className={s.members_text}>
              Член ассоциации операторов инвестиционных платформ
            </div>
          </div>
          <div className={s.navigation}>
            <div className={s.nav_list}>
              <div className={s.nav_link}>ГЛАВНАЯ</div>
              <div className={s.nav_link}>ИНВЕСТОРАМ</div>
              <div className={s.nav_link}>КОМПАНИЯМ</div>
              <div className={s.nav_link}>ПАРТНЕРАМ</div>
              <div className={s.nav_link}>КЕЙСЫ</div>
              <div className={s.nav_link}>БЛОГ</div>
              <div className={s.nav_link}>КОНТАКТЫ</div>
            </div>
          </div>
          <div className={s.info}>
            <div className={s.info_list}>
              <div className={s.info_link}>КВАЛИФИЦИРОВАННЫМ ИНВЕСТОРАМ</div>
              <div className={s.info_link}>ИНВЕСТИЦИОННЫЕ РИСКИ</div>
              <div className={s.info_link}>РАСКРЫТИЕ ИНФОРМАЦИИ</div>
              <div className={s.info_link}>ДОКУМЕНТЫ</div>
            </div>
          </div>
          <div className={s.contacts}>
            <div className={s.tel}>
              <Icon name="tel" />
              +7 (918) 142 48-44
            </div>
            <div className={s.email}>
              <Icon name="label" />
              investplatformacb@gmail.com
            </div>
            <div className={s.social}>
              <Image
                className={s.vk}
                src={`${PATH}vk.png`}
                alt={"Логотип"}
                width={49}
                height={49}
              />
              <Image
                className={s.tg}
                src={`${PATH}tg.png`}
                alt={"Логотип"}
                width={49}
                height={49}
              />
              <Image
                className={s.vc}
                src={`${PATH}vc.png`}
                alt={"Логотип"}
                width={67}
                height={65}
              />
            </div>
            <div className={s.social_text}>
              Заключение с использованием инвестиционной платформы договоров, по
              которым привлекаются инвестиции, является высокорискованным и
              может привести к потере инвестиционных денежных средств в полном
              объеме.
            </div>
            <div className={s.policy}>Политика конфиденциальности</div>
            <div className={s.agreement}>Пользовательское соглашение</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
