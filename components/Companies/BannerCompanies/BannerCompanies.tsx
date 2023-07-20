"use client";
import s from "./BannerCompanies.module.scss";

const BannerCompanies = () => {
  return (
    <div className={s.Banner}>
      <div className={s.container}>
        <div className={s.row}>
          <div className={s.visor}>ОТДАЕМ ПРИОРИТЕТ КОМПАНИЯМ, У КОТОРЫХ</div>
          <div className={s.content}>
            <div className={s.investors}>
              <div className={s.text}>Годовой оборот компании</div>
              <div className={s.investments}>
                <span className={s.from}>от</span>
                <span className={s.num}>30млн </span>
                <span className={s.rub}>РУБЛЕЙ</span>
              </div>
            </div>
            <div className={s.companies}>
              <div className={s.text}>
                Сумма инвестиций и Чистая прибыль в год
              </div>
              <div className={s.investments}>
                <span className={s.from}>от</span>
                <span className={s.num}>5млн </span>
                <span className={s.rub}>РУБЛЕЙ</span>
              </div>
            </div>
            <div className={s.period}>
              <div className={s.text}>Срок существования</div>
              <div className={s.investments}>
                <span className={s.num}>2лет </span>
                <span className={s.rub}>от</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={s.conditions}>
        ⠀Эти условия - рекомендация. Мы готовы рассмотреть каждый проект.
      </div>
    </div>
  );
};

export default BannerCompanies;
