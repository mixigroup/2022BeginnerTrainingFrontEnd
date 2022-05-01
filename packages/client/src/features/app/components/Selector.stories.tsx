import { Selector } from "./Selector";

const options = [
  {
    label: "項目1",
    value: "値1",
  },
  {
    label: "項目2",
    value: "値2",
  },
  {
    label: "項目3",
    value: "値3",
  },
  {
    label: "項目4",
    value: "値4",
  },
];

export const Base = () => {
  return <Selector options={options} />;
};
