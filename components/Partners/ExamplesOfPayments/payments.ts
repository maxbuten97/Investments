/** Интерфейс для карточек с примером расчёта */
export interface IPaymentItem {
  id: string;
  image: string;
  text: string;
  boldText: string;
}
/** Список карточек с примером расчёта вознаграждения */
export const payments: IPaymentItem[] = [
  {
    id: "1",
    image: "pinkArrow",
    text: "Инвестор вложил",
    boldText: "5 млн. руб.",
  },
  {
    id: "2",
    image: "union",
    text: "Заплатил комиссию инвест. платформе 2% от суммы",
    boldText: "-100 000 руб.",
  },
  {
    id: "3",
    image: "diamond",
    text: "Партнер получил вознаграждение в размере ",
    boldText: "100 000 * 20% = 20 000 руб.",
  },
];
