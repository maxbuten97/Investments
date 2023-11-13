"use client";
import s from "./ProjectsAccount.module.scss";
import {
  Button,
  Card,
  Grid,
  Pagination,
  Progress,
  Row,
} from "@nextui-org/react";
import { PATH } from "shared/assets";
import { projectsAccount } from "./projectsHome";

const ProjectsAccount = () => {
  return (
    <div className={s.ProjectsAccount}>
      <Grid.Container css={{ p: 0 }} gap={2} justify="space-between">
        {projectsAccount.map((item, index) => (
          <Grid xs={6} key={item.id}>
            <Card>
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
                  <div className={s.typeInvest}>{item.typeInvest}</div>
                  <div className={s.text}>{item.text}</div>
                  <div className={s.collect}>{item.collect}</div>
                  <div className={s.reserve}>
                    <Progress
                      css={{ backgroundColor: "rgba(236, 218, 255, 1)" }}
                      color="secondary"
                      value={item.progress}
                    />
                    <span className={s.already}>{item.reserve}</span>
                  </div>

                  <div className={s.footer_btn}>
                    <Button
                      className={s.btn}
                      css={{
                        borderRadius: "12px",
                        width: "100px",
                      }}
                      color="secondary"
                      size="xl"
                    >
                      ИНВЕСТИРОВАТЬ
                    </Button>
                    <div className={s.footer_text}>Подробнее</div>
                  </div>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>
        ))}
      </Grid.Container>
    </div>
  );
};

export default ProjectsAccount;
