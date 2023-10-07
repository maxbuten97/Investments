import HeaderAccount from "@/components/AccountComponents/HeaderAccount/HeaderAccount";
import s from "./AccountPage.module.scss";
import FooterAccount from "@/components/AccountComponents/FooterAccount/FooterAccount";
import "../../app/globals.scss";
import CardProfile from "@/components/AccountComponents/CardProfile/CardProfile";
import NavCardAccount from "@/components/AccountComponents/NavCardAccount/NavCardAccount";
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
