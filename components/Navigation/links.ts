/** Интерфейс Навигации*/
interface INavigation {
  id: string;
  href: string;
  text: string;
}
/**Навигация*/
export const links: INavigation[] = [
  { id: "1", href: "/", text: "Главная" },
  { id: "2", href: "/investors", text: "Инвесторам" },
  { id: "3", href: "/companies", text: "Компаниям" },
  { id: "4", href: "/partners", text: "Партнерам" },
  { id: "5", href: "/cases", text: "Кейсы" },
  { id: "6", href: "/team", text: "Команда" },
  { id: "7", href: "/blog", text: "Блог" },
  { id: "8", href: "/contacts", text: "Контакты" },
];
