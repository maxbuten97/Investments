"use client";

import { Grid, Card, Row, Pagination } from "@nextui-org/react";
import { PATH } from "shared/assets";
import s from "./Team.module.scss";
import { persons } from "./persons";

const page = () => {
  return (
    <div className={s.Team}>
      <div className={s.container}>
        {" "}
        <div className={s.content}>
          <div className={s.title}>Наша команда</div>
          <div className={s.cards}>
            <Grid.Container
              gap={2}
              justify="space-between"
              css={{ flexWrap: "nowrap" }}
            >
              {persons.map((person, index) => (
                <Grid sm={3} key={person.id} css={{ position: "relative" }}>
                  <Card isPressable>
                    <Card.Body css={{ p: 10, flex: "0 0 auto" }}>
                      <Card.Image
                        src={`${PATH}${person.src}`}
                        css={{
                          borderRadius: "10px",
                          backgroundColor: "rgba(225, 195, 255, 1)",
                        }}
                        objectFit="cover"
                        width="100%"
                        height={260}
                        alt={"pavel"}
                      />
                    </Card.Body>
                    <Card.Footer css={{ justifyItems: "flex-start" }}>
                      <Row
                        css={{ flexDirection: "column" }}
                        wrap="wrap"
                        justify="space-between"
                      >
                        <div className={s.title_card}>{person.name}</div>
                        <div className={s.time_reading}>{person.descr}</div>
                      </Row>
                    </Card.Footer>
                  </Card>
                </Grid>
              ))}
            </Grid.Container>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
