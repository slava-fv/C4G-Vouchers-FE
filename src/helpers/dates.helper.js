import moment from "moment";

export const getUTCDatesTimes = (arr) => {
  const newArr = [];

  newArr[0] = moment(arr[0], "DD.MM.YYYY")
    .startOf("day")
    .utc()
    .format("DD.MM.YYYY HH:mm:ss");

  newArr[1] = moment(arr[1], "DD.MM.YYYY")
    .endOf("day")
    .utc()
    .format("DD.MM.YYYY HH:mm:ss");

  return newArr;
};
