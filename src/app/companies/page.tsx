"use client";
import Callback from "shared/UI-kit/Callback/Callback";
import s from "./Companies.module.scss";
import Cases from "@/components/Companies/Cases/Cases";
import FormInvestments from "@/components/Companies/FormInvestments/FormInvestments";
import GetInvestments from "@/components/Companies/GetInvestments/GetInvestments";
import Questions from "@/components/Companies/Questions/Questions";
import Visor from "@/components/Companies/Visor/Visor";
import WhyBlock from "@/components/Companies/WhyBlock/WhyBlock";
import BannerCompanies from "@/components/Companies/BannerCompanies/BannerCompanies";

const Companies = () => {
  return (
    <div className={s.Companies}>
      <div className={s.container}>
        <div className={s.callback}>
          <Callback
            text="А мы поможем с упаковкой, подготовкой к размещению на инвестиционной платформе и привлечением инвесторов."
            btn="ЗАРЕГИСТРИРОВАТЬСЯ"
            color="#fff"
            title="ПРИВЛЕЧЕМ ИНВЕСТОРОВ В БИЗНЕС НА ВАШИХ УСЛОВИЯХ ОТ 7 ДНЕЙ. РАЗМЕСТИТЕ СВОЮ КОМПАНИЮ "
          />
        </div>
        <div className={s.banner}>
          <BannerCompanies />
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
