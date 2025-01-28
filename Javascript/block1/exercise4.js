var howManyTeas = function (age, end_age, teas_day) {
  const yearsLeft = end_age - age;
  const daysLeft = yearsLeft * 365;
  return daysLeft * teas_day;
};

module.exports = {
  howManyTeas,
};
