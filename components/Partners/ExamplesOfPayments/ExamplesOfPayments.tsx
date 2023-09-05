import s from "./ExamplesOfPayments.module.scss";
import Icon from "@/components/IconComponent/Icon";
import { payments } from "./payments";

const ExamplesOfPayments = () => {
  return (
    <div className={s.ExamplesOfPayments}>
      <div className={s.title}>
        ПРИМЕР ВЫПЛАТЫ ЗА ПРИВЛЕЧЕНИЕ ИНВЕСТОРОВ 20% ОТ КОМИССИИ ИНВЕСТОРА
      </div>
      <div className={s.content}>
        {payments.map((payment) => {
          return (
            <div className={s.item} key={payment.id}>
              <div className={s.image}>
                <Icon name={payment.image} />
                <div className={s.text}>
                  {payment.text} <br />
                  <span className={s.bold}>{payment.boldText}</span>.
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExamplesOfPayments;
