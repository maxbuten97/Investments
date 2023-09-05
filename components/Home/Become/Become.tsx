"use client";
import Image from "next/image";
import s from "./Become.module.scss";
import { PATH } from "@/components/Header/Header";
import Icon from "@/components/IconComponent/Icon";
import Callback from "shared/UI-kit/Callback/Callback";
const Become = () => {
  return (
    <div className={s.Become}>
      <div className={s.container}>
        <div className={s.row}>
          <div className={s.iphone_block}>
            <Image
              className={s.image}
              src={`${PATH}iphone.png`}
              alt="iphone"
              width={429}
              height={488}
            />
            <div className={s.message_left}>
              <div className={s.chechmark}>
                <Icon name="checkmark" />
              </div>
              <div className={s.text}>
                Партнерское вознаграждение «АО Лека»{" "}
                <span className={s.fatty_text}>+20 000 руб.</span>
              </div>
            </div>
            <div className={s.message_right}>
              <div className={s.chechmark_left}>
                <Icon name="checkmark" />
              </div>
              <div className={s.text}>
                Партнерское вознаграждение «АО Добрая река»{" "}
                <span className={s.fatty_text}>+20 000 руб.</span>
              </div>
            </div>
          </div>
          <Callback
            text="и получать вознаграждение за привлечение компаний  и инвесторов на платформу"
            btn="СТАТЬ ПАРТНЕРОМ"
            color="#4e3563"
            title="Если вы хотите стать партнером Finmuster"
          />
        </div>
      </div>
    </div>
  );
};

export default Become;
