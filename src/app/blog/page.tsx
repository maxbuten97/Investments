"use client";

import { cases } from "@/components/Companies/Cases/case";
import { Grid, Card, Row, Button, Pagination } from "@nextui-org/react";
import { PATH } from "shared/assets";
import s from "./Blog.module.scss";
import { blogCards, titleBlog } from "./blogCards";

const page = () => {
  return (
    <div className={s.Blog}>
      <div className={s.container}>
        {" "}
        <div className={s.content}>
          <div className={s.titles}>
            {titleBlog.map((title) => {
              return (
                <div className={s.title} key={title.id}>
                  {title.name}
                </div>
              );
            })}
          </div>
          <Grid.Container gap={3} justify="flex-start">
            {blogCards.map((item, index) => (
              <Grid sm={4} key={item.id} css={{ position: "relative" }}>
                <Card isPressable>
                  <Card.Body css={{ p: 10, flex: "0 0 auto" }}>
                    <Card.Image
                      src={`${PATH}${item.src}`}
                      css={{ borderRadius: "10px" }}
                      objectFit="cover"
                      width="100%"
                      height={260}
                      alt={item.title}
                    />
                  </Card.Body>
                  <Card.Footer css={{ justifyItems: "flex-start" }}>
                    <Row
                      css={{ flexDirection: "column" }}
                      wrap="wrap"
                      justify="space-between"
                    >
                      <div className={s.mark}>{item.mark}</div>
                      <div className={s.title_card}>{item.title}</div>
                      <div className={s.time_reading}>{item.timeReading}</div>
                      <div className={s.date}>{item.date}</div>
                    </Row>
                  </Card.Footer>
                </Card>
              </Grid>
            ))}
          </Grid.Container>
        </div>
        <div className={s.pagination}>
          <Pagination total={3} initialPage={1} />
        </div>
      </div>
    </div>
  );
};

export default page;
