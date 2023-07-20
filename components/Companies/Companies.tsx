"use client";
import Callback from "shared/UI-kit/Callback/Callback";
import s from "./Companies.module.scss";
import BannerComapanies from "./BannerCompanies/BannerCompanies";
import FormInvestments from "./FormInvestments/FormInvestments";
const Companies = () => {
  return (
    <div className={s.Companies}>
      <div className={s.container}>
        <div className={s.callback}>
          <Callback title="ПРИВЛЕЧЕМ ИНВЕСТОРОВ В БИЗНЕС НА ВАШИХ УСЛОВИЯХ ОТ 7 ДНЕЙ. РАЗМЕСТИТЕ СВОЮ КОМПАНИЮ " />
        </div>
        <div className={s.banner}>
          <BannerComapanies />
          <FormInvestments />
        </div>
      </div>
    </div>
  );
};

export default Companies;
