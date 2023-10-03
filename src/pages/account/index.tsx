import HeaderAccount from "@/components/HeaderAccount/HeaderAccount";
import s from "./AccountPage.module.scss";
import FooterAccount from "@/components/FooterAccount/FooterAccount";
import "../../app/globals.scss";
import CardProfile from "@/components/CardProfile/CardProfile";
const page = () => {
  return (
    <div className={s.home}>
      <div className={s.background}></div>
      <div className={s.cardProfile}>
        <CardProfile />
      </div>
      <div className={s.container}>
        <div className={s.header}>
          <HeaderAccount />
        </div>
        <div className={s.content}>Здесь будут другие компоненты</div>
        <div className={s.footer}>
          <FooterAccount />
        </div>
      </div>
    </div>
  );
};

export default page;
