/**Интерфейс для карточек на странице Cases*/
interface ICaseCard {
  id: string;
  title: string;
  img: string;
  text: string;
  collect: string;
  already: string;
}
/**Список карточек на странице Cases*/
export const cases: ICaseCard[] = [
  {
    id: "1",
    title: `АО "МОРЕТО"`,
    img: `project.png`,
    text: `Компания занимается продажей и продвижением товаров на маркетплейсах.`,
    collect: "Сбор средств:",
    already: "1 500 000 собрано",
  },
  {
    id: "2",
    title: `АО "МОРЕТО"`,
    img: "graphics.png",
    text: `Компания занимается продажей и продвижением товаров на маркетплейсах.`,
    collect: "Сбор средств:",
    already: "1 500 000 собрано",
  },
  {
    id: "3",
    title: `АО "МОРЕТО"`,
    img: "ozon.png",
    text: `Компания занимается продажей и продвижением товаров на маркетплейсах.`,
    collect: "Сбор средств:",
    already: "1 500 000 собрано",
  },
  {
    id: "4",
    title: `АО "МОРЕТО"`,
    img: "project.png",
    text: `Компания занимается продажей и продвижением товаров на маркетплейсах.`,
    collect: "Сбор средств:",
    already: "1 500 000 собрано",
  },
  {
    id: "5",
    title: `АО "МОРЕТО"`,
    img: "project.png",
    text: `Компания занимается продажей и продвижением товаров на маркетплейсах.`,
    collect: "Сбор средств:",
    already: "1 500 000 собрано",
  },
  {
    id: "6",
    title: `АО "МОРЕТО"`,
    img: "project.png",
    text: `Компания занимается продажей и продвижением товаров на маркетплейсах.`,
    collect: "Сбор средств:",
    already: "1 500 000 собрано",
  },
];
