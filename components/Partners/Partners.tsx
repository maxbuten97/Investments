"use client";

import Callback from "shared/UI-kit/Callback/Callback";
import s from "./Partners.module.scss";
import Image from "next/image";
import { PATH } from "../Header/Header";
import Rewards from "./Rewards/Rewards";
import CalculatePercent from "./CalculatePercent/CalculatePercent";
import ExamplesOfPayments from "./ExamplesOfPayments/ExamplesOfPayments";
import PartnersLink from "./PartnersLink/PartnersLink";
import FormInvestments from "../Companies/FormInvestments/FormInvestments";

const Partners = () => {
  return (
    <div className={s.Partners}>
      <div className={s.container}>
        <div className={s.investors_form}>
          <Callback
            title="ПОЛУЧАЙТЕ ВОЗНАГРАЖДЕНИЕ ДО 20%, ПРИГЛАШАЯ КОМПАНИИ И ИНВЕСТОРОВ 
НА ПЛАТФОРМУ FINMUSTER"
            color="#fff"
            btn="СТАТЬ ПАРТНЕРОМ"
          />
          <div className={s.image_wrapp}>
            <Image
              src={`${PATH}gold_card.png`}
              alt="Карта"
              width={525}
              height={307}
            />
            <div className={s.card_text}>НАГРАДА</div>
          </div>
        </div>
        <Rewards />
        <CalculatePercent />
        <ExamplesOfPayments />
      </div>
      <PartnersLink />
      <div className={s.container}>
        <div className={s.form}>
          <FormInvestments
            title="Не нашли свой вопрос?"
            text="Оставьте заявку в форме ниже, и мы с вами свяжемся, чтобы ответить на все вопросы."
          />
        </div>
      </div>
    </div>
  );
};

export default Partners;
