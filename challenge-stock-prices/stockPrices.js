let price = [15, 10, 20, 22, 1, 9];
let price2 = [102, 207, 390, 400, 350, 206]

// function best(arr) {
// if (max <= min)
// return 0;

// let profit = 0;

// let min = Math.min(...arr)
// let max = Math.max(...arr)
// if ( max - min > 0){
// return profit  
// }
// }

// console.log(best(price))

console.log('============================')

const best = (arr) => {
    let bestPrice = 0
    let lowest = arr[0]

    for (i = 0; i < arr.length; i++);
    if (arr[i] < lowest){
        console.log('======================================')
        console.log(`the current value in the loop, ${arr[i]}, is less than the lowest value, ${lowest}.`)
        lowest = arr[i]
        console.lofg(`the new lowest value is ${lowest}`)
    }
    let difference = arr[i] - lowest;
    console.log(`the profit on the current sale is ${difference}`)
    if (difference > bestPrice){
        console.log(`the current price difference, ${difference}, is higher than best sale, ${bestPrice}`)
        bestPrice = difference
        
    }
    return bestPrice
}

console.log(best(price2))