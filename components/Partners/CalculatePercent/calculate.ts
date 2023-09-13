/**Интерфейс для карточек с расчётами */
interface ICalculatePercent {
  id: string;
  num: string;
  calculate: string;
  text: string;
}
/** Список карточек с расчётами */
export const calculatePercents: ICalculatePercent[] = [
  {
    id: "1",
    num: "5",
    calculate: "100 000 ₽ x 5 % = 5 000 ₽",
    text: "Стоимость услуг для компании по сопровождению процесса упаковки иразмещения на платформе",
  },
  {
    id: "1",
    num: "10",
    calculate: "250 000 ₽ x 10 % = 25 000 ₽",
    text: "Сумма привлеченных средств для эмитента -5 млн.руб. * 5% комиссия эмитента в адрес платформы = 250 000 руб.",
  },
  {
    id: "1",
    num: "100",
    calculate: "30 000 ₽",
    text: "Итого",
  },
];
