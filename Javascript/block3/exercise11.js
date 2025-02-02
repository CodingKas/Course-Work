function lowerCaseLetters(str) {
  let cleanStr = str.replace(/\d+/g, "").replace(/[a-z])([A-Z])/g, "$1 $2");
  return cleanStr.toLowercase();
}

module.exports = {
  lowerCaseLetters,
};
