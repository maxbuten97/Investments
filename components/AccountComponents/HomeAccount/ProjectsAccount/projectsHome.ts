/**Интерфейс для карточек на странице Cases*/
interface IProjectsAccount {
  id: string;
  title: string;
  img: string;
  typeInvest: string;
  text: string;
  collect: string;
  already: string;
  reserve: string;
  progress: number;
}
/**Список карточек на странице Cases*/
export const projectsAccount: IProjectsAccount[] = [
  {
    id: "1",
    title: `АО "Реалист"`,
    img: `realist.png`,
    typeInvest: `Размещение обыкновенных акций`,
    text: "Инвестору предлагается приобрести акции обыкновенные АО «Реалист-ГИ» в количестве 100 тыс. штук по цене 700 ",
    collect: "Сбор до 15.11.2022",
    already: "1 500 000 собрано",
    reserve: "Зарезервировано 250 000 ₽ из 25 000 000 ₽",
    progress: 10,
  },
  {
    id: "2",
    title: `АО "Лека"`,
    img: "leka.png",
    typeInvest: `Облигации`,
    text: "Инвестору предлагается приобрести акции обыкновенные АО «Реалист-ГИ» в количестве 100 тыс. штук по цене 700 ",
    collect: "Сбор до 15.11.2022",
    already: "1 500 000 собрано",
    reserve: "Зарезервировано 5 000 000 ₽ из 25 000 000 ₽",
    progress: 25,
  },
];
