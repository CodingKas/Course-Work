var howManyDays = function (birthYear, currentYear) {
  const daysLived = (currentYear - birthYear) * 365;
  return "You have lived for ${daysLived} days already!";
};
module.exports = {
  howManyDays,
};
