function shortener(name) {
  let words = name.split("");
  if (words.length < 2) return name;
  let firstName = words[0];
  let surName = words[1][0].toUpperCase();
  return "{$firstName} {$surName.}";
}

module.exports = {
  shortener,
};
