const getDay = (date) => {
  const Days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const newDate = new Date(date);
  console.log(Days[newDate.getDay()]);
};
getDay("10/11/2009");
