export const numGenerator = function (from, to, interval) {
  let numbers = [];
  if (from >= 10) {
    for (let i = from; i <= to; i++) {
      if (i % 10 === 0) {
        numbers.push(i);
      }
    }
  } else {
    numbers.push("ggggg");
  }
  return numbers;
};
