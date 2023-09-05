import { Button } from "@nextui-org/react";
import s from "./PartnersLink.module.scss";

const PartnersLink = () => {
  return (
    <div className={s.PartnersLink}>
      <div className={s.container}>
        <div className={s.content}>
          <div className={s.title}>
            Чтобы получить партнерскую ссылку для рекомендаций, необходимо
            зарегистрироваться на платформе в роли инвестора или эмитента
          </div>
          <div className={s.text}>
            После регистрации, она будет доступна в вашем личном кабинете.
          </div>
          <div className={s.btn}>
            <Button
              size={"xl"}
              css={{ backgroundColor: "white", color: "black" }}
            >
              Регистрация
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersLink;
