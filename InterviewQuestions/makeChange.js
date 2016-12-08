function waysToReturnChange(denominations, numOfCoins, amount) {
    
    if(amount === 0) return 1; // Perfect!
    
    if(amount < 0) return 0; // No solution exists for negative amount
    
    if(numOfCoins < 0 && amount > 0) return 0; // We don't have coins left!
    
    console.log('checking ways to make ' + amount + ' with ' + denominations.slice(numOfCoins));

    return waysToReturnChange(denominations, numOfCoins, amount - denominations[numOfCoins]) + 
           waysToReturnChange(denominations, numOfCoins - 1, amount);
}

function waysToReturnMemoize(amount, denominations) {
    // intialize an array of zeros with indices up to amount
    var waysOfDoingNcents = [];
    for (var i = 0; i <= amount; i++) {
        waysOfDoingNcents[i] = 0;
    }
    // there is 1 way to renturn 0 cents
    waysOfDoingNcents[0] = 1;

    for (var j = 0; j < denominations.length; j++) {
        // we can only start returning change with coins in our denominations
        var coin = denominations[j];
        
        // we start bottom up, each time reducing change amout with curr coin.
        for (var higherAmount = coin; higherAmount <= amount; higherAmount++) {
            var higherAmountRemainder = higherAmount - coin;
            // ways to create change is equivalent to reducing the problem to a known problem
            // and gaining all the ways to solve for smaller problems
            waysOfDoingNcents[higherAmount] += waysOfDoingNcents[higherAmountRemainder];
        }
    }

    return waysOfDoingNcents[amount];
}

var denominations = [1, 2, 3];
var amount = 4;
console.log(waysToReturnChange(denominations, denominations.length - 1, 4));
console.log(waysToReturnMemoize(4,denominations));