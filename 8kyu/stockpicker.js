var maxProfit = function (prices) {
  let day = -1;

  let protit = 0;
  for (let x = 0; x < prices.length; x++) {
    for (let i = x + 1; i < prices.length - 1; i++) {
      let difference = prices[i] - prices[x];

      if (protit < difference) {
        protit = difference;
      }
    }
    day = protit;
  }
  return day;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
