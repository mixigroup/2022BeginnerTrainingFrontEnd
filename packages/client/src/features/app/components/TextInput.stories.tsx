import { TextInput } from "./TextInput";

export const Base = () => {
  return (
    <TextInput
      placeholder="テキスト"
      breakpoint={{
        size: {
          lg: "default",
          md: "default",
          sm: "small",
        },
      }}
    />
  );
};
