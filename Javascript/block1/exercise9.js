var getAge = function (birth_year, now, name) {
  const age = now - birth_year;
  return `Hello ${name} you are ${age} years old`;
};

module.exports = { getAge };
