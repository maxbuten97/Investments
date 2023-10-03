"use client";

import s from "./Cases.module.scss";
import { Button, Card, Grid, Pagination, Row } from "@nextui-org/react";
import { cases } from "@/components/Companies/Cases/case";
import { PATH } from "shared/assets";

const Cases = () => {
  return (
    <div className={s.Cases}>
      <div className={s.container}>
        <div className={s.content}>
          <div className={s.title}>Кейсы</div>
          <Grid.Container gap={3} justify="flex-start">
            {cases
              .map((item, index) => (
                <Grid xs={4} sm={4} key={item.id}>
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
                        <div className={s.title_card}>{item.title}</div>
                        <div className={s.text}>{item.text}</div>
                        <div className={s.collect}>
                          {item.collect}
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
              ))
              .splice(0, 3)}
          </Grid.Container>
        </div>
        <div className={s.pagination}>
          <Pagination total={3} initialPage={1} />
        </div>
      </div>
    </div>
  );
};

export default Cases;
