import React, { FC } from "react";

interface Props {
  date: string;
  className?: string;
}

const DateComponent: FC<Props> = ({ date, className }) => {
  const formatDate = (date) => {
    const formatedDate = new Date(date);

    let day = formatedDate.getDay();
    let month = formatedDate.getMonth();
    const year = formatedDate.getFullYear();

    day = Number(day + formatDay(day));
    month = Number(formatedDate.toLocaleString("en-us", { month: "long" }));

    return month + " " + day + ", " + year;
  };

  const formatDay = (day) => {
    switch (day) {
      case 1:
      case 21:
      case 31:
        return "st";
      case 2:
      case 22:
        return "nd";
      case 3:
      case 23:
        return "rd";
      default:
        return "th";
    }
  };

  return <p className={"mt-4 " + className}>{formatDate(date)}</p>;
};

export default DateComponent;
