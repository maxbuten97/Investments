"use client";
import Icon from "@/components/IconComponent/Icon";
import s from "./FormInvestments.module.scss";
import { Button, Checkbox, Input } from "@nextui-org/react";
import Link from "next/link";

interface IFormInvest {
  title: string;
  text: string;
}

const FormInvestments = ({ title, text }: IFormInvest) => {
  return (
    <div className={s.FormInvestments}>
      <div className={s.container}>
        <div className={s.waves}>
          <Icon name="wave1" className={s.wave1} />
          <Icon name="wave2" className={s.wave2} />
        </div>
        <div className={s.content}>
          <div className={s.title}>{title}</div>
          <div className={s.subtitle}>{text}</div>
          <div className={s.input_block}>
            <div className={s.input_name}>
              <Input
                className={s.input}
                bordered
                placeholder="Имя"
                size="xl"
                css={{
                  width: 500,
                  backgroundColor: "#f8f1ff",
                }}
              />
            </div>
            <div className={s.input_tel}>
              <Input
                className={s.input}
                bordered
                placeholder="Телефон"
                size="xl"
                css={{ width: 500, backgroundColor: "#f8f1ff" }}
              />
            </div>
          </div>
          <div className={s.person}>
            <Checkbox>
              Согласен с
              <Link className={s.person_link} href="/">
                Политикой обработки персональных данных
              </Link>
            </Checkbox>
          </div>
          <Button
            className={s.btn}
            css={{ borderRadius: "6px", width: 500 }}
            color="secondary"
            size="xl"
          >
            ОСТАВИТЬ ЗАЯВКУ
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FormInvestments;
