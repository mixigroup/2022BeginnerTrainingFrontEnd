import type { FC, ReactNode } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { MemoryRouter } from "react-router-dom";
import { useThemeClass } from "../src/features/app/modules/themeHooks";
import { enableIcon } from "../src/lib/icon";
import { globalStyles } from "../src/lib/style";

globalStyles();
enableIcon();

export const Provider: FC<{ children: ReactNode }> = ({ children }) => {
  const className = useThemeClass();

  return (
    <HelmetProvider>
      <div id="modalEl" />
      <Helmet title="コミュニティ" htmlAttributes={{ class: className }} />
      <MemoryRouter>{children}</MemoryRouter>
    </HelmetProvider>
  );
};
