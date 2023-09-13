"use client";
import s from "./Investors.module.scss";
import CardItem from "shared/UI-kit/CardItem/CardItem";
import InvestorsForm from "../../../components/Investors/InvestorsForm/InvestorsForm";
import SuccessDeals from "../../../components/Investors/SuccessDeals/SuccessDeals";
import Stages from "../../../components/Investors/Stages/Stages";
import QuestionsInvestors from "../../../components/Investors/QuestionsInvestors/QuestionsInvestors";
import FormInvestments from "../../../components/Companies/FormInvestments/FormInvestments";

const Investors = () => {
  return (
    <div className={s.Investors}>
      <div className={s.container}>
        <div className={s.row}>
          <InvestorsForm />
          <div className={s.companies}>
            <div className={s.title}>
              КОМПАНИИ, В КОТОРЫЕ ВЫ МОЖЕТЕ ИНВЕСТИРОВАТЬ НА ПЛАТФОРМЕ
            </div>
            <div className={s.cards}>
              <CardItem />
              <CardItem />
              <CardItem />
            </div>
          </div>
          <SuccessDeals />
          <Stages />
          <QuestionsInvestors />
          <FormInvestments
            title="Не нашли свой вопрос?"
            text="Оставьте заявку в форме ниже, и мы с вами свяжемся, чтобы ответить на все вопросы."
          />
        </div>
      </div>
    </div>
  );
};

export default Investors;
