import { PATH } from "@/components/Header/Header";
import s from "./Visor.module.scss";
import Image from "next/image";
import Link from "next/link";
const Visor = () => {
  return (
    <div className={s.Visor}>
      <div className={s.container}>
        <div className={s.row}>
          <Link href={"/"}>
            <Image src={`${PATH}vk1.png`} alt={"vk"} width={64} height={64} />
          </Link>
          <Link href={"/"}>
            <Image src={`${PATH}tg.png`} alt={"tg"} width={64} height={64} />
          </Link>

          <div className={s.call_block}>
            <div className={s.text}>
              или свяжитесь с нами любым удобным способом:
            </div>
            <div className={s.tel}>+7 (918) 142 48-44</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Visor;
