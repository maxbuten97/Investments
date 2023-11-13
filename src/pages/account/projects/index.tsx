"use client";
import HeaderAccount from "@/components/AccountComponents/HeaderAccount/HeaderAccount";
import s from "./ProjectsPage.module.scss";
import FooterAccount from "@/components/AccountComponents/FooterAccount/FooterAccount";
import "../../../app/globals.scss";
import CardProfile from "@/components/AccountComponents/CardProfile/CardProfile";
import { cases } from "@/components/Companies/Cases/case";
import { Grid, Card, Row, Button } from "@nextui-org/react";
import { PATH } from "shared/assets";
import ProjectsAccount from "@/components/AccountComponents/HomeAccount/ProjectsAccount/ProjectsAccount";

const page = () => {
  return (
    <div className={s.home}>
      <div className={s.background}></div>
      <div className={s.cardProfile}>
        <CardProfile />
      </div>
      <div className={s.container}>
        <div className={s.container_for_content}>
          <div className={s.header}>
            <HeaderAccount />
          </div>
          <div className={s.content}>
            <div className={s.title}>ПРОЕКТЫ</div>
            <div className={s.descr}>
              В разделе «Привлечение инвестиций» размещаются проекты, которые
              проходят стадию Привлечения инвестиций. Вы можете изучить
              детальную информацию по проекту, принять решение об инвестировании
              и инвестировать на Платформе.
            </div>
            <div className={s.cases}>
              <Grid.Container gap={3} justify="flex-start" css={{ p: 0 }}>
                {cases
                  .map((item) => (
                    <Grid sm={4} key={item.id}>
                      <Card isPressable>
                        <Card.Body css={{ p: 0 }}>
                          <Card.Image
                            src={`${PATH}${item.img}`}
                            css={{ borderRadius: "10px 10px 0 0" }}
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
            <div className={s.collecting}>
              <div className={s.title_collect}>Сбор предварительных заявок</div>
              <div className={s.descr}>
                В разделе «Сбор предварительных заявок» размещаются проекты,
                которые проходят стадию предварительной оценки. Размещаемая
                информация по проектам является предварительной и ее главная
                цель - оценка базового спроса со стороны инвесторов на саму идею
                проекта, без возможности инвестирования.
              </div>
              <div className={s.projects}>
                <ProjectsAccount />
              </div>
            </div>
          </div>
        </div>
        <div className={s.footer}>
          <FooterAccount />
        </div>
      </div>
    </div>
  );
};

export default page;
