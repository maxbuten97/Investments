export interface IQuestion {
  id: string;
  title: string;
  text: string;
}

export const questions: IQuestion[] = [
  {
    id: "1",
    title: "Я выбрал акции на платформе как их оплатить?",
    text: "Инвестиционная платформа дает возможность провести оплату акций в полностью в режиме онлайн. Вам нужно зайти на платформу нажать кнопку пополнить кошелек. На выбор у вас будет 2 способа пополнения СБП (система быстрых платежей) и пополнение счета по реквизитам. (вы можете скачать сформировать счет, скачать его и оплатить)",
  },
  {
    id: "2",
    title: "Как узнать какая компания является регистратором?",
    text: "Данные о том кто ведет реестр акционеров конкретной компании содержатся в выписке из ЕГРЮЛ. Регистратор компании - АО ВТБ Регистратор (государственная корпорация)",
  },
  {
    id: "3",
    title: "Как приобрести акции более чем на 600 000 Р.?",
    text: "По закону каждая платформа обязана ограничить возможность инвестировать физическим лицам более 600 тр (по мнению государства это мера защиты неопытных инвесторов).",
  },
  {
    id: "4",
    title: "Как я могу продать акции и по какой цене?",
    text: "Акции - один из наиболее ликвидных активов, их можно продавать, передавать в залог , распоряжаться иным способом и тд",
  },
  {
    id: "5",
    title: "Как будет меняться капитализация и кем она определяется?",
    text: "Капитализация - это рыночная стоимость компании, ее может определить либо независимый оценщик, либо если сама компания будет выкупать свои ценные бумаги по заданной цене , а инвесторы будут готовы продать по указанной цене акции - это будет свидетельствовать о капитализации компании.",
  },
  {
    id: "6",
    title: "Что будет если у компании не будет денег для выплаты дивидендов?",
    text: "Дивиденды платятся из прибыли и только и при ее наличии.  Но если по условиям инвестиционного предложения и акционерного соглашения компания обязана выкупить акции у акционеров при невыплате дивидендов, то акционер вправе через суд понудить компанию выкупить акции и тогда она будет отвечать по данному иску всеми своими активами (имуществом).",
  },
  {
    id: "7",
    title: "Что будет если инвестиционная платформа перестанет существовать?",
    text: "Все ценные бумаги всех эмитентов, размещенные на платформе хранятся у регистратора и прекращение деятельности платформы никак не нарушит права акционеров.",
  },
  {
    id: "8",
    title:
      "Я заключаю договор с платформой или компанией, которая привлекает инвестиции?",
    text: "Компании и инвесторы заключают договора друг с другом. Инвест. платформа является лишь инструментом для совершени сделок между ними.",
  },
  {
    id: "9",
    title:
      "Как подобные сделки и доходы регулируются в налоговой? Нужно ли мне сдавать какие-то документы?",
    text: "Finmuster не является налоговым агентом. Инвестор самостоятельно отчитывается в налоговую согласно законодательству и оплачивает налог с полученной прибыли.",
  },
];