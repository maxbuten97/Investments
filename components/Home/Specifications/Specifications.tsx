"use client";
import { PATH } from "@/components/Header/Header";
import s from "./Specifications.module.scss";
import Image from "next/image";
import Icon from "@/components/IconComponent/Icon";

const Specifications = () => {
  return (
    <div className={s.Specifications}>
      <div className={s.container}>
        <div className={s.title}>FINMUSTER ЭТО МЕСТО, ГДЕ</div>.
        <div className={s.specifications_block}>
          <div className={s.card}>
            <Image
              src={`${PATH}card.png`}
              alt="Карта"
              width={560}
              height={347}
              className={s.image}
            />
          </div>
          <div className={s.specifications}>
            <div className={s.specification}>
              <div className={s.specification_title}>
                <Icon name="navigation" />
                <span className={s.title_text}>БЫСТРО</span>
              </div>
              <div className={s.specification_text}>
                Средний срок привлечения инвестиций для компании - 7 дней.
              </div>
            </div>
            <div className={s.specification}>
              <div className={s.specification_title}>
                <Icon name="shield" />
                <span className={s.title_text}>УДОБНО</span>
              </div>
              <div className={s.specification_text}>
                Для инвесторов: все сделки проводятся через онлайн-платформу.
                Для компаний: мы помогаем на всех этапах подготовки и
                привлечении инвесторов.
              </div>
            </div>
            <div className={s.specification}>
              <div className={s.specification_title}>
                <Icon name="notes" />
                <span className={s.title_text}>НАДЕЖНО</span>
              </div>
              <div className={s.specification_text}>
                Для инвесторов: на платформу проходят только те компании,
                которые прошли нашу тщательную проверку. Для компаний: все
                транзакции проходят через нашу платформу, а каждый инвестор
                роверен.
              </div>
            </div>
            <div className={s.specification}>
              <div className={s.specification_title}>
                <Icon name="star" />
                <span className={s.title_text}>ВЫГОДНО</span>
              </div>
              <div className={s.specification_text}>
                Для инвесторов: доходность инвестиций выше рыночной и составляет
                примерно от 30% годовых.Для компаний: условия сделки с
                инвесторами составляете вы сами.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specifications;
