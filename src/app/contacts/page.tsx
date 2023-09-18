import CardContacts from "@/components/CardContacts/CardContacts";
import s from "./Contacts.module.scss";
import Image from "next/image";
import { PATH } from "shared/assets";

const page = () => {
  return (
    <div className={s.Contacts}>
      <div className={s.map}>
        <div className={s.img_wrap}>
          <Image
            className={s.map_img}
            src={`${PATH}map1.png`}
            alt={"map"}
            height={1058}
            width={1963}
          />
          <div className={s.map_contacts}>
            <CardContacts />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
