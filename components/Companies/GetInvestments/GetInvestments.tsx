"use client";
import { Button, Checkbox, Input, Modal, Row, Text } from "@nextui-org/react";
import s from "./GetInvestments.module.scss";
import { answers } from "./answers";
import React from "react";

const GetInvestments = () => {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  return (
    <div className={s.GetInvestments}>
      <div className={s.container}>
        <div className={s.title}>КАК ПОЛУЧИТЬ ИНВЕСТИЦИИ?</div>
        <div className={s.answers_block}>
          {answers
            .map((answer) => {
              return (
                <div className={s.answer} key={answer.id}>
                  <div className={s.answer_text}>
                    <span className={s.num}>{answer.num}</span> {answer.text}
                  </div>{" "}
                  <div className={s.answer_subtext}>{answer.subtext}</div>
                  <Button
                    className={s.application}
                    css={{
                      maxWidth: "15%",
                      backgroundColor: "$accents4",
                      color: "#000",
                    }}
                    onPress={handler}
                  >
                    {" "}
                    {answer.application}
                    <Modal
                      aria-labelledby="modal-title"
                      width="30%"
                      open={visible}
                      onClose={closeHandler}
                      css={{ padding: "$15" }}
                    >
                      <Modal.Header className={s.modal_header}>
                        <Text id="modal-title" size={30}>
                          Оставьте заявку на получение инвестиций
                          <Text b size={15}>
                            Наши специалисты помогут вам оценить ваш проект
                          </Text>
                        </Text>
                      </Modal.Header>
                      <Modal.Body>
                        <Input
                          clearable
                          bordered
                          fullWidth
                          color="primary"
                          size="xl"
                          placeholder="Имя"
                          css={{ width: "90%", margin: "10px auto" }}
                        />

                        <Input
                          clearable
                          bordered
                          fullWidth
                          color="primary"
                          size="xl"
                          placeholder="Телефон"
                          css={{ width: "90%", margin: "10px auto" }}
                        />
                        <Input
                          clearable
                          bordered
                          fullWidth
                          color="primary"
                          size="xl"
                          placeholder="Название проекта"
                          css={{ width: "90%", margin: "10px auto" }}
                        />
                      </Modal.Body>
                      <Modal.Footer>
                        <Button
                          size="lg"
                          css={{ width: "90%", margin: "10px auto" }}
                          onPress={closeHandler}
                        >
                          Отправить
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </Button>
                </div>
              );
            })
            .slice(0, 1)}
          {answers
            .map((answer) => {
              return (
                <div className={s.answer} key={answer.id}>
                  <div className={s.answer_text}>
                    <span className={s.num}>{answer.num}</span> {answer.text}
                  </div>{" "}
                  <div className={s.answer_subtext}>{answer.subtext}</div>
                </div>
              );
            })
            .slice(1, 7)}
        </div>
        <div className={s.invest_btn}>
          <Button
            color="secondary"
            css={{ padding: "$11 $15", borderRadius: "$xs" }}
            onPress={handler}
          >
            ПОЛУЧИТЬ ИНВЕСТИЦИИ
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GetInvestments;
