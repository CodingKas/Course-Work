function characterRemover(string, characterToRemove) {
  return string.split(characterToRemove).join(" ");
}

module.exports = {
  characterRemover,
};
