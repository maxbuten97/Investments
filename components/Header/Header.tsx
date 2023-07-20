"use client";

import s from "./Header.module.scss";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import Icon from "../IconComponent/Icon";
import { Modal, Text, Input, Row, Checkbox } from "@nextui-org/react";
import React from "react";

export const PATH = "/image/";

const Header = () => {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  return (
    <section className={s.Header}>
      <div className={s.container}>
        <div className={s.row}>
          <div className={s.image_wrap}>
            <Image
              src={`${PATH}logo.png`}
              alt={"Логотип"}
              width={182}
              height={44}
            />
          </div>
          <div className={s.callback_block}>
            <div className={s.tel_block}>
              <Link className={s.tel} href="/">
                +7 (918) 142-48-44
              </Link>
            </div>
            <div className={s.callback_btn}>
              <Button color="secondary">
                <Icon className={s.tel_icon} name="tel" />
                ЗАКАЗАТЬ ЗВОНОК
              </Button>
            </div>
            <div className={s.account}>
              <Button color="secondary" auto ghost onPress={handler}>
                ЛИЧНЫЙ КАБИНЕТ
              </Button>
              <Modal
                closeButton
                aria-labelledby="modal-title"
                open={visible}
                onClose={closeHandler}
              >
                <Modal.Header>
                  <Text id="modal-title" size={18}>
                    Welcome to
                    <Text b size={18}>
                      NextUI
                    </Text>
                  </Text>
                </Modal.Header>
                <Modal.Body>
                  <Input
                    clearable
                    bordered
                    fullWidth
                    color="primary"
                    size="lg"
                    placeholder="Email"
                    // contentLeft={<Mail fill="currentColor" />}
                  />
                  <Input
                    clearable
                    bordered
                    fullWidth
                    color="primary"
                    size="lg"
                    placeholder="Password"
                    // contentLeft={<Password fill="currentColor" />}
                  />
                  <Row justify="space-between">
                    <Checkbox>
                      <Text size={14}>Remember me</Text>
                    </Checkbox>
                    <Text size={14}>Forgot password?</Text>
                  </Row>
                </Modal.Body>
                <Modal.Footer>
                  <Button auto flat color="error" onPress={closeHandler}>
                    Close
                  </Button>
                  <Button auto onPress={closeHandler}>
                    Sign in
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
