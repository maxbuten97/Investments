import { Button, Input, Link } from "@nextui-org/react";
import s from "./Callback.module.scss";
import { PATH } from "shared/assets";
import Image from "next/image";

export interface ICallbackProps {
  title: string;
  color: string;
  btn: string;
  text?: string;
}

const Callback = ({ title, color, btn, text }: ICallbackProps) => {
  return (
    <div className={s.form_callback}>
      <div className={s.form_title} style={{ color }}>
        {title}
      </div>
      <div className={s.form_text} style={{ color }}>
        {text}
      </div>
      <div className={s.callback_block}>
        <Input
          className={s.input}
          bordered
          initialValue="+7"
          contentRight={
            <Image src={`${PATH}flag.png`} alt="ru" width={15} height={15} />
          }
        />
        <Button
          css={{ borderRadius: "6px", height: "56px" }}
          color="secondary"
          size="lg"
        >
          {btn}
        </Button>
      </div>
      <div className={s.policy_block} style={{ color }}>
        Ввод номера телефона подтверждает ваше согласие с{" "}
        <Link className={s.policy} css={{ color: "blue" }}>
          Политикой обработки персональных данных
        </Link>
      </div>
    </div>
  );
};

export default Callback;
