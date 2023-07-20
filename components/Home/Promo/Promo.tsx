"use client";
import { PATH } from "@/components/Header/Header";
import s from "./Promo.module.scss";
import Image from "next/image";

const Promo = () => {
  return (
    <div className={s.Promo}>
      <div className={s.container}>
        <div className={s.row}>
          <div className={s.title}>
            Инвестиционная платформа эмиссионных ценных бумаг
          </div>
          <div className={s.text}>
            Входит в реестр инвестиционных платформ Банка России
          </div>
          <div className={s.rectangle}>
            <Image
              src={`${PATH}iphones.png`}
              alt="promo"
              width={780}
              height={600}
            />
          </div>
          <div className={s.for_block}>
            <div className={s.investors}>
              <div className={s.investors_title}>Инвесторам</div>
              <div className={s.investors_text}>
                стать совладельцем компаний малого и среднего бизнеса, получать
                доходность выше рыночной
              </div>
            </div>
            <div className={s.companies}>
              <div className={s.companies_title}>Компаниям</div>
              <div className={s.companies_text}>
                разместить свое предложение на платформе, чтобы получить
                возможность привлечь инвесторов на выгодных условиях
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promo;
