var arr = ["one", "two", "three", "four"];
function looper(array) {
  let count = 0;

  array.forEach(element, (index) => {
    console.log("index:${index}, element:${element}");
    count++;
  });
  return count;
}

module.exports = {
  looper,
  arr,
};
