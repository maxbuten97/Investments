"use client";
import Callback from "shared/UI-kit/Callback/Callback";
import s from "./Companies.module.scss";
import BannerComapanies from "./BannerCompanies/BannerCompanies";
import FormInvestments from "./FormInvestments/FormInvestments";
import GetInvestments from "./GetInvestments/GetInvestments";
import WhyBlock from "./WhyBlock/WhyBlock";
import Visor from "./Visor/Visor";
import Questions from "./Questions/Questions";
import Cases from "./Cases/Cases";
const Companies = () => {
  return (
    <div className={s.Companies}>
      <div className={s.container}>
        <div className={s.callback}>
          <Callback
            btn="ЗАРЕГИСТРИРОВАТЬСЯ"
            color="#fff"
            title="ПРИВЛЕЧЕМ ИНВЕСТОРОВ В БИЗНЕС НА ВАШИХ УСЛОВИЯХ ОТ 7 ДНЕЙ. РАЗМЕСТИТЕ СВОЮ КОМПАНИЮ "
          />
        </div>
        <div className={s.banner}>
          <BannerComapanies />
          <FormInvestments
            title="УЗНАЙТЕ, ПОДХОДИТ ЛИ ВАШЕЙ КОМПАНИИ ЭТОТ СПОСОБ ПРИВЛЕЧЕНИЯ
            ИНВЕСТИЦИЙ"
            text="Оставьте заявку, и наш эксперт свяжется с вами"
          />
          <Cases />
          <GetInvestments />
          <WhyBlock />
          <FormInvestments
            title="УЗНАЙТЕ СТОИМОСТЬ ПРИВЛЕЧЕНИЯ ИНВЕСТИЦИЙ В СВОЮ КОМПАНИЮ"
            text="Запишитесь на бесплатную консультацию с нашим специалистом, чтобы рассчитать примерную стоимость привлечения инвестиций."
          />
          <Visor />
          <Questions />
        </div>
      </div>
    </div>
  );
};

export default Companies;
