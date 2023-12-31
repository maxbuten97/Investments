/**Интерфейс для блока с ответами*/
interface IAnswer {
  id: string;
  num: string;
  text: string;
  subtext: string;
  application?: string;
}
/**Список ответов на странице "Компаниям"*/
export const answers: IAnswer[] = [
  {
    id: "1",
    num: "1.",
    text: "ОПРЕДЕЛЯЕМ ПАРАМЕТРЫ БИЗНЕС-ПРОЕКТА",
    subtext:
      "Оцениваем сам проект и определяем, подходит ли вашей компании размещение на платформе.",
    application: "Оставить заявку >",
  },
  {
    id: "2",
    num: "2.",
    text: "ПОМОГАЕМ С РЕГИСТРАЦИЕЙ АО",
    subtext:
      "Поможем составить всю документальную базу так, чтобы максимально снизить издержки и сделать привлечение инвестиций на платформе максимально выгодным.",
  },
  {
    id: "3",
    num: "3.",
    text: "ПОДГОТАВЛИВАЕМ КОМПАНИЮ К РАЗМЕЩЕНИЮ НА ПЛАТФОРМЕ",
    subtext:
      "Помогаем с подготовкой и получением всех необходимых для размещения документов: инвестиционной презентации, инвестиционной стратегии, финансовой модели проекта, аудиторского заключения и т.д.",
  },
  {
    id: "4",
    num: "4.",
    text: "РЕГИСТРИРУЕМ ВЫПУСК АКЦИЙ",
    subtext:
      "Обеспечиваем оптимальные условия для наших клиентов при регистрации акций через наших партнеров.",
  },
  {
    id: "5",
    num: "5.",
    text: "	РАЗМЕЩАЕМ КОМПАНИЮ НА ПЛАТФОРМЕ",
    subtext:
      "На этом этапе карточка с информацией о вашей компании появляется на инвестиционной платформе. Ваш потенциальный инвестор теперь может узнать информацию о проекте и выбрать вашу компанию.",
  },
  {
    id: "6",
    num: "6.",
    text: "ИЩЕМ ИНВЕСТОРОВ",
    subtext:
      "Помогаем с маркетинговой упаковкой проекта, настройкой рекламы и привлечением инвесторов в проект. Рассылаем информацию о проекте по нашей базе инвесторов.",
  },
  {
    id: "7",
    num: "7.",
    text: "ПОЛУЧАЕТЕ ИНВЕСТИЦИИ",
    subtext:
      "Когда собрана полная сумма инвестиционного предложения, получаете инвестиции для развития своего бизнеса.",
  },
];
