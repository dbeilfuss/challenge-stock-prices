/// These Stock Prices have been recorded on the hour, beginning at midnight.  Therefore stockPrices[0] is recorded at 12am and stockPrices[24] is recorded at 11pm.
const stockPrices = [
  12, 56, 34, 2, 8, 5, 34, 90, 65, 34, 89, 23, 5, 1, 67, 34, 98, 3, 21, 54, 77,
  62, 54, 167,
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

const greatestDifference = (numbersArray) => {
  let greatestDifference = {
    lowTime: "",
    highTime: "",
    lowPrice: 0,
    highPrice: 0,
    difference: 0,
  };

  for (let [time, price1] of numbersArray.entries()) {
    // console.log(`testing ${time}:00 for ${price1}`);
    for (let i = time + 1; i < numbersArray.length; i++) {
      let price2 = numbersArray[i];
      let difference = price2 - price1;
      //   console.log(`testing against ${i}:00 for ${price2}`);
      if (difference > greatestDifference.difference) {
        greatestDifference.lowTime = getTime(time);
        greatestDifference.highTime = getTime(i);
        greatestDifference.lowPrice = price1;
        greatestDifference.highPrice = price2;
        greatestDifference.difference = difference;
        console.log(`greater difference of ${difference} found!`);
        console.log(greatestDifference);
      }
    }
  }

  console.log(
    `The greatest difference was between ${greatestDifference.lowTime} and ${greatestDifference.highTime}.  In that time, the price went from $${greatestDifference.lowPrice} to $${greatestDifference.highPrice}, a difference of $${greatestDifference.difference}.`
  );
};

console.log(getTime(17));
greatestDifference(stockPrices);
