"use client";
import { Grid, Card, Row, Text, Button } from "@nextui-org/react";
import s from "./Cases.module.scss";
import { PATH } from "@/components/Header/Header";

const Cases = () => {
  const list = [
    {
      title: `АО "МОРЕТО"`,
      img: `project.png`,
      text: `Компания занимается продажей и продвижением товаров на маркетплейсах.`,
      collect: "Сбор средств:",
      already: "1 500 000 собрано",
    },
    {
      title: `АО "МОРЕТО"`,
      img: "project.png",
      text: `Компания занимается продажей и продвижением товаров на маркетплейсах.`,
      collect: "Сбор средств:",
      already: "1 500 000 собрано",
    },
    {
      title: `АО "МОРЕТО"`,
      img: "project.png",
      text: `Компания занимается продажей и продвижением товаров на маркетплейсах.`,
      collect: "Сбор средств:",
      already: "1 500 000 собрано",
    },
    {
      title: `АО "МОРЕТО"`,
      img: "project.png",
      text: `Компания занимается продажей и продвижением товаров на маркетплейсах.`,
      collect: "Сбор средств:",
      already: "1 500 000 собрано",
    },
    {
      title: `АО "МОРЕТО"`,
      img: "project.png",
      text: `Компания занимается продажей и продвижением товаров на маркетплейсах.`,
      collect: "Сбор средств:",
      already: "1 500 000 собрано",
    },
    {
      title: `АО "МОРЕТО"`,
      img: "project.png",
      text: `Компания занимается продажей и продвижением товаров на маркетплейсах.`,
      collect: "Сбор средств:",
      already: "1 500 000 собрано",
    },
  ];
  return (
    <div className={s.Cases}>
      <div className={s.container}>
        <div className={s.list_item}>
          <Grid.Container gap={3} justify="flex-start">
            {list.map((item, index) => (
              <Grid xs={4} sm={4} key={index}>
                <Card isPressable>
                  <Card.Body css={{ p: 10 }}>
                    <Card.Image
                      src={`${PATH}${item.img}`}
                      css={{ borderRadius: "10px" }}
                      objectFit="cover"
                      width="100%"
                      height={180}
                      alt={item.title}
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
                        {item.title}
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
                        {item.text}
                      </Text>
                      <div className={s.collect}>
                        {item.collect}{" "}
                        <span className={s.already}>{item.already}</span>
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
              </Grid>
            ))}
          </Grid.Container>
        </div>
      </div>
    </div>
  );
};

export default Cases;
