import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowLeft,
  faArrowRight,
  faCircleXmark,
  faMoon,
  faSearch,
  faSun,
} from "@fortawesome/free-solid-svg-icons";

export type IconName =
  | "moon"
  | "sun"
  | "search"
  | "circleXMark"
  | "arrowLeft"
  | "arrowRight";

const enabledIcons = [
  faMoon,
  faSun,
  faSearch,
  faCircleXmark,
  faArrowLeft,
  faArrowRight,
];

export const enableIcon = () => {
  library.add(...enabledIcons);
};
