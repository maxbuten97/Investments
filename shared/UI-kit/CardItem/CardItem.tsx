import React from "react";
import { Card, Row, Text, Button } from "@nextui-org/react";
import s from "./CardItem.module.scss";
import { PATH } from "@/components/Header/Header";

const CardItem = () => {
  return (
    <div className={s.CardItem}>
      <Card isPressable>
        <Card.Body css={{ p: 10 }}>
          <Card.Image
            src={`${PATH}project.png`}
            css={{ borderRadius: "10px" }}
            objectFit="cover"
            width="100%"
            height={180}
            alt={"Project"}
          />
        </Card.Body>
        <Card.Footer css={{ justifyItems: "flex-start" }}>
          <Row
            css={{ flexDirection: "column" }}
            wrap="wrap"
            justify="space-between"
          >
            <Text
              b
              css={{
                paddingLeft: 15,
                fontSize: 20,
                letterSpacing: 0.6,
                fontWeight: 700,
              }}
            >
              АО МОРЕТО
            </Text>
            <Text
              css={{
                paddingTop: 15,
                paddingLeft: 15,
                color: "$accents7",
                fontWeight: "$semibold",
                fontSize: "$md",
                width: "90%",
              }}
            >
              Компания занимается продажей и продвижением товаров на
              маркетплейсах.
            </Text>
            <div className={s.collect}>
              Сбор средств: <span className={s.already}>1 500 000 собрано</span>
            </div>
            <Button
              className={s.btn}
              css={{
                borderRadius: "6px",
                width: "95%",
              }}
              color="secondary"
              size="xl"
            >
              ПОСМОТРЕТЬ КЕЙС
            </Button>
          </Row>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default CardItem;
