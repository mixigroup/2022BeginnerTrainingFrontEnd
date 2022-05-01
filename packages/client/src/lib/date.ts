import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);
dayjs.extend(timezone);

export const formatDate = ({
  date,
  format,
}: {
  date: Parameters<typeof dayjs>[0];
  format: string;
}) => {
  return dayjs(date).tz("Asia/Tokyo").format(format);
};
