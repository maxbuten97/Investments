interface INavLinkAccount {
  id: string;
  link: string;
  src: string;
}

export const navLinkAccount: INavLinkAccount[] = [
  { id: "1", link: "кошелек", src: "/account/wallet" },
  { id: "2", link: "портфель", src: "/account" },
  { id: "3", link: "уведомления", src: "/account" },
  { id: "4", link: "проекты", src: "/account/projects" },
];
