import {MONTH_NAMES} from "../const.js";
import moment from "moment";

export const formatTime = (date) => {
  return moment(date).format(`hh:mm`);
};

export const formatDate = (date) => {
  return moment(date).format(`DD MMMM`);
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
