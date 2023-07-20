"use strict";
import s from "./Banner.module.scss";

const Banner = () => {
  return (
    <div className={s.Banner}>
      <div className={s.container}>
        <div className={s.row}>
          <div className={s.investors}>
            <div className={s.visor}>ИНВЕСТОРАМ</div>
            <div className={s.text}>
              Инвесторы могут видеть компании, отобранные специалистами, и
              вкладывать в них
            </div>
            <div className={s.investments}>
              <span className={s.from}>от</span>
              <span className={s.num}>1000 </span>
              <span className={s.rub}>РУБЛЕЙ</span>
            </div>
            <button className={s.btn}>ИНВЕСТИРОВАТЬ</button>
          </div>
          <div className={s.companies}>
            <div className={s.visor}>КОМПАНИЯМ</div>
            <div className={s.text}>
              Компании могут привлечь инвестиции до{" "}
              <span className={s.big}>1 млрд. руб.</span> в бизнес за 1-9
              месяцев
            </div>
            <div className={s.investments}>
              <span className={s.num}>1млрд </span>
              <span className={s.rub}>РУБЛЕЙ</span>
            </div>
            <button className={s.btn}>ИНВЕСТИРОВАТЬ</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
