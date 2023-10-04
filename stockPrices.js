const stockPrices = [
  12, 56, 34, 1, 8, 5, 34, 90, 65, 34, 89, 23, 5, 1, 67, 34, 8, 3, 21, 54, 97,
  62, 54, 67,
];

console.log(stockPrices.length);

const getTime = (number) => {
  if (number === 0) {
    return "12am";
  } else if (number < 13 && number > 0) {
    return `${number}am`;
  } else {
    return `${number % 12}pm`;
  }
};

console.log(getTime(17));
