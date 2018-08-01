import moment from 'moment';

export const getDateLimit = years => {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear() - years;

  return moment({ year, month, day });
};