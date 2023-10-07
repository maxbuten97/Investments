interface INavLinkAccount {
  id: string;
  link: string;
  src: string;
}

export const navLinkAccount: INavLinkAccount[] = [
  { id: "1", link: "кошелек", src: "/" },
  { id: "2", link: "портфель", src: "/" },
  { id: "3", link: "уведомления", src: "/" },
  { id: "4", link: "проекты", src: "/" },
];
