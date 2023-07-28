"use client";
import { Grid, Collapse, Text } from "@nextui-org/react";
import s from "./QuestionsInvestors.module.scss";
import { questions } from "./questionsForInvestors";

const QuestionsInvestors = () => {
  return (
    <div className={s.QuestionsInvestors}>
      <div className={s.container}>
        <div className={s.row}>
          <div className={s.title}>ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ</div>
          <div className={s.answers_block}>
            {questions.map((question) => {
              return (
                <div className={s.question} key={question.id}>
                  <Grid.Container gap={0}>
                    <Grid>
                      <Collapse.Group animated={true}>
                        <Collapse title={question.title}>
                          <Text className={s.text} size={20}>
                            {question.text}
                          </Text>
                        </Collapse>
                      </Collapse.Group>
                    </Grid>
                  </Grid.Container>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionsInvestors;
