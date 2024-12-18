// Brute Force

// const maxProfit = (prices) => {
//   let globalProfit = 0;
//   for (let i = 0; i < prices.length - 1; i++) {
//     for (let j = i + 1; j < prices.length; j++) {
//       const currentProfit = prices[j] - prices[i];
//       if (currentProfit > globalProfit) {
//         globalProfit = currentProfit;
//       }
//     }
//   }
//   return globalProfit;
// };

// console.log(maxProfit([7, 1, 5, 3, 6, 4]));
// _______________________________________________________________________________________________

// Greedy Algorithm

const maxProfit = (prices) => {
  let minPrice = prices[0];
  let profit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    }
    let currentProfit = prices[i] - minPrice;
    profit = Math.max(profit, currentProfit);
  }
  return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
