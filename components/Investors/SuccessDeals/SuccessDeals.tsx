"use client";
import s from "./SuccessDeals.module.scss";
import { successDeals } from "./deals";

const SuccessDeals = () => {
  return (
    <div className={s.SuccessDeals}>
      <div className={s.row}>
        <div className={s.title}>
          МЫ ДЕЛАЕМ ВСЕ, ЧТОБЫ ВАШИ ИНВЕСТИЦИИ БЫЛИ НАДЕЖНЫМИ И УСПЕШНЫМИ
        </div>
        <div className={s.content}>
          <div className={s.column}>
            {successDeals.map((deal) => {
              return (
                <div className={s.block} key={deal.id}>
                  <div className={s.content_title}>{deal.title}</div>
                  <div className={s.text}>{deal.text}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessDeals;
