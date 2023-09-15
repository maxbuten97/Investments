/**Интерфейс для карточек с новостями */
interface IblogCard {
  id: string;
  src: string;
  title: string;
  timeReading: string;
  date: string;
  mark: string;
}
/** Интерфейс для типов новостей */
interface ITitleBlog {
  id: string;
  name: string;
}
/** Список типов новостей */
export const titleBlog: ITitleBlog[] = [
  { id: "1", name: "Все" },
  { id: "2", name: "Новости" },
  { id: "3", name: "Компаниям" },
  { id: "4", name: "Инвесторам" },
];

/**Список карточек новостей для Блога */
export const blogCards: IblogCard[] = [
  {
    id: "1",
    src: "cent.png",
    title: "Успешное размещение компании по продажам МОРЕТО",
    timeReading: "Время прочтения: 2 минуты",
    date: "13.09.2022",
    mark: "Новости",
  },
  {
    id: "1",
    src: "cent.png",
    title: "Успешное размещение компании по продажам МОРЕТО",
    timeReading: "Время прочтения: 2 минуты",
    date: "13.09.2022",
    mark: "Новости",
  },
  {
    id: "1",
    src: "cent.png",
    title: "Успешное размещение компании по продажам МОРЕТО",
    timeReading: "Время прочтения: 2 минуты",
    date: "13.09.2022",
    mark: "Блог",
  },
  {
    id: "1",
    src: "cent.png",
    title: "Успешное размещение компании по продажам МОРЕТО",
    timeReading: "Время прочтения: 2 минуты",
    date: "13.09.2022",
    mark: "Компаниям",
  },
  {
    id: "1",
    src: "cent.png",
    title: "Успешное размещение компании по продажам МОРЕТО",
    timeReading: "Время прочтения: 2 минуты",
    date: "13.09.2022",
    mark: "Инвесторам",
  },
  {
    id: "1",
    src: "cent.png",
    title: "Успешное размещение компании по продажам МОРЕТО",
    timeReading: "Время прочтения: 2 минуты",
    date: "13.09.2022",
    mark: "Новости",
  },
];
