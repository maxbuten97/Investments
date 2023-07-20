"use client";
import Icon from "@/components/IconComponent/Icon";
import s from "./FormInvestments.module.scss";

const FormInvestments = () => {
  return (
    <div className={s.FormInvestments}>
      <div className={s.container}>
        <div className={s.waves}>
          <Icon name="wave1" className={s.wave1} />
          <Icon name="wave2" className={s.wave2} />
        </div>
        <div className={s.content}>
          <div className={s.title}>
            УЗНАЙТЕ, ПОДХОДИТ ЛИ ВАШЕЙ КОМПАНИИ ЭТОТ СПОСОБ ПРИВЛЕЧЕНИЯ
            ИНВЕСТИЦИЙ
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormInvestments;
