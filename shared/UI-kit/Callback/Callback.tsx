import { Button, Input, Link } from "@nextui-org/react";
import s from "./Callback.module.scss";
import { PATH } from "@/components/Header/Header";
import Image from "next/image";

export interface ICallbackProps {
  title: string;
}

const Callback = ({ title }: ICallbackProps) => {
  return (
    <div className={s.form_callback}>
      <div className={s.form_title}>{title}</div>
      <div className={s.form_text}>
        и получать вознаграждение за привлечение компаний и инвесторов на
        платформу
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
        <Button css={{ borderRadius: "6px" }} color="secondary" size="lg">
          СТАТЬ ПАРТНЕРОМ
        </Button>
      </div>
      <div className={s.policy_block}>
        Ввод номера телефона подтверждает ваше согласие с{" "}
        <Link className={s.policy} css={{ color: "blue" }}>
          Политикой обработки персональных данных
        </Link>
      </div>
    </div>
  );
};

export default Callback;
