"use strict";
import { Grid, Collapse } from "@nextui-org/react";
import s from "./Answers.module.scss";
import { questions } from "./questions";
import { Text } from "@nextui-org/react";
const Answers = () => {
  return (
    <div className={s.Answers}>
      <div className={s.container}>
        <div className={s.row}>
          <div className={s.title}>Ответы на частые вопросы</div>
          <div className={s.answers_title}>
            <div className={s.investors}>ИНВЕСТОРАМ</div>
            <div className={s.companies}>КОМПАНИЯМ</div>
          </div>
          <div className={s.answers_block}>
            {questions
              .map((question) => {
                return (
                  <div className={s.question} key={question.id}>
                    <Grid.Container gap={0}>
                      <Grid>
                        <Collapse.Group animated={true}>
                          <Collapse title={question.title}>
                            <Text size={20}>{question.text}</Text>
                          </Collapse>
                        </Collapse.Group>
                      </Grid>
                    </Grid.Container>
                  </div>
                );
              })
              .slice(0, 5)}
            {questions
              .map((question) => {
                return (
                  <div className={s.question} key={question.id}>
                    <Grid.Container gap={0}>
                      <Grid>
                        <Collapse.Group animated={true}>
                          <Collapse title={question.title}>
                            <Text size={20}>{question.text}</Text>
                          </Collapse>
                        </Collapse.Group>
                      </Grid>
                    </Grid.Container>
                  </div>
                );
              })
              .slice(5, 9)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Answers;
