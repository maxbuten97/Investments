import { Button } from "@nextui-org/react";
import s from "./Stages.module.scss";
import { stages } from "./stage";

const Stages = () => {
  return (
    <div className={s.Stages}>
      <div className={s.row}>
        <div className={s.title}>КАК ПРОХОДЯТ СДЕЛКИ?</div>
        <div className={s.content}>
          {stages.map((stage) => {
            return (
              <div className={s.block} key={stage.id}>
                <div className={s.num}>{stage.num}</div>
                <div className={s.content_title}>{stage.title}</div>
                <div className={s.text}>{stage.text}</div>
              </div>
            );
          })}
          <Button
            color="secondary"
            css={{
              fontSize: "17px",
              borderRadius: "$sm",
              padding: "$11",
              margin: "0 auto",
              width: "320px",
            }}
          >
            НАЧАТЬ ИНВЕСТИРОВАТЬ
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Stages;
