var i = 1;
function firstLoop() {
  for (; i <= 10; i++) {
    console.log(i);
  }
  return i;
}

module.exports = {
  firstLoop,
  i,
};
