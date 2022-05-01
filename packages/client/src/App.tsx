import { FC } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { setAppElement } from "react-modal";
import { useThemeClass } from "./features/app/modules/themeHooks";
import { enableIcon } from "./lib/icon";
import { globalStyles } from "./lib/style";
import { Router } from "./Router";

enableIcon();
globalStyles();
setAppElement("#root");

export const App: FC = () => {
  const className = useThemeClass();

  return (
    <HelmetProvider>
      <Helmet title="コミュニティ" htmlAttributes={{ class: className }} />
      <Router />
    </HelmetProvider>
  );
};
