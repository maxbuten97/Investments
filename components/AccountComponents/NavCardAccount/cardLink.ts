interface ICardLink {
  id: string;
  title: string;
  text: string;
  src: string;
}

export const cardLinks: ICardLink[] = [
  {
    id: "1",
    title: "Виртуальный счёт",
    text: "Войти в кошелек участника",
    src: "/",
  },
  {
    id: "2",
    title: "Мои проекты",
    text: "Действующие и закрытые проекты",
    src: "/",
  },
  {
    id: "3",
    title: "Личный кабинет",
    text: "Инвестору предлагается приобрести обыкновенные акции АО «Морето» ",
    src: "/",
  },
];
