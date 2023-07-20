import { FC } from "react";
import s from "./Icon.module.scss";

import {
  Tel,
  Navigation,
  Shield,
  Notes,
  Star,
  Checkmark,
  Label,
  Wave1,
  Wave2,
} from "../../public/svg/index";
type IconComponentProps = { name: string; className?: string };
type IconTypes = { [name: string]: ReactSVGComponent };

const iconTypes: IconTypes = {
  tel: Tel,
  navigation: Navigation,
  shield: Shield,
  notes: Notes,
  star: Star,
  checkmark: Checkmark,
  label: Label,
  wave1: Wave1,
  wave2: Wave2,
};

const Icon: FC<IconComponentProps> = ({ name, className, ...props }) => {
  const classNames = [s.icon];
  className && classNames.push(className);

  let Icon = iconTypes[name];
  return !!Icon && <Icon className={classNames.join(" ")} {...props} />;
};

export default Icon;
