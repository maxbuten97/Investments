"use client";
import Percent from "../../../shared/UI-kit/Percent/Percent";
import s from "./Rewards.module.scss";
import { percents } from "./percents";

const Rewards = () => {
  return (
    <div className={s.Rewards}>
      <div className={s.title}>
        ПРИМЕР РАСЧЕТА ВОЗНАГРАЖДЕНИЯ <br /> ДЛЯ ПАРТНЕРА ЗА ОДНУ СДЕЛКУ С
        ЭМИТЕНТОМ
      </div>
      <div className={s.list_percent}>
        {percents.map((percent) => {
          return (
            <div className={s.block} key={percent.id}>
              <Percent num={percent.num} text={percent.text} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Rewards;
