import Percent from "shared/UI-kit/Percent/Percent";
import s from "./CalculatePercent.module.scss";
import { calculatePercents } from "./calculate";

const CalculatePercent = () => {
  return (
    <div className={s.CalculatePercent}>
      <div className={s.title}>
        ПРИМЕР РАСЧЕТА ВОЗНАГРАЖДЕНИЯ <br /> ДЛЯ ПАРТНЕРА ЗА ОДНУ СДЕЛКУ С
        ЭМИТЕНТОМ
      </div>
      {calculatePercents.map((percent) => {
        return (
          <div className={s.calculate_block} key={percent.id}>
            <div className={s.percent}>
              <Percent num={percent.num} />
            </div>
            <div className={s.calculate_content}>
              <div className={s.calculate}>{percent.calculate}</div>
              <div className={s.text}>{percent.text}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CalculatePercent;
