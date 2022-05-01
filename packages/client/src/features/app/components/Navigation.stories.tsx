import { Navigation } from "./Navigation";

export const Base = () => {
  return (
    <Navigation
      variant="light"
      breakpoints={{
        layouts: {
          lg: "vertical",
          md: "vertical",
          sm: "horizontal",
        },
      }}
    />
  );
};
