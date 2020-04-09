import {MONTH_NAMES} from "./const.js";

const castTimeFormat = (value) => {
  return value < 10 ? `0${value}` : String(value);
};

const formatTime = (date) => {
  const hours = castTimeFormat(date.getHours() % 12);
  const minutes = castTimeFormat(date.getMinutes());

  return `${hours}:${minutes}`;
};

export const formatDateTime = (date) => {
  const isDateShowing = !!date;
  return {
    date: isDateShowing ? `${date.getDate()} ${MONTH_NAMES[date.getMonth()]}` : ``,
    time: isDateShowing ? formatTime(date) : ``,
  };
};

export const formatTimeIndicators = (date, repeatingDays) => {
  const isRepeatingTask = Object.values(repeatingDays).some(Boolean);
  const isExpired = date instanceof Date && date < Date.now();
  const isDateShowing = !!date;
  return {
    repeatClass: isRepeatingTask ? `card--repeat` : ``,
    deadlineClass: isExpired ? `card--deadline` : ``,
    isRepeatingTask,
    isDateShowing,
  };
};

export const formatTaskButtons = (isArchive, isFavorite) => {
  return {
    archiveButtonInactiveClass: isArchive ? `` : `card__btn--disabled`,
    favoriteButtonInactiveClass: isFavorite ? `` : `card__btn--disabled`,
  };
};
