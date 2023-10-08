import { Button } from "@nextui-org/react";
import s from "./VirtualAccount.module.scss";

const VirtualAccount = () => {
  return (
    <div className={s.VirtualAccount}>
      <div className={s.title}>Виртуальный счёт №1000019</div>
      <div className={s.cards}>
        <div className={s.active_card}>
          <div className={s.header_card}>
            Активы по виртуальному счёту №1000019
          </div>
          <div className={s.content}>
            <div className={s.balance}>
              БАЛАНС <span className={s.rub}>0,00 ₽</span>
            </div>
            <div className={s.more_block}>
              <div className={s.reserve}>
                Зарезервировано <span className={s.rub}>0,00 ₽</span>
              </div>
              <div className={s.available}>
                Доступно <span className={s.rub}>0,00 ₽</span>
              </div>
              <div className={s.btn}>
                <Button
                  color="secondary"
                  size="xl"
                  css={{
                    width: "100%",
                    letterSpacing: "2px",
                    borderRadius: "10px",
                  }}
                >
                  ПОПОЛНИТЬ СЧЁТ
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className={s.profit_card}>
          <div className={s.header_card}>
            Доходность по виртуальному счёту №1000019
          </div>
          <div className={s.content}>
            <div className={s.investment}>ДОХОДНОСТЬ</div>
            <div className={s.more_block}>
              <div className={s.reserve}>
                Доход за всё время <span className={s.rub}>—</span>
              </div>
              <div className={s.available}>
                Доход за всё время, % годовых <span className={s.rub}>—</span>
              </div>
              <div className={s.partners_block}>
                <div className={s.partners}>ПАРТНЁРСКАЯ ПРОГРАММА</div>
                <div className={s.available_partners}>
                  Доход за всё время <span className={s.rub}>—</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirtualAccount;
