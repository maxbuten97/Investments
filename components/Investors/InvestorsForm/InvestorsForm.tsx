import s from "./InvestorsForm.module.scss";
import Callback from "shared/UI-kit/Callback/Callback";
import CardItem from "shared/UI-kit/CardItem/CardItem";

const InvestorsForm = () => {
  return (
    <div>
      <Callback
        title="ИНВЕСТИРУЙТЕ В ПЕРСПЕКТИВНЫЕ КОМПАНИИ МАЛОГО 
И СРЕДНЕГО БИЗНЕСА ЧЕРЕЗ ИНВЕСТИЦИОННУЮ ПЛАТФОРМУ
"
        btn="СТАТЬ ИНВЕСТОРОМ"
        color="#4c3563"
      />
      <div className={s.cards}>
        <div className={s.card}>
          <CardItem />
        </div>
        <div className={s.card_reverse}>
          <CardItem />
        </div>
      </div>
    </div>
  );
};

export default InvestorsForm;
