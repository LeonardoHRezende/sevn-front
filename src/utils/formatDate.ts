import dayjs from "dayjs";

export const formatDate = (date: Date) => {
  if (!date) {
    return '';
  }
  const formattedDate = dayjs(date).format('DD/MM/YYYY [às] HH[h]mm');
  return formattedDate;
};