"use client";
import dayjs from "dayjs";
import isoWeek from "dayjs/plugin/isoWeek";
import { styles } from "./DateBar.css";
import IconButton from "@/components/IconButton/IconButton";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
dayjs.extend(isoWeek);

type DateBoxProps = {
  date: Date | string;
};

const DateBar = ({ date }: DateBoxProps) => {
  const dayMonth = dayjs(date).format("DD.MM");
  const weekday = dayjs(date).format("dddd");
  return (
    <div className={styles.wrapper}>
      <IconButton icon={<LuChevronLeft />} variant="outlined" size="medium" />
      <span className={styles.date}>
        {dayMonth} {weekday}
      </span>
      <IconButton icon={<LuChevronRight />} variant="outlined" size="medium" />
    </div>
  );
};

export default DateBar;
