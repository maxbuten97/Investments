import Image from "next/image";
import s from "./DetailedPerson.module.scss";
import { PATH } from "shared/assets";
import { persons } from "@/app/team/persons";

const DetailedPerson = () => {
  return (
    <div className={s.DetailedPerson}>
      <div className={s.cards}>
        {persons.map((person) => {
          return (
            <div className={s.card} key={person.id}>
              <div className={s.title}>
                <div className={s.name}>{person.name}</div>
                <div className={s.description}>{person.descr}</div>
              </div>
              <div className={s.characteristic}>
                <div className={s.avatar}>
                  <Image
                    className={s.img}
                    src={`${PATH}${person.src}`}
                    alt={""}
                    width={365}
                    height={380}
                  />
                </div>
                <ul className={s.list_char}>
                  {person.characteristic.map((text, i) => {
                    return (
                      <li className={s.item_char} key={i}>
                        {text.text}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DetailedPerson;
