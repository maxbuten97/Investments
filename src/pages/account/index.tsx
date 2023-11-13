import HeaderAccount from "@/components/AccountComponents/HeaderAccount/HeaderAccount";
import s from "./AccountPage.module.scss";
import FooterAccount from "@/components/AccountComponents/FooterAccount/FooterAccount";
import "../../app/globals.scss";
import CardProfile from "@/components/AccountComponents/CardProfile/CardProfile";
import NavCardAccount from "@/components/AccountComponents/HomeAccount/NavCardAccount/NavCardAccount";
import ProjectsAccount from "@/components/AccountComponents/HomeAccount/ProjectsAccount/ProjectsAccount";
import VirtualAccount from "@/components/AccountComponents/HomeAccount/VirtualAccount/VirtualAccount";
import { Pagination } from "@nextui-org/react";
const page = () => {
  return (
    <div className={s.home}>
      <div className={s.background}></div>
      <div className={s.cardProfile}>
        <CardProfile />
      </div>
      <div className={s.container}>
        <div className={s.container_for_content}>
          <div className={s.header}>
            <HeaderAccount />
          </div>
          <div className={s.content}>
            <NavCardAccount />
            <div className={s.header_projects}>
              <div className={s.title}>ПРОЕКТЫ &gt;</div>
              <div className={s.pagination}>
                <Pagination
                  bordered
                  rounded
                  total={2}
                  initialPage={6}
                  onlyDots
                />
              </div>
            </div>
            <ProjectsAccount />
            <VirtualAccount />
          </div>
        </div>
        <div className={s.footer}>
          <FooterAccount />
        </div>
      </div>
    </div>
  );
};

export default page;
