var toCelsius = function (fahrenheit) {
  const celsius = Math.round((fahrenheit - 32) * (5 / 9));
  return celsius;
};
var toFahr = function (celsius) {
  const fahrenheit = Math.round(celsius * (9 / 5) + 32);
  return fahrenheit;
};

module.exports = {
  toCelsius,
  toFahr,
};
