const products= ["Computer", "Cell Phones", "Vacuum Cleaner"]
const amounts= [3, 24, 8]
const prices= [199, 299, 399]


const top3 = (products, amounts, prices) =>
  products
    .map((name, index) => ({ name, index, revenue: amounts[index] * prices[index] }))
    .sort((a, b) => b.revenue - a.revenue || a.index - b.index)
    .slice(0, 3)
    .map(product => product.name)

console.log(top3(products, amounts, prices))
