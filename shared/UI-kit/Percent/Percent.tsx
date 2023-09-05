"use client";
import s from "./Percent.module.scss";

interface IPercentProps {
  num: string;
  text?: string;
}

const Percent = ({ num, text }: IPercentProps) => {
  return (
    <>
      <div className={s.num_block}>
        <span className={s.num}>{num}</span>{" "}
        <span className={s.percent}>%</span>{" "}
      </div>
      <div className={s.text}>{text}</div>
    </>
  );
};

export default Percent;
