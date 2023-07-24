"use client";
import Icon from "@/components/IconComponent/Icon";
import s from "./WhyBlock.module.scss";
import { cards } from "./cardBlock";

const WhyBlock = () => {
  return (
    <div className={s.WhyBlock}>
      <div className={s.container}>
        <div className={s.title}>ПОЧЕМУ FINMUSTER?</div>
        <div className={s.cards_block}>
          {cards.map((card) => {
            return (
              <div className={s.card} key={card.id}>
                <div className={s.icon}>
                  <Icon name={card.icon} />
                </div>
                <span className={s.text}>{card.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhyBlock;
